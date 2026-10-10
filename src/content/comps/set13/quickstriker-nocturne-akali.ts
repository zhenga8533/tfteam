import type { Comp } from "../../types";

export default {
  slug: "set13-quickstriker-nocturne-akali",
  name: "Quickstriker Nocturne & Akali",
  set: 13,
  tier: "A",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Nocturne. Nocturne (Infinity Edge, Bloodthirster and Quicksilver) carries alongside Akali (Bloodthirster, Jeweled Gauntlet and Titan's Resolve). The board runs 4 Quickstriker, 4 Sentinel and 3 Rebel.",
  board: [
    {
      apiName: "TFT13_Beardy",
      hex: 1,
      star: 3,
      items: ["TFT_Item_Redemption", "TFT_Item_IonicSpark", "TFT_Item_RedBuff"],
    },
    {
      apiName: "TFT13_Nocturne",
      hex: 2,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_Bloodthirster", "TFT_Item_Quicksilver"],
    },
    { apiName: "TFT13_Illaoi", hex: 3 },
    { apiName: "TFT13_Rell", hex: 4 },
    { apiName: "TFT13_Irelia", hex: 5 },
    {
      apiName: "TFT13_Akali",
      hex: 7,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_JeweledGauntlet", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT13_Ambessa", hex: 15 },
    {
      apiName: "TFT13_TwistedFate",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap", "TFT_Item_ArchangelsStaff"],
    },
  ],
  early: [
    { apiName: "TFT13_Trundle", hex: 2 },
    { apiName: "TFT13_Fish", hex: 3 },
    { apiName: "TFT13_Akali", hex: 4, carry: true },
    {
      apiName: "TFT13_TwistedFate",
      hex: 24,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_Morellonomicon"],
    },
  ],
  augments: [
    "TFT_Augment_TwoMuchValue",
    "TFT7_Augment_LivingForge",
    "TFT_Augment_CookingPot",
    "TFT_Augment_Trifecta2",
    "TFT6_Augment_PortableForge",
    "TFT13_Augment_Quickstriker",
  ],
  tips: [
    "On carousels and early slams, look for Needlessly Large Rod, Tear of the Goddess, B.F. Sword and Negatron Cloak.",
    "Twisted Fate can also hold Manazane and Deathfire Grasp.",
    "Favor combat, item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-twisted-fate-quickstrikers",
  },
} satisfies Comp;
