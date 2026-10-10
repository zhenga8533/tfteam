import type { Comp } from "../../types";

export default {
  slug: "set16-bilgewater-tahm-kench",
  name: "Bilgewater Tahm Kench",
  set: 16,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Tahm Kench. Tahm Kench (Adaptive Helm and Protector's Vow) carries alongside Miss Fortune (Infinity Edge and Spear of Shojin). The board runs 3 Bilgewater, 3 Freljord and 2 Bruiser.",
  board: [
    { apiName: "TFT16_Braum", hex: 3 },
    { apiName: "TFT16_Nautilus", hex: 4, items: ["TFT_Item_RedBuff", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"] },
    { apiName: "TFT16_TahmKench", hex: 6, carry: true, items: ["TFT_Item_AdaptiveHelm", "TFT_Item_FrozenHeart"] },
    { apiName: "TFT16_Shyvana", hex: 9 },
    { apiName: "TFT16_Volibear", hex: 18 },
    { apiName: "TFT16_Lucian", hex: 21, items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper"] },
    { apiName: "TFT16_Ashe", hex: 23 },
    { apiName: "TFT16_Kindred", hex: 25 },
    { apiName: "TFT16_MissFortune", hex: 27, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"] },
  ],
  early: [
    { apiName: "TFT16_Illaoi", hex: 2, items: ["TFT_Item_FrozenHeart", "TFT_Item_RedBuff"] },
    { apiName: "TFT16_Shen", hex: 3 },
    { apiName: "TFT16_Graves", hex: 10, items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"] },
    { apiName: "TFT16_TwistedFate", hex: 24 },
  ],
  augments: [
    "TFT_Augment_TraitTree",
    "TFT9_Augment_LearningFromExperience2",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_DuoQueue",
    "TFT_Augment_SweetTreats",
    "TFT_Augment_GildedSteel",
    "TFT_Augment_AuraFarming",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Sparring Gloves, B.F. Sword and Tear of the Goddess.",
    "At level 9, add Taric, Wukong, Ornn and Fiddlesticks to the board.",
    "Miss Fortune can also hold Gold Collector, Vanquisher Emblem and Fishbones.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-bilgewater-max-cap",
  },
} satisfies Comp;
