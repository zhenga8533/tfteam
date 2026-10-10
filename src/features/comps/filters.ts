import { listParam, matches, stringParam } from "@/lib/search";

/** The comp tier list's filters, kept in the URL. Every picked champion, trait and item must be in a comp. */
export interface CompFilters {
  q?: string;
  /** Comps that field all of these champions. */
  champions?: string[];
  /** Comps that run all of these traits, at any breakpoint. */
  traits?: string[];
  /** Comps whose board builds all of these items, on any champion. */
  items?: string[];
}

export function parseCompFilters(search: Record<string, unknown>): CompFilters {
  return {
    q: stringParam(search.q),
    champions: listParam(search.champions),
    traits: listParam(search.traits),
    items: listParam(search.items),
  };
}

export const hasCompFilters = ({ q, champions, traits, items }: CompFilters) =>
  Boolean(q || champions?.length || traits?.length || items?.length);

/** Whether a comp, given as its name, champions, traits and items, passes the filters. */
export function passesCompFilters(
  comp: { name: string; units: string[]; traits: string[]; items: string[] },
  { q, champions = [], traits = [], items = [] }: CompFilters,
  championName: (apiName: string) => string,
): boolean {
  const textMatch = matches(comp.name, q) || comp.units.some((apiName) => matches(championName(apiName), q));
  return (
    textMatch &&
    champions.every((apiName) => comp.units.includes(apiName)) &&
    traits.every((trait) => comp.traits.includes(trait)) &&
    items.every((item) => comp.items.includes(item))
  );
}
