import type { Comp } from "../../types";

export default {
  slug: "set16-targon-aurelion-sol",
  name: "Targon Aurelion Sol",
  set: 16,
  tier: "S",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Aurelion Sol. Aurelion Sol (Jeweled Gauntlet and 2× Nashor's Tooth) carries alongside Diana  (Edge of Night, Blue Buff and Jeweled Gauntlet). The board runs 3 Targon, 2 Disruptor and 2 Juggernaut.",
  board: [
    { apiName: "TFT16_Vi", hex: 0 },
    { apiName: "TFT16_Shyvana", hex: 2 },
    { apiName: "TFT16_Taric", hex: 3, items: ["TFT_Item_IonicSpark", "TFT_Item_NightHarvester", "TFT_Item_RedBuff"] },
    {
      apiName: "TFT16_Diana",
      hex: 4,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT16_Swain", hex: 5 },
    { apiName: "TFT16_Azir", hex: 21 },
    { apiName: "TFT16_Seraphine", hex: 23 },
    {
      apiName: "TFT16_AurelionSol",
      hex: 25,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT16_Xerath", hex: 27 },
  ],
  early: [
    { apiName: "TFT16_Leona", hex: 3 },
    { apiName: "TFT16_Bard", hex: 23 },
    { apiName: "TFT16_Aphelios", hex: 24 },
    { apiName: "TFT16_Zoe", hex: 25, items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT_Augment_OneBuffTwoBuff",
    "TFT16_Augment_Targon_CosmicCalling",
    "TFT_Augment_HoldTheLine",
    "TFT6_Augment_Distancing",
  ],
  tips: [
    "On carousels and early slams, look for Nashor's Tooth, Jeweled Gauntlet, Giant's Belt and Tear of the Goddess.",
    "At level 9, add Orianna , Lucian & Senna, Xerath  and Sylas  to the board.",
    "Aurelion Sol can also hold Jeweled Gauntlet, Nashor's Tooth and Invoker Emblem.",
    "Favor economy, combat and item augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-asol-flex",
  },
} satisfies Comp;
