import { describe, expect, it } from "vitest";
import { explorerFiles, explorerSource } from "./files";

describe("explorerSource", () => {
  it("reads a champion's file first, then an item's, then a trait's", () => {
    const trait = { type: "trait", trait: "Blossom", minUnits: 3 } as const;
    const item = { type: "item", item: "BlossomEmblem" } as const;
    expect(explorerSource([trait, item, { type: "unit", unit: "Ahri" }])).toEqual({
      type: "champion",
      apiName: "Ahri",
    });
    expect(explorerSource([trait, item])).toEqual({ type: "item", apiName: "BlossomEmblem" });
    expect(explorerSource([trait])).toEqual({ type: "trait", apiName: "Blossom" });
    expect(explorerSource([{ type: "level", min: 8 }])).toEqual({ type: "totals" });
  });
});

describe("explorerFiles", () => {
  it("reads a champion's or trait's file for every rank at or above the floor", () => {
    expect(explorerFiles({ type: "champion", apiName: "Ahri" }, "diamond")).toEqual([
      "explorer/champions/Ahri/master.bin.gz",
      "explorer/champions/Ahri/diamond.bin.gz",
    ]);
    expect(explorerFiles({ type: "trait", apiName: "Blossom" }, "master")).toEqual([
      "explorer/traits/Blossom/master.bin.gz",
    ]);
  });

  it("reads the totals alone, whatever the floor", () => {
    expect(explorerFiles({ type: "totals" }, "emerald")).toEqual(["explorer/totals.json"]);
  });
});
