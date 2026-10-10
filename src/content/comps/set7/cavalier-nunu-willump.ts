import type { Comp } from "../../types";

export default {
  slug: "set7-cavalier-nunu-willump",
  name: "Cavalier Nunu & Willump",
  set: 7,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Nunu & Willump. Nunu & Willump (Dragonmancer Emblem, Bloodthirster and Hand Of Justice) carries alongside Lee Sin (Hand Of Justice, Jeweled Gauntlet and Rabadon's Deathcap). The board runs 5 Dragonmancer, 2 Cavalier and 2 Mirage.",
  board: [
    { apiName: "TFT7_Sett", hex: 0 },
    {
      apiName: "TFT7_LeeSin",
      hex: 1,
      star: 3,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_JeweledGauntlet", "TFT_Item_RabadonsDeathcap"],
    },
    { apiName: "TFT7_Hecarim", hex: 3, items: ["TFT_Item_IonicSpark", "TFT_Item_RedBuff"] },
    { apiName: "TFT7_Yasuo", hex: 4 },
    { apiName: "TFT7_Karma", hex: 21 },
    {
      apiName: "TFT7_Nunu",
      hex: 23,
      star: 3,
      carry: true,
      items: ["TFT7_Item_DragonmancerEmblemItem", "TFT_Item_Bloodthirster", "TFT_Item_UnstableConcoction"],
    },
  ],
  early: [
    { apiName: "TFT7_Sett", hex: 2 },
    { apiName: "TFT7_Sejuani", hex: 3 },
    {
      apiName: "TFT7_Nunu",
      hex: 4,
      carry: true,
      items: ["TFT7_Item_DragonmancerEmblemItem", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT7_Karma", hex: 24 },
  ],
  augments: ["TFT7_Augment_UrfsGrabBag1", "TFT6_Augment_ThrillOfTheHunt2", "TFT6_Augment_CelestialBlessing3"],
  tips: [
    "On carousels and early slams, look for Dragonmancer Emblem, Bloodthirster, Hand Of Justice and Sparring Gloves.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-7-dragonmancer-nunu",
  },
} satisfies Comp;
