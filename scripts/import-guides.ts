/**
 * Imports comp guides and augment tier lists from TFT Academy (used with their permission) into `src/content`, for
 * every set the site has. Boards, items, augments and tiers come from their data; every piece of text (names,
 * summaries, tips) is written here from that data, never copied. Re-running replaces the guides an earlier run wrote
 * (those with this source) and each set's augment tiers, leaving hand-written guides and tier overrides alone.
 *
 * Run `npm run data` first: guides are checked against each set's generated game data.
 */
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { compSource, formatContentSource, tierListSource } from "../src/content/serialize.ts";
import type { Comp, CompUnit, TierList } from "../src/content/types.ts";
import { manifestSchema, type SetData } from "../src/lib/data/schema.ts";
import { type Board, createBoard } from "../src/lib/game/board.ts";
import {
  convertComp,
  type ImportedComp,
  mergeAugmentLists,
  SetLookup,
  SITE,
  SOURCE_NAME,
  type SourceAugmentList,
  type SourceComp,
} from "./guides/convert.ts";

const ROOT = join(import.meta.dirname, "..");
const DATA_DIR = join(ROOT, "public", "data");
const CONTENT_DIR = join(ROOT, "src", "content");

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(`${SITE}${path}`, { headers: { "User-Agent": "tfteam-content-import" } });
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  return (await response.json()) as T;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const loadModule = async <T>(file: string) => ((await import(pathToFileURL(file).href)) as { default: T }).default;

function toBoard(units: CompUnit[]): Board {
  const board = createBoard();
  for (const unit of units) board[unit.hex] = { apiName: unit.apiName, star: unit.star ?? 1, items: unit.items ?? [] };
  return board;
}

/**
 * Unique names within the set: two guides on the same carry and trait get their second carry, then their playstyle,
 * then one of their other traits added. Guides that still collide are skipped.
 */
function nameGuides(guides: ImportedComp[], lookup: SetLookup, taken: Set<string>): ImportedComp[] {
  const named: ImportedComp[] = [];
  for (const guide of guides) {
    const second = guide.carries[1] ? lookup.champions.get(guide.carries[1])?.name : undefined;
    const candidates = [
      guide.name,
      ...(second ? [`${guide.name} & ${second}`] : []),
      `${guide.name} (${guide.playstyle})`,
      ...guide.otherTraits.map((trait) => `${guide.name} (${trait})`),
    ];
    const name = candidates.find((candidate) => !taken.has(slugify(candidate)));
    if (!name) {
      console.warn(`  skipped a second "${guide.name}" guide`);
      continue;
    }
    taken.add(slugify(name));
    named.push({ ...guide, name });
  }
  return named;
}

/** Removes the guides an earlier import wrote; returns the file names (without `.ts`) of the hand-written ones left. */
async function clearImported(dir: string): Promise<Set<string>> {
  const kept = new Set<string>();
  if (!existsSync(dir)) return kept;
  for (const file of await readdir(dir)) {
    if (!file.endsWith(".ts")) continue;
    const comp = await loadModule<Comp>(join(dir, file));
    if (comp.source?.name === SOURCE_NAME) await rm(join(dir, file));
    else kept.add(file.slice(0, -3));
  }
  return kept;
}

async function importComps(set: number, lookup: SetLookup): Promise<number> {
  const { guides } = await fetchJson<{ guides: SourceComp[] }>(`/api/tierlist/comps?set=${set}`);
  const converted = guides
    .filter((guide) => guide.isPublic !== false)
    .flatMap((guide) => convertComp(guide, lookup) ?? []);
  const dir = join(CONTENT_DIR, "comps", `set${set}`);
  const taken = await clearImported(dir);
  if (converted.length === 0) return 0;
  await mkdir(dir, { recursive: true });

  // Best tiers first, so they keep the plain names.
  const order = ["S", "A", "B", "C", "X"];
  converted.sort((a, b) => order.indexOf(a.tier) - order.indexOf(b.tier));
  const named = nameGuides(converted, lookup, taken);
  for (const guide of named) {
    const source = compSource({
      guide,
      set,
      board: toBoard(guide.board),
      early: guide.early && toBoard(guide.early),
      today: guide.updatedAt,
      source: guide.source,
    });
    await writeFile(join(dir, `${slugify(guide.name)}.ts`), await formatContentSource(source));
  }
  return named.length;
}

async function importAugments(set: number, lookup: SetLookup): Promise<number> {
  const { augments_tierlists: lists } = await fetchJson<{ augments_tierlists: SourceAugmentList[] }>(
    `/api/tierlist/augments?set=${set}`,
  );
  const augments = mergeAugmentLists(lists, lookup.augments);
  const count = Object.values(augments).flat().length;
  if (count === 0) return 0;

  const file = join(CONTENT_DIR, "tierlists", `set${set}.ts`);
  const existing: Partial<TierList> = existsSync(file) ? await loadModule<TierList>(file) : {};
  const list: TierList = {
    ...existing,
    set,
    augments,
    augmentsSource: { name: SOURCE_NAME, url: `${SITE}/tierlist/augments` },
    updatedAt: lists
      .map((entry) => entry.updated.slice(0, 10))
      .sort()
      .at(-1)!,
  };
  await writeFile(file, await formatContentSource(tierListSource(list)));
  return count;
}

const manifest = manifestSchema.parse(JSON.parse(await readFile(join(DATA_DIR, "manifest.json"), "utf8")));
for (const set of manifest.patches.latest.sets) {
  const data = JSON.parse(await readFile(join(DATA_DIR, "latest", `set${set}.json`), "utf8")) as SetData;
  const lookup = new SetLookup(data);
  const comps = await importComps(set, lookup);
  const augments = await importAugments(set, lookup);
  console.log(`set ${set}: ${comps} comp guides, ${augments} ranked augments`);
}
