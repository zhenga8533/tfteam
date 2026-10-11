import type { CompUnit, ContentSource, Difficulty, Playstyle, Tier, TierRows } from "../../src/content/types.ts";
import { TIERS } from "../../src/content/types.ts";
import { autoPlace } from "../../src/features/comps/auto-place.ts";
import type { Champion, Item, SetData, Trait } from "../../src/lib/data/schema.ts";
import { BOARD_SIZE, MAX_ITEMS } from "../../src/lib/game/board.ts";
import { computeTraits } from "../../src/lib/game/traits.ts";

export const SITE = "https://tftacademy.com";
export const SOURCE_NAME = "TFT Academy";

/** A unit as the source's comp API lists it. `stars` only marks three-star targets (1 means unspecified). */
export interface SourceUnit {
  apiName: string;
  boardIndex?: number;
  items?: string[];
  stars?: number;
}

/** The fields of a source comp the import reads. Its written text (title, tips) is never used. */
export interface SourceComp {
  compSlug: string;
  isPublic?: boolean;
  set: number;
  tier: string;
  style: string;
  difficulty: string;
  mainChampion?: { apiName: string } | null;
  finalComp?: SourceUnit[];
  earlyComp?: SourceUnit[];
  maxCap?: (SourceUnit & { predecessors?: string[] })[];
  altBuilds?: SourceUnit[];
  carousel?: { apiName: string }[];
  augments?: { apiName: string; disabled?: boolean }[];
  augmentTypes?: string[];
  updated: string;
}

/** One rarity's augment tier list at one stage, from the source's augment API. */
export interface SourceAugmentList {
  /** 1 silver, 2 gold, 3 prismatic. */
  augmenttier: number;
  /** A game stage like "3-2", or "All" for the list across stages. */
  stage: string;
  tier: Partial<Record<string, string[]>>;
  updated: string;
}

/** A converted guide: everything a `Comp` module needs except its slug. */
export interface ImportedComp {
  name: string;
  tier: Tier;
  playstyle: Playstyle;
  difficulty: Difficulty;
  summary: string;
  board: CompUnit[];
  early?: CompUnit[];
  augments: string[];
  tips: string[];
  carries: string[];
  /** The board's other active traits, strongest first, for telling apart guides with the same name. */
  otherTraits: string[];
  updatedAt: string;
  source: ContentSource;
}

/** Lookups into one set's game data, resolving the source's apiNames through the data's aliases. */
export class SetLookup {
  readonly champions: Map<string, Champion>;
  readonly items: Map<string, Item>;
  readonly traits: Map<string, Trait>;
  readonly augments: Set<string>;

  constructor(private readonly data: SetData) {
    this.champions = new Map(data.champions.map((champion) => [champion.apiName, champion]));
    this.items = new Map(data.items.map((item) => [item.apiName, item]));
    this.traits = new Map(data.traits.map((trait) => [trait.apiName, trait]));
    this.augments = new Set(data.augments.map((augment) => augment.apiName));
  }

  champion(apiName: string): Champion | undefined {
    return this.champions.get(this.data.championAliases?.[apiName] ?? apiName);
  }

  item(apiName: string): Item | undefined {
    return this.items.get(this.data.itemAliases?.[apiName] ?? apiName);
  }
}

const PLAYSTYLES: [RegExp, Playstyle][] = [
  [/reroll/i, "Reroll"],
  [/fast 9|level 9|lvl 9/i, "Fast 9"],
  [/fast 8|level 8|lvl 8/i, "Fast 8"],
  [/slow roll/i, "Slow Roll"],
];

export const playstyleOf = (style: string): Playstyle =>
  PLAYSTYLES.find(([pattern]) => pattern.test(style))?.[1] ?? "Flex";

const DIFFICULTIES: Record<string, Difficulty> = { EASY: "Easy", MEDIUM: "Medium", HARD: "Hard" };

/** "Conditional" comps need a particular opener or augment, so they count as hard. */
export const difficultyOf = (difficulty: string): Difficulty => DIFFICULTIES[difficulty.toUpperCase()] ?? "Hard";

export const tierOf = (tier: string): Tier | undefined => TIERS.find((entry) => entry === tier.toUpperCase());

const rerollCost = (style: string) => /(\d)-cost reroll/i.exec(style)?.[1];

