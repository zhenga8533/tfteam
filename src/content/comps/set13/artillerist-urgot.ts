import type { Comp } from "../../types";

export default {
  slug: "set13-artillerist-urgot",
  name: "Artillerist Urgot",
  set: 13,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Urgot. Urgot (Sterak's Gage, Bloodthirster and Titan's Resolve) carries alongside Tristana (Infinity Edge, Guinsoo's Rageblade and Striker's Flail). The board runs 4 Artillerist, 3 Experiment and 2 Bruiser.",
  board: [
    { apiName: "TFT13_Gangplank", hex: 2 },
    {
      apiName: "TFT13_Urgot",
      hex: 3,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT13_Elise", hex: 4 },
    { apiName: "TFT13_NunuWillump", hex: 5 },
    { apiName: "TFT13_Corki", hex: 21 },
    { apiName: "TFT13_Ezreal", hex: 23 },
    {
      apiName: "TFT13_Tristana",
      hex: 24,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_GuinsoosRageblade", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT13_Zyra", hex: 27 },
  ],
  early: [
    { apiName: "TFT13_Vladimir", hex: 2 },
    { apiName: "TFT13_Darius", hex: 3 },
    { apiName: "TFT13_Urgot", hex: 10, carry: true, items: ["TFT_Item_SteraksGage", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT13_Draven", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_LivingForge",
    "TFT_Augment_TwoMuchValue",
    "TFT11_Augment_OverEncumbered",
    "TFT_Augment_FindYourCenter",
  ],
  tips: [
    "On carousels and early slams, look for Sterak's Gage, B.F. Sword, Giant's Belt and Sparring Gloves.",
    "Urgot can also hold Death's Defiance, Innervating Locket and Mittens.",
    "Urgot can also hold 2× Sterak's Gage and Radiant Sterak's Gage.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-artillerist-urgot",
  },
} satisfies Comp;
