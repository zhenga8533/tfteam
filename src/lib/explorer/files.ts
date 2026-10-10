import { RANK_OPTIONS } from "../data/constants";
import type { ItemKind, RankFloor } from "../data/schema";
import type { ExplorerFilter } from "./engine";

/**
 * The Explorer's files in a set's stats folder. Every query reads all of the patch's boards it's about: a champion's,
 * trait's or item's boards come in one file per rank (`master` holds Master+), so a floor downloads only its ranks'
 * files, and the totals answer queries without any of them exactly.
 */
export const EXPLORER_FILES = {
  champion: (apiName: string, rank: RankFloor) => `explorer/champions/${apiName}/${rank}.bin.gz`,
  trait: (apiName: string, rank: RankFloor) => `explorer/traits/${apiName}/${rank}.bin.gz`,
  item: (apiName: string, rank: RankFloor) => `explorer/items/${apiName}/${rank}.bin.gz`,
  totals: "explorer/totals.json",
};

/**
 * Items with files of their own, so boards can be filtered by one held on any champion. A board holds about one of
 * these, so their files stay small; completed items (about nine a board) would double the Explorer's size.
 */
export const BOARD_ITEM_KINDS: readonly ItemKind[] = ["emblem", "artifact", "radiant", "set"];

/**
 * What a query reads: its first champion's file, else its first item's (smaller than a trait's), else its first
 * trait's, else the totals.
 */
export type ExplorerSource =
  | { type: "champion"; apiName: string }
  | { type: "item"; apiName: string }
  | { type: "trait"; apiName: string }
  | { type: "totals" };

export function explorerSource(filters: ExplorerFilter[]): ExplorerSource {
  const unit = filters.find((filter) => filter.type === "unit");
  if (unit) return { type: "champion", apiName: unit.unit };
  const item = filters.find((filter) => filter.type === "item");
  if (item) return { type: "item", apiName: item.item };
  const trait = filters.find((filter) => filter.type === "trait");
  if (trait) return { type: "trait", apiName: trait.trait };
  return { type: "totals" };
}

/** The files a query at `floor` reads: the totals, or the source's file for every rank at or above the floor. */
export function explorerFiles(source: ExplorerSource, floor: RankFloor): string[] {
  if (source.type === "totals") return [EXPLORER_FILES.totals];
  const ranks = RANK_OPTIONS.slice(0, RANK_OPTIONS.indexOf(floor) + 1);
  return ranks.map((rank) => EXPLORER_FILES[source.type](source.apiName, rank));
}
