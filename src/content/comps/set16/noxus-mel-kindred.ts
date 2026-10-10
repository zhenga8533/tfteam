import type { Comp } from "../../types";

export default {
  slug: "set16-noxus-mel-kindred",
  name: "Noxus Mel  & Kindred",
  set: 16,
  tier: "X",
  playstyle: "Fast 9",
  difficulty: "Easy",
  summary:
    "A level 9 comp that caps its board around Mel . Mel  (Jeweled Gauntlet and 2× Adaptive Helm) carries alongside Kindred (Noxus Emblem, Guinsoo's Rageblade and Kraken's Fury). The board runs 10 Noxus, 2 Disruptor and 2 Juggernaut.",
  board: [
    { apiName: "TFT16_Briar", hex: 1 },
    { apiName: "TFT16_Swain", hex: 2, items: ["TFT_Item_FrozenHeart", "TFT_Item_RedBuff", "TFT_Item_IonicSpark"] },
    { apiName: "TFT16_Ambessa", hex: 3, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Sion", hex: 4 },
    { apiName: "TFT16_Darius", hex: 5 },
    {
      apiName: "TFT16_Mel",
      hex: 21,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_AdaptiveHelm", "TFT_Item_AdaptiveHelm"],
    },
    { apiName: "TFT16_Azir", hex: 23, items: ["TFT16_Item_NoxusEmblemItem"] },
    {
      apiName: "TFT16_Kindred",
      hex: 24,
      carry: true,
      items: ["TFT16_Item_NoxusEmblemItem", "TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"],
    },
    { apiName: "TFT16_Leblanc", hex: 25 },
    { apiName: "TFT16_Draven", hex: 27 },
  ],
  early: [
    { apiName: "TFT16_Illaoi", hex: 2 },
    { apiName: "TFT16_Briar", hex: 3 },
    { apiName: "TFT16_Sion", hex: 4, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT16_Draven", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"] },
  ],
  augments: [
    "TFT16_Augment_UltraRapidFire",
    "TFT_Augment_UrfsGambit",
    "TFT16_Augment_NoxianInvasion",
    "TFT_Augment_WinOut",
    "TFT11_Augment_Reinfourcement",
    "TFT11_Augment_Calltochaos",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Needlessly Large Rod, Negatron Cloak and Tear of the Goddess.",
    "At level 9, add Neeko, Kobuko & Yuumi and Fiddlesticks to the board.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-noxus",
  },
} satisfies Comp;
