import type { Comp } from "../../types";

export default {
  slug: "set13-visionary-heimerdinger-jayce",
  name: "Visionary Heimerdinger & Jayce",
  set: 13,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Heimerdinger. Heimerdinger (Blue Buff, Jeweled Gauntlet and Striker's Flail) carries alongside Jayce (Visionary Emblem, Deathblade and Infinity Edge). The board runs 6 Visionary, 3 Academy and 3 Black Rose.",
  board: [
    { apiName: "TFT13_Rell", hex: 1 },
    { apiName: "TFT13_Leona", hex: 2 },
    { apiName: "TFT13_NunuWillump", hex: 3 },
    { apiName: "TFT13_Elise", hex: 4, items: ["TFT_Item_FrozenHeart", "TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"] },
    { apiName: "TFT13_Morgana", hex: 21 },
    { apiName: "TFT13_LeBlanc", hex: 22 },
    {
      apiName: "TFT13_Jayce",
      hex: 23,
      carry: true,
      items: ["TFT13_Item_InvokerEmblemItem", "TFT_Item_Deathblade", "TFT_Item_InfinityEdge"],
    },
    {
      apiName: "TFT13_Malzahar",
      hex: 25,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_ArchangelsStaff", "TFT_Item_Morellonomicon"],
    },
    {
      apiName: "TFT13_Heimerdinger",
      hex: 27,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT13_Akali", hex: 2 },
    { apiName: "TFT13_Irelia", hex: 3 },
    { apiName: "TFT13_Rell", hex: 4 },
    { apiName: "TFT13_Morgana", hex: 23 },
    { apiName: "TFT13_Vex", hex: 24, items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT10_Augment_GoingLong",
    "TFT13_Augment_Visionary",
    "TFT13_Augment_VisionaryCrest",
    "TFT13_Augment_VisionaryCrown",
    "TFT_Augment_BlazingSoul",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Jeweled Gauntlet, Giant's Belt and Needlessly Large Rod.",
    "Rumble can also hold Visionary Emblem, Jeweled Gauntlet and Hand Of Justice.",
    "Favor economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-rose-tinted-glasses",
  },
} satisfies Comp;
