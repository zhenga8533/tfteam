import type { Comp } from "../../types";

export default {
  slug: "set17-arbiter-leona",
  name: "Arbiter Leona",
  set: 17,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Leona. Leona (Bloodthirster, Sterak's Gage and Titan's Resolve) carries. The board runs 3 Arbiter, 4 Vanguard and 3 Shepherd.",
  board: [
    { apiName: "TFT17_Illaoi", hex: 1 },
    { apiName: "TFT17_IvernMinion", hex: 2 },
    { apiName: "TFT17_Mordekaiser", hex: 4 },
    {
      apiName: "TFT17_Nunu",
      hex: 5,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_SpectralGauntlet", "TFT_Item_AdaptiveHelm"],
    },
    {
      apiName: "TFT17_Leona",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_SteraksGage", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT17_Karma", hex: 21 },
    { apiName: "TFT17_Zoe", hex: 25, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    { apiName: "TFT17_Leblanc", hex: 27, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RabadonsDeathcap"] },
  ],
  early: [
    { apiName: "TFT17_Leona", hex: 2, carry: true, items: ["TFT_Item_TitansResolve", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT17_Nasus", hex: 3 },
    { apiName: "TFT17_Zoe", hex: 23 },
    { apiName: "TFT17_Teemo", hex: 24 },
  ],
  augments: [
    "TFT17_Augment_LeonaCarry",
    "TFT9_Augment_MissedConnections",
    "TFT9_Augment_Commander_Ascension",
    "TFT_Augment_TheBaronsLair",
    "TFT_Augment_BoxingLessons",
    "TFT_Augment_GroupHug1",
    "TFT9_Augment_JeweledLotus",
    "TFT6_Augment_Electrocharge1",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Titan's Resolve, Sterak's Gage and Recurve Bow.",
    "At level 9, add Blitzcrank and Vex to the board.",
    "Leona can also hold Death's Defiance, Mittens and Titanic Hydra.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-shieldmaiden-leona",
  },
} satisfies Comp;
