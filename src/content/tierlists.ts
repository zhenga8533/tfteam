import type { TierList } from "./types";

// Kept apart from the guides so pages using guides don't load every set's tier lists.
const tierListModules = import.meta.glob<TierList>("./tierlists/*.ts", { eager: true, import: "default" });

export const ALL_TIER_LISTS: TierList[] = Object.values(tierListModules);

export const tierListForSet = (set: number) => ALL_TIER_LISTS.find((list) => list.set === set);