/** "a, b and c". */
export function list(names: string[]): string {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`;
}

/**
 * The units a board keeps: champions the site knows, with known items. Summons, props and "flex slot" placeholders
 * aren't shop champions, so they're dropped; a comp that would lose a carry or an itemized unit is skipped instead
 * (null), since its board would no longer be the comp.
 */
function convertUnits(units: SourceUnit[], lookup: SetLookup, carries: Set<string>): CompUnit[] | null {
  const converted: CompUnit[] = [];
  for (const unit of units) {
    const champion = lookup.champion(unit.apiName);
    if (!champion) {
      if ((unit.items?.length ?? 0) > 0 || carries.has(unit.apiName)) return null;
      continue;
    }
    // A guide fields each champion once; boards place units by champion.
    if (converted.some((entry) => entry.apiName === champion.apiName)) continue;
    const items = (unit.items ?? []).flatMap((apiName) => lookup.item(apiName)?.apiName ?? []).slice(0, MAX_ITEMS);
    const compUnit: CompUnit = { apiName: champion.apiName, hex: unit.boardIndex ?? -1 };
    if ((unit.stars ?? 1) >= 3) compUnit.star = 3;
    if (carries.has(unit.apiName)) compUnit.carry = true;
    if (items.length) compUnit.items = items;
    converted.push(compUnit);
  }
  return converted;
}

/** Keeps each unit's own hex where it has a free, valid one, and lays out the rest by range (see `autoPlace`). */
function placeUnits(units: CompUnit[], lookup: SetLookup): CompUnit[] {
  const positions = new Map<string, number>();
  const taken = new Set<number>();
  for (const unit of units) {
    if (unit.hex < 0 || unit.hex >= BOARD_SIZE || taken.has(unit.hex) || positions.has(unit.apiName)) continue;
    positions.set(unit.apiName, unit.hex);
    taken.add(unit.hex);
  }
  return autoPlace(units, lookup.champions, positions);
}

const MIN_BOARD_UNITS = 6;
const MIN_EARLY_UNITS = 3;
const DAMAGE_ITEMS_FOR_CARRY = 2;
const DAMAGE_STATS = ["AD", "AP", "AS"];

const isDamageItem = (item: Item | undefined) => DAMAGE_STATS.some((stat) => item?.effects?.[stat] !== undefined);

/** The comp's leading trait: the strongest active one its main carry has, else the board's strongest. */
function leadingTrait(board: CompUnit[], mainCarry: Champion, lookup: SetLookup) {
  const active = computeTraits(
    board.map((unit) => ({ apiName: unit.apiName, items: unit.items ?? [] })),
    lookup.champions,
    lookup.traits,
    lookup.items,
  ).filter((state) => state.activeIndex >= 0 && state.style !== "unique");
  return { leading: active.find((state) => mainCarry.traits.includes(state.trait.apiName)) ?? active[0], active };
}

/** Item names for text, a repeated item once with its count ("2× Jeweled Gauntlet"). */
function itemNames(apiNames: string[], lookup: SetLookup): string[] {
  const counts = new Map<string, number>();
  for (const apiName of apiNames) {
    const name = lookup.item(apiName)?.name;
    if (name) counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  return [...counts].map(([name, count]) => (count > 1 ? `${count}× ${name}` : name));
}

/** A one-paragraph summary from the board: how it's played, who carries with what, and the traits it runs. */
function summaryOf(
  comp: SourceComp,
  playstyle: Playstyle,
  board: CompUnit[],
  carries: Champion[],
  traits: string[],
  lookup: SetLookup,
): string {
  const [main, second] = carries;
  const cost = rerollCost(comp.style);
  const opening =
    playstyle === "Reroll"
      ? `A ${cost ? `${cost}-cost ` : ""}reroll comp built around three-star ${main!.name}.`
      : playstyle === "Fast 9"
        ? `A level 9 comp that caps its board around ${main!.name}.`
        : playstyle === "Fast 8"
          ? `A level 8 comp that rolls for ${main!.name}.`
          : /lose/i.test(comp.style)
            ? `Lose streaks through the early game, then stabilizes around ${main!.name}.`
            : `A flexible comp centered on ${main!.name}.`;
  const carryLine = (champion: Champion) => {
    const unit = board.find((entry) => entry.apiName === champion.apiName);
    const items = itemNames(unit?.items ?? [], lookup);
    return items.length ? `${champion.name} (${list(items)})` : champion.name;
  };
  const carriesLine = second
    ? ` ${carryLine(main!)} carries alongside ${carryLine(second)}.`
    : ` ${carryLine(main!)} carries.`;
  const traitLine = traits.length ? ` The board runs ${list(traits)}.` : "";
  return `${opening}${carriesLine}${traitLine}`;
}

const AUGMENT_TYPES: Record<string, string> = { ITEMS: "item", ECON: "economy", COMBAT: "combat" };

/** Tips worded from the guide's structured data: carousel priorities, the capped board, item alternatives, augments. */
function tipsOf(comp: SourceComp, lookup: SetLookup): string[] {
  const tips: string[] = [];
  const carousel = (comp.carousel ?? []).flatMap((entry) => lookup.item(entry.apiName)?.name ?? []);
  if (carousel.length) tips.push(`On carousels and early slams, look for ${list(carousel.slice(0, 4))}.`);

  const byLevel = new Map<string, string[]>();
  for (const unit of comp.maxCap ?? []) {
    const champion = lookup.champion(unit.apiName);
    if (!champion) continue;
    const level = /Lv(\d+)/.exec(unit.predecessors?.[0] ?? "")?.[1] ?? "9";
    byLevel.set(level, [...(byLevel.get(level) ?? []), champion.name]);
  }
  for (const [level, names] of [...byLevel].sort(([a], [b]) => Number(a) - Number(b))) {
    tips.push(`At level ${level}, add ${list(names)} to the board.`);
  }

  for (const build of (comp.altBuilds ?? []).slice(0, 2)) {
    const champion = lookup.champion(build.apiName);
    const items = itemNames(build.items ?? [], lookup);
    if (champion && items.length) tips.push(`${champion.name} can also hold ${list(items)}.`);
  }

  const types = (comp.augmentTypes ?? []).flatMap((type) => AUGMENT_TYPES[type] ?? []);
  if (types.length) tips.push(`Favor ${list(types)} augments, in that order.`);
  return tips;
}

/** A guide on our terms: its board, early board, augments and tips, with all text written from the data. */
export function convertComp(comp: SourceComp, lookup: SetLookup): ImportedComp | null {
  const tier = tierOf(comp.tier);
  const mainApiName = comp.mainChampion?.apiName;
  const main = mainApiName ? lookup.champion(mainApiName) : undefined;
  if (!tier || !main || !mainApiName) return null;

  // The main champion carries, and so does anyone else holding a full set of mostly damage items (a tank's full set
  // is armor and health).
  const carryNames = new Set([
    mainApiName,
    ...(comp.finalComp ?? [])
      .filter(
        (unit) =>
          (unit.items?.length ?? 0) >= MAX_ITEMS &&
          (unit.items ?? []).filter((apiName) => isDamageItem(lookup.item(apiName))).length >= DAMAGE_ITEMS_FOR_CARRY,
      )
      .map((unit) => unit.apiName),
  ]);
  const units = convertUnits(comp.finalComp ?? [], lookup, carryNames);
  if (!units || units.length < MIN_BOARD_UNITS) return null;
  const board = placeUnits(units, lookup);

  const earlyUnits = convertUnits(comp.earlyComp ?? [], lookup, new Set());
  const early = earlyUnits && earlyUnits.length >= MIN_EARLY_UNITS ? placeUnits(earlyUnits, lookup) : undefined;

  const carries = board.filter((unit) => unit.carry).map((unit) => lookup.champions.get(unit.apiName)!);
  carries.sort((a, b) => Number(b.apiName === main.apiName) - Number(a.apiName === main.apiName));
  const { leading, active } = leadingTrait(board, main, lookup);
  const traits = active.slice(0, 3).map((state) => `${state.count} ${state.trait.name}`);
  const playstyle = playstyleOf(comp.style);
  const otherTraits = active.filter((state) => state !== leading).map((state) => state.trait.name);

  return {
    name: leading && !main.name.includes(leading.trait.name) ? `${leading.trait.name} ${main.name}` : main.name,
    tier,
    playstyle,
    difficulty: difficultyOf(comp.difficulty),
    summary: summaryOf(comp, playstyle, board, carries, traits, lookup),
    board,
    early,
    augments: (comp.augments ?? [])
      .filter((augment) => !augment.disabled && lookup.augments.has(augment.apiName))
      .map((augment) => augment.apiName),
    tips: tipsOf(comp, lookup),
    carries: carries.map((champion) => champion.apiName),
    otherTraits,
    updatedAt: comp.updated.slice(0, 10),
    source: { name: SOURCE_NAME, url: `${SITE}/tierlist/comps/${comp.compSlug}` },
  };
}

/**
 * One augment tier list from the source's per-rarity lists: each rarity's newest list across all stages, merged tier
 * by tier (the site filters the list by rarity). Augments the set's data doesn't have are left out.
 */
export function mergeAugmentLists(lists: SourceAugmentList[], known: Set<string>): TierRows {
  const newest = new Map<number, SourceAugmentList>();
  for (const entry of lists) {
    if (entry.stage !== "All") continue;
    const current = newest.get(entry.augmenttier);
    if (!current || entry.updated > current.updated) newest.set(entry.augmenttier, entry);
  }
  const rarities = [...newest.values()].sort((a, b) => a.augmenttier - b.augmenttier);
  const rows: TierRows = {};
  for (const tier of TIERS) {
    const apiNames = [...new Set(rarities.flatMap((entry) => entry.tier[tier] ?? []))].filter((name) =>
      known.has(name),
    );
    if (apiNames.length) rows[tier] = apiNames;
  }
  return rows;
}
