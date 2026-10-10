import type { Comp } from "../../types";

export default {
  slug: "set17-timebreaker-ezreal",
  name: "Timebreaker Ezreal",
  set: 17,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Ezreal. Ezreal (Spear of Shojin, Infinity Edge and Deathblade) carries alongside Milio (Spear of Shojin and 2× Rabadon's Deathcap). The board runs 4 Timebreaker, 4 Brawler and 2 Fateweaver.",
  board: [
    { apiName: "TFT17_TahmKench", hex: 2 },
    { apiName: "TFT17_Maokai", hex: 3 },
    {
      apiName: "TFT17_Pantheon",
      hex: 4,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_GargoyleStoneplate", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT17_Riven", hex: 19, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT17_Gnar", hex: 21 },
    { apiName: "TFT17_Caitlyn", hex: 22 },
    {
      apiName: "TFT17_Milio",
      hex: 26,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap", "TFT_Item_RabadonsDeathcap"],
    },
    {
      apiName: "TFT17_Ezreal",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge", "TFT_Item_Deathblade"],
    },
  ],
  early: [
    { apiName: "TFT17_Pantheon", hex: 3, items: ["TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT17_Gnar", hex: 23 },
    { apiName: "TFT17_Ezreal", hex: 24, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge"] },
    { apiName: "TFT17_Milio", hex: 25, carry: true },
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
    "At level 9, add Morgana and Jhin to the board.",
    "Ezreal can also hold Dawncore.",
    "Pantheon can also hold Lightshield Crest and Soraka's Miracle.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-timebreakers",
  },
} satisfies Comp;
