import type { Comp } from "../../types";

export default {
  slug: "set16-ionia-yunara-fast-9",
  name: "Ionia Yunara (Fast 9)",
  set: 16,
  tier: "C",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Yunara. Yunara (Guinsoo's Rageblade, Infinity Edge and Striker's Flail) carries. The board runs 1 Targon, 5 Ionia and 2 Bruiser.",
  board: [
    {
      apiName: "TFT16_Wukong",
      hex: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet", "TFT_Item_Redemption"],
    },
    {
      apiName: "TFT16_Sett",
      hex: 6,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT16_Shen", hex: 9 },
    { apiName: "TFT16_Taric", hex: 10 },
    { apiName: "TFT16_Shyvana", hex: 11 },
    { apiName: "TFT16_Ahri", hex: 21 },
    { apiName: "TFT16_Kindred", hex: 24 },
    {
      apiName: "TFT16_Yunara",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT16_Shen", hex: 2 },
    { apiName: "TFT16_Illaoi", hex: 3 },
    { apiName: "TFT16_XinZhao", hex: 4 },
    { apiName: "TFT16_Jhin", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_InfinityEdge"] },
  ],
  augments: [
    "TFT9_Augment_LearningFromExperience2",
    "TFT11_Augment_Reinfourcement",
    "TFT_Augment_AwakenedSoul",
    "TFT_Augment_WarmogsBuckle",
    "TFT_Augment_FoodfightTactics",
    "TFT9_Augment_Commander_Ascension",
    "TFT16_Augment_AirAxiom",
  ],
  tips: [
    "On carousels and early slams, look for Needlessly Large Rod, Recurve Bow, B.F. Sword and Sparring Gloves.",
    "At level 9, add Jhin, Skarner  and Lucian & Senna to the board.",
    "Yunara can also hold Flickerblades and Gold Collector.",
    "Yunara can also hold Guinsoo's Rageblade, Infinity Edge and Kraken's Fury.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-unara-flex",
  },
} satisfies Comp;
