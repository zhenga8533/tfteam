import { type Board, createBoard } from "@/lib/game/board";
import { type Comp, type CompUnit, type Tier, TIERS } from "./types";

// Guides load one set at a time: each set's modules form one chunk (see vite.config.ts), fetched when a page needs it.
const compModules = import.meta.glob<Comp>("./comps/**/*.ts", { import: "default" });

const setFolder = (path: string) => Number(/\/comps\/set(\d+)\//.exec(path)?.[1]);

/** The sets with guides. */
export const GUIDE_SETS = [...new Set(Object.keys(compModules).map(setFolder))];

const tierRank = (tier: Tier) => TIERS.indexOf(tier);

/** A set's guides, best tier first. */
export async function loadComps(set: number): Promise<Comp[]> {
  const loads = Object.entries(compModules).flatMap(([path, load]) => (setFolder(path) === set ? [load()] : []));
  return (await Promise.all(loads)).sort((a, b) => tierRank(a.tier) - tierRank(b.tier) || a.name.localeCompare(b.name));
}

/** The set a guide's slug belongs to: slugs start with `set{N}-`. */
export const setOfSlug = (slug: string) => Number(/^set(\d+)-/.exec(slug)?.[1]) || undefined;

export function compBoard(units: CompUnit[]): Board {
  const board = createBoard();
  for (const unit of units) {
    board[unit.hex] = {
      apiName: unit.apiName,
      star: unit.star ?? 1,
      items: unit.items ?? [],
      ...(unit.flex && { flex: true }),
      ...(unit.alternatives?.length && { alternatives: unit.alternatives }),
    };
  }
  return board;
}
