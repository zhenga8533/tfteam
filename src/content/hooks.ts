import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useActiveSet } from "@/lib/data/hooks";
import { loadComps } from ".";

export const compGuidesQuery = (set: number) =>
  queryOptions({ queryKey: ["guides", set], queryFn: () => loadComps(set) });

/** The active set's comp guides, best tier first. */
export function useCompGuides() {
  return useSuspenseQuery(compGuidesQuery(useActiveSet().set)).data;
}
