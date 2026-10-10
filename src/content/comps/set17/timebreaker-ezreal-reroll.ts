import type { Comp } from "../../types";

export default {
  slug: "set17-timebreaker-ezreal-reroll",
  name: "Timebreaker Ezreal (Reroll)",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Ezreal. Ezreal (Spear of Shojin, Infinity Edge and Deathblade) carries. The board runs 4 Timebreaker, 4 Brawler and 2 Dark Star.",
  board: [
    { apiName: "TFT17_Maokai", hex: 1 },
    { apiName: "TFT17_TahmKench", hex: 2 },
    { apiName: "TFT17_Pantheon", hex: 3, items: ["TFT_Item_SpectralGauntlet", "TFT_Item_RedBuff"] },
    {
      apiName: "TFT17_Chogath",
      hex: 4,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT17_Riven", hex: 19 },
    { apiName: "TFT17_Milio", hex: 21 },
    { apiName: "TFT17_Jhin", hex: 24 },
    {
      apiName: "TFT17_Ezreal",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge", "TFT_Item_Deathblade"],
    },
  ],
  early: [
    { apiName: "TFT17_Pantheon", hex: 2 },
    { apiName: "TFT17_Chogath", hex: 3, items: ["TFT_Item_RedBuff", "TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT17_Gnar", hex: 23 },
    { apiName: "TFT17_Ezreal", hex: 24, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge"] },
  ],
  augments: [
    "TFT6_Augment_GachaAddict",
    "TFT9_Augment_MissedConnections",
    "TFT6_Augment_TradeSector",
    "TFT_Augment_EarlyLearning",
    "TFT_Augment_NoScoutNoPivot",
    "TFT_Augment_ConstructACompanion",
    "TFT_Augment_SwordOverflow",
    "TFT_Augment_TreasureHunt",
  ],
  tips: [
    "On carousels and early slams, look for Gargoyle Stoneplate, Spear of Shojin, Infinity Edge and Giant's Belt.",
    "At level 9, add Kai'Sa, Morgana and Xayah to the board.",
    "Ezreal can also hold Dawncore.",
    "Cho'Gath can also hold Soraka's Miracle and Talisman Of Ascension.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-ez-cho",
  },
} satisfies Comp;
