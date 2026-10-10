import type { Comp } from "../../types";

export default {
  slug: "set17-shepherd-leblanc",
  name: "Shepherd LeBlanc",
  set: 17,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for LeBlanc. LeBlanc (Guinsoo's Rageblade, Rabadon's Deathcap and Jeweled Gauntlet) carries alongside Karma (Spear of Shojin, Void Staff and Morellonomicon). The board runs 5 Shepherd, 2 Dark Star and 2 Vanguard.",
  board: [
    {
      apiName: "TFT17_Morgana",
      hex: 2,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT17_Blitzcrank", hex: 4 },
    { apiName: "TFT17_Illaoi", hex: 5 },
    { apiName: "TFT17_IvernMinion", hex: 6 },
    {
      apiName: "TFT17_Leblanc",
      hex: 21,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet"],
    },
    {
      apiName: "TFT17_Karma",
      hex: 23,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"],
    },
    { apiName: "TFT17_Sona", hex: 25 },
    { apiName: "TFT17_Lissandra", hex: 27 },
  ],
  early: [
    { apiName: "TFT17_Mordekaiser", hex: 2 },
    { apiName: "TFT17_Leona", hex: 3 },
    { apiName: "TFT17_Zoe", hex: 23, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_StatikkShiv"] },
    { apiName: "TFT17_Lissandra", hex: 24 },
  ],
  augments: [
    "TFT_Augment_HoldTheLine",
    "TFT_Augment_GildedSteel",
    "TFT_Augment_GlassCannonII",
    "TFT_Augment_BoxingLessons",
    "TFT_Augment_UrfsGambit",
    "TFT_Augment_WandOverflow",
    "TFT_Augment_ComponentQuestRod",
    "TFT_Augment_TheBaronsLair",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Void Staff, Needlessly Large Rod and Giant's Belt.",
    "At level 9, add Leona, Pyke and Nunu & Willump to the board.",
    "Karma can also hold Shepherd Emblem.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-shepherd-pie",
  },
} satisfies Comp;
