import type { Comp } from "../../types";

export default {
  slug: "set13-quickstriker-nocturne",
  name: "Quickstriker Nocturne",
  set: 13,
  tier: "A",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Nocturne. Nocturne (Sniper's Focus, Infinity Edge and Giant Slayer) carries alongside Akali (Hand Of Justice, Jeweled Gauntlet and Edge of Night). The board runs 4 Quickstriker, 4 Sentinel and 3 Rebel.",
  board: [
    { apiName: "TFT13_Beardy", hex: 1 },
    {
      apiName: "TFT13_Illaoi",
      hex: 2,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_IonicSpark", "TFT_Item_RedBuff"],
    },
    { apiName: "TFT13_Irelia", hex: 3 },
    { apiName: "TFT13_Rell", hex: 4 },
    {
      apiName: "TFT13_Akali",
      hex: 7,
      star: 3,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_JeweledGauntlet", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT13_Ambessa", hex: 8, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT13_Nocturne",
      hex: 14,
      star: 3,
      carry: true,
      items: ["TFT9_Item_OrnnHorizonFocus", "TFT_Item_InfinityEdge", "TFT_Item_MadredsBloodrazor"],
    },
    { apiName: "TFT13_TwistedFate", hex: 21 },
  ],
  early: [
    { apiName: "TFT13_Amumu", hex: 1 },
    { apiName: "TFT13_Akali", hex: 2, carry: true },
    { apiName: "TFT13_Nocturne", hex: 3, carry: true, items: ["TFT9_Item_OrnnHorizonFocus", "TFT_Item_InfinityEdge"] },
    { apiName: "TFT13_Irelia", hex: 4 },
    { apiName: "TFT13_Vex", hex: 24 },
  ],
  augments: [
    "TFT_Augment_TwoMuchValue",
    "TFT_Augment_AnExaltedAdventure",
    "TFT7_Augment_LivingForge",
    "TFT6_Augment_PortableForge",
    "TFT13_Augment_Quickstriker",
    "TFT_Augment_CookingPot",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Recurve Bow and Negatron Cloak.",
    "Nocturne can also hold Fishbones, Rapid Firecannon and Sniper's Focus.",
    "Akali can also hold Seeker's Armguard and Zhonya's Paradox.",
    "Favor combat, item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-quickstriker-reroll",
  },
} satisfies Comp;
