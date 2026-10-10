import type { Comp } from "../../types";

export default {
  slug: "set13-scrap-corki",
  name: "Scrap Corki",
  set: 13,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Corki. Corki (Infinity Edge, Last Whisper and Giant's Belt) carries alongside Gangplank (Red Buff, Giant's Belt and Infinity Edge). The board runs 6 Scrap, 2 Ambusher and 2 Enforcer.",
  board: [
    { apiName: "TFT13_Beardy", hex: 0 },
    { apiName: "TFT13_Blue", hex: 1, items: ["TFT_Item_ChainVest"] },
    { apiName: "TFT13_Vi", hex: 2 },
    {
      apiName: "TFT13_Rumble",
      hex: 3,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction", "TFT_Item_TearOfTheGoddess"],
    },
    {
      apiName: "TFT13_Elise",
      hex: 4,
      items: ["TFT13_Item_ScrapEmblemItem", "TFT_Item_GiantsBelt", "TFT_Item_IonicSpark"],
    },
    {
      apiName: "TFT13_Ekko",
      hex: 5,
      items: ["TFT_Item_TearOfTheGoddess", "TFT_Item_UnstableConcoction", "TFT_Item_RabadonsDeathcap"],
    },
    {
      apiName: "TFT13_Corki",
      hex: 6,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper", "TFT_Item_GiantsBelt"],
    },
    {
      apiName: "TFT13_Gangplank",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_RapidFireCannon", "TFT_Item_GiantsBelt", "TFT_Item_InfinityEdge"],
    },
  ],
  early: [
    { apiName: "TFT13_Camille", hex: 2 },
    { apiName: "TFT13_Trundle", hex: 3, items: ["TFT_Item_GiantsBelt"] },
    { apiName: "TFT13_Fish", hex: 4 },
    { apiName: "TFT13_Blue", hex: 24 },
  ],
  augments: ["TFT13_TeamupAugment_Reunion", "TFT_Augment_Flexible", "TFT9_Augment_BuildingACollectionPlusPlus"],
  tips: [
    "On carousels and early slams, look for Sparring Gloves, Needlessly Large Rod, Giant's Belt and Recurve Bow.",
    "Corki can also hold Gold Collector and Fishbones.",
    "Ekko can also hold Zhonya's Paradox, Trickster's Glass and Sniper's Focus.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-silver-scraps",
  },
} satisfies Comp;
