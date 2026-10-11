import { describe, expect, it } from "vitest";
import type { SetData } from "../../src/lib/data/schema.ts";
import {
  convertComp,
  difficultyOf,
  list,
  mergeAugmentLists,
  playstyleOf,
  SetLookup,
  type SourceComp,
} from "./convert.ts";

const champion = (apiName: string, name: string, traits: string[], range = 4) => ({
  apiName,
  name,
  cost: 3,
  traits,
  stats: { range },
});
const item = (apiName: string, name: string, effects: Record<string, number>) => ({
  apiName,
  name,
  kind: "completed",
  effects,
});

const data = {
  number: 18,
  champions: [
    champion("Ahri", "Ahri", ["Blossom"]),
    champion("Sett", "Sett", ["Blossom", "Brawler"], 1),
    champion("Vi", "Vi", ["Brawler"], 1),
    champion("Zyra", "Zyra", ["Blossom"]),
    champion("Lux", "Lux", ["Blossom"]),
    champion("Ornn", "Ornn", ["Brawler"], 1),
  ],
  traits: [
    { apiName: "Blossom", name: "Blossom", breakpoints: [{ minUnits: 2, style: 1 }] },
    { apiName: "Brawler", name: "Brawler", breakpoints: [{ minUnits: 2, style: 1 }] },
  ],
  items: [
    item("JG", "Jeweled Gauntlet", { AP: 35 }),
    item("Shojin", "Spear of Shojin", { AD: 0.15, AP: 15 }),
    item("Warmog", "Warmog's Armor", { Health: 500 }),
    item("Bramble", "Bramble Vest", { Armor: 50 }),
    item("Gargoyle", "Gargoyle Stoneplate", { Armor: 25 }),
  ],
  augments: [{ apiName: "Known" }],
  itemAliases: { DA_JG: "JG" },
  championAliases: {},
} as unknown as SetData;
const lookup = new SetLookup(data);

const comp = (overrides: Partial<SourceComp> = {}): SourceComp => ({
  compSlug: "set-18-blossom-ahri",
  set: 18,
  tier: "A",
  style: "3-Cost Reroll",
  difficulty: "MEDIUM",
  mainChampion: { apiName: "Ahri" },
  finalComp: [
    { apiName: "Ahri", boardIndex: 24, items: ["DA_JG", "Shojin", "JG"], stars: 3 },
    { apiName: "Vi", boardIndex: 3, items: ["Warmog", "Bramble", "Gargoyle"] },
    { apiName: "Sett", boardIndex: 2 },
    { apiName: "Zyra", boardIndex: 25 },
    { apiName: "Lux", boardIndex: 26 },
    { apiName: "Ornn", boardIndex: 4 },
    { apiName: "SummonedPlant", boardIndex: 10 },
  ],
  augments: [{ apiName: "Known" }, { apiName: "Unknown" }, { apiName: "Known2", disabled: true }],
  updated: "2026-10-10 06:00:00.000Z",
  ...overrides,
});

describe("convertComp", () => {
  it("keeps the board, resolving aliases and dropping summons that aren't shop champions", () => {
    const converted = convertComp(comp(), lookup)!;
    expect(converted.board.map((unit) => [unit.apiName, unit.hex])).toEqual([
      ["Ahri", 24],
      ["Vi", 3],
      ["Sett", 2],
      ["Zyra", 25],
      ["Lux", 26],
      ["Ornn", 4],
    ]);
    expect(converted.board[0]).toMatchObject({ star: 3, carry: true, items: ["JG", "Shojin", "JG"] });
    expect(converted.augments).toEqual(["Known"]);
    expect(converted.updatedAt).toBe("2026-10-10");
    expect(converted.source.url).toBe("https://tftacademy.com/tierlist/comps/set-18-blossom-ahri");
  });

  it("marks the main champion and other damage-itemized units as carries, not full-item tanks", () => {
    expect(convertComp(comp(), lookup)!.carries).toEqual(["Ahri"]);
  });

  it("writes its own name and summary from the board", () => {
    const converted = convertComp(comp(), lookup)!;
    expect(converted.name).toBe("Blossom Ahri");
    expect(converted.playstyle).toBe("Reroll");
    expect(converted.summary).toBe(
      "A 3-cost reroll comp built around three-star Ahri. Ahri (2× Jeweled Gauntlet and Spear of Shojin) carries. The board runs 4 Blossom and 3 Brawler.",
    );
  });

  it("skips comps that would lose a carry or an itemized unit, or that have no tier", () => {
    const lost = comp({ finalComp: [...comp().finalComp!, { apiName: "Mystery", items: ["JG"] }] });
    expect(convertComp(lost, lookup)).toBeNull();
    expect(convertComp(comp({ tier: "" }), lookup)).toBeNull();
  });

  it("lays out units without a position, keeping those with one", () => {
    const converted = convertComp(
      comp({ earlyComp: [{ apiName: "Sett" }, { apiName: "Ahri" }, { apiName: "Vi" }] }),
      lookup,
    )!;
    const hexes = converted.early!.map((unit) => unit.hex);
    expect(new Set(hexes).size).toBe(3);
    expect(hexes.every((hex) => hex >= 0 && hex < 28)).toBe(true);
  });
});

describe("text helpers", () => {
  it("maps playstyles and difficulties", () => {
    expect(playstyleOf("4-Cost Fast 8")).toBe("Fast 8");
    expect(playstyleOf("Fast 9")).toBe("Fast 9");
    expect(playstyleOf("Lose Streak")).toBe("Flex");
    expect(difficultyOf("CONDITIONAL")).toBe("Hard");
  });

  it("joins names into a list", () => {
    expect(list(["a"])).toBe("a");
    expect(list(["a", "b", "c"])).toBe("a, b and c");
  });
});

describe("mergeAugmentLists", () => {
  it("merges each rarity's newest all-stage list, leaving out augments the set doesn't have", () => {
    const rows = mergeAugmentLists(
      [
        { augmenttier: 1, stage: "All", tier: { S: ["Old"] }, updated: "2026-01-01" },
        { augmenttier: 1, stage: "All", tier: { S: ["SilverS"], B: ["SilverB"] }, updated: "2026-02-01" },
        { augmenttier: 1, stage: "3-2", tier: { S: ["StageOnly"] }, updated: "2026-03-01" },
        { augmenttier: 3, stage: "All", tier: { S: ["PrismaticS", "Missing"] }, updated: "2026-02-01" },
      ],
      new Set(["Old", "SilverS", "SilverB", "StageOnly", "PrismaticS"]),
    );
    expect(rows).toEqual({ S: ["SilverS", "PrismaticS"], B: ["SilverB"] });
  });
});
