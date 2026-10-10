import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useActiveSet } from "@/lib/data/hooks";
import { loadComps } from ".";

export const compGuidesQuery = (set: number) =>
  queryOptions({ queryKey: ["guides", set], queryFn: () => loadComps(set) });

/** A set's comp guides (the active set's by default), best tier first. */
export function useCompGuides(set?: number) {
  const active = useActiveSet().set;
  return useSuspenseQuery(compGuidesQuery(set ?? active)).data;
}
