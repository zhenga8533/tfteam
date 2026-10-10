import type { Comp } from "../../types";

export default {
  slug: "set16-freljord-tryndamere",
  name: "Freljord Tryndamere",
  set: 16,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Tryndamere . Tryndamere  (Rapid Firecannon, Infinity Edge and Quicksilver) carries alongside Ashe (Guinsoo's Rageblade, Deathblade and Kraken's Fury). The board runs 3 Freljord, 3 Noxus and 2 Defender.",
  board: [
    {
      apiName: "TFT16_Darius",
      hex: 2,
      star: 3,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_Redemption", "TFT_Item_RedBuff"],
    },
    { apiName: "TFT16_Sejuani", hex: 9 },
    { apiName: "TFT16_Nautilus", hex: 13 },
    {
      apiName: "TFT16_Tryndamere",
      hex: 15,
      star: 3,
      carry: true,
      items: ["TFT_Item_Artifact_RapidFirecannon", "TFT_Item_InfinityEdge", "TFT_Item_Quicksilver"],
    },
    { apiName: "TFT16_Briar", hex: 20 },
    {
      apiName: "TFT16_Ashe",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Deathblade", "TFT_Item_RunaansHurricane"],
    },
    { apiName: "TFT16_Draven", hex: 23 },
  ],
  early: [
    {
      apiName: "TFT16_Tryndamere",
      hex: 2,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_Artifact_RapidFirecannon"],
    },
    { apiName: "TFT16_Viego", hex: 3 },
    { apiName: "TFT16_Sejuani", hex: 4 },
    { apiName: "TFT16_Ashe", hex: 24, carry: true },
  ],
  augments: [
    "TFT_Augment_ForgedInStrength",
    "TFT6_Augment_PortableForge",
    "TFT_Augment_TwoMuchValue",
    "TFT10_Augment_HeroicGrabBag",
    "TFT6_Augment_GachaAddict",
    "TFT7_Augment_LivingForge",
    "TFT9_Augment_StarsAreBorn",
    "TFT_Augment_HeftyRolls",
  ],
  tips: [
    "On carousels and early slams, look for Quicksilver, Recurve Bow, Negatron Cloak and B.F. Sword.",
    "At level 8, add Skarner  to the board.",
    "At level 9, add Shyvana to the board.",
    "Tryndamere  can also hold Quickstriker Emblem and Mittens.",
    "Tryndamere  can also hold Quicksilver, Bloodthirster and Guinsoo's Rageblade.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-ashe-trynd",
  },
} satisfies Comp;
