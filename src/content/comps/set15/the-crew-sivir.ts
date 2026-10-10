import type { Comp } from "../../types";

export default {
  slug: "set15-the-crew-sivir",
  name: "The Crew Sivir",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 1-cost reroll comp built around three-star Sivir. Sivir carries alongside Ziggs (Void Staff, Guinsoo's Rageblade and Rabadon's Deathcap). The board runs 4 Strategist, 5 The Crew and 2 Protector.",
  board: [
    {
      apiName: "TFT15_Malphite",
      hex: 3,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_BrambleVest", "TFT_Item_Redemption"],
    },
    { apiName: "TFT15_JarvanIV", hex: 8 },
    { apiName: "TFT15_Ryze", hex: 9 },
    { apiName: "TFT15_Shen", hex: 11, star: 3, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT15_Sivir", hex: 21, star: 3, carry: true },
    {
      apiName: "TFT15_TwistedFate",
      hex: 23,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_GuinsoosRageblade", "TFT_Item_Morellonomicon"],
    },
    {
      apiName: "TFT15_Ziggs",
      hex: 25,
      star: 3,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_GuinsoosRageblade", "TFT_Item_RabadonsDeathcap"],
    },
    { apiName: "TFT15_Janna", hex: 27 },
  ],
  early: [
    { apiName: "TFT15_Malphite", hex: 2, items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption"] },
    { apiName: "TFT15_Kennen", hex: 3 },
    { apiName: "TFT15_Shen", hex: 4 },
    { apiName: "TFT15_Sivir", hex: 24, carry: true, items: ["TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "TFT6_Augment_GachaAddict",
    "TFT7_Augment_PandorasBench",
    "TFT9_Augment_MissedConnections",
    "TFT6_Augment_HyperRoll",
    "TFT6_Augment_TradeSector",
    "TFT_Augment_WorthTheWaitGold",
  ],
  tips: [
    "On carousels and early slams, look for Gargoyle Stoneplate, Recurve Bow, Tear of the Goddess and Giant's Belt.",
    "At level 9, add Braum to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-crewboy-bebop",
  },
} satisfies Comp;
