import type { Comp } from "../../types";

export default {
  slug: "set16-targon-aurelion-sol-nidalee",
  name: "Targon Aurelion Sol & Nidalee",
  set: 16,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Aurelion Sol. Aurelion Sol (Jeweled Gauntlet and 2× Nashor's Tooth) carries alongside Nidalee  (Rabadon's Deathcap, Jeweled Gauntlet and Hextech Gunblade). The board runs 3 Targon, 3 Ixtal and 2 Defender.",
  board: [
    {
      apiName: "TFT16_Nidalee",
      hex: 0,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet", "TFT_Item_HextechGunblade"],
    },
    { apiName: "TFT16_Leona", hex: 1 },
    { apiName: "TFT16_Vi", hex: 2 },
    {
      apiName: "TFT16_Skarner",
      hex: 3,
      items: ["TFT_Item_NightHarvester", "TFT_Item_Redemption", "TFT_Item_IonicSpark"],
    },
    { apiName: "TFT16_Diana", hex: 4, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Neeko", hex: 5 },
    {
      apiName: "TFT16_AurelionSol",
      hex: 24,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT16_Seraphine", hex: 27 },
  ],
  early: [
    { apiName: "TFT16_Leona", hex: 3 },
    { apiName: "TFT16_Bard", hex: 23 },
    { apiName: "TFT16_Aphelios", hex: 24 },
    { apiName: "TFT16_Zoe", hex: 25, items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT_Augment_ComebackStory",
    "TFT6_Augment_CalculatedLoss",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT_Augment_OneBuffTwoBuff",
  ],
  tips: [
    "On carousels and early slams, look for Nashor's Tooth, Jeweled Gauntlet, Giant's Belt and Tear of the Goddess.",
    "At level 9, add Orianna , Azir and Lucian & Senna to the board.",
    "Aurelion Sol can also hold Jeweled Gauntlet, Nashor's Tooth and Invoker Emblem.",
    "Aurelion Sol can also hold Jeweled Gauntlet, Nashor's Tooth and Spear of Shojin.",
    "Favor economy, combat and item augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-targon-asol",
  },
} satisfies Comp;
