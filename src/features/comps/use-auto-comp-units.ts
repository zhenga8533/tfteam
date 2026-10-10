import { useMemo } from "react";
import { useCompGuides } from "@/content/hooks";
import type { Comp, CompUnit } from "@/content/types";
import { useGameData } from "@/lib/data/hooks";
import type { AutoComp } from "@/lib/data/schema";
import { autoCompUnits } from "./auto-place";
import { boardSignature } from "./use-comp-signature";

/** A detected comp's board, positioned like the hand-written guide for the same comp (returned too) where there is one. */
export function useAutoCompUnits(comp: AutoComp): { units: CompUnit[]; guide?: Comp } {
  const data = useGameData();
  const all = useCompGuides();
  const guides = useMemo(() => new Map(all.map((guide) => [boardSignature(guide.board, data), guide])), [all, data]);
  return useMemo(() => {
    const guide = [comp.signature, ...comp.variants].map((signature) => guides.get(signature)).find(Boolean);
    return { units: autoCompUnits(comp, data.championsByApi, guide?.board), guide };
  }, [comp, data, guides]);
}
