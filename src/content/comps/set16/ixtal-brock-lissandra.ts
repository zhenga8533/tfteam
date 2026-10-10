import type { Comp } from "../../types";

export default {
  slug: "set16-ixtal-brock-lissandra",
  name: "Ixtal Brock & Lissandra",
  set: 16,
  tier: "B",
  playstyle: "Flex",
  difficulty: "Hard",
  summary:
    "Lose streaks through the early game, then stabilizes around Brock. Brock (Infinity Edge, Sterak's Gage and Hand Of Justice) carries alongside Lissandra (Archangel's Staff, Spear of Shojin and Void Staff). The board runs 4 Invoker, 4 Freljord and 3 Ixtal.",
  board: [
    {
      apiName: "TFT16_Skarner",
      hex: 1,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT16_Ornn", hex: 4 },
    { apiName: "TFT16_Kobuko", hex: 5 },
    { apiName: "TFT16_Braum", hex: 6 },
    { apiName: "TFT16_Volibear", hex: 7, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT16_Brock",
      hex: 9,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_SteraksGage", "TFT_Item_UnstableConcoction"],
    },
    {
      apiName: "TFT16_Zilean",
      hex: 21,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_Morellonomicon", "TFT_Item_RabadonsDeathcap"],
    },
    {
      apiName: "TFT16_Lissandra",
      hex: 23,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv"],
    },
    { apiName: "TFT16_Milio", hex: 27 },
  ],
  early: [
    { apiName: "TFT16_Qiyana", hex: 2 },
    { apiName: "TFT16_Briar", hex: 3 },
    { apiName: "TFT16_Neeko", hex: 4 },
    { apiName: "TFT16_Milio", hex: 24 },
  ],
  augments: [
    "TFT16_Augment_Ixtal_Expeditionist",
    "TFT6_Augment_CalculatedLoss",
    "TFT_Augment_TitanicTitan",
    "TFT_Augment_OneBuffTwoBuff",
    "TFT9_Augment_Commander_RollingForDays",
    "TFT_Augment_UpwardMobility",
    "TFT_Augment_HardBargain",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, B.F. Sword, Sparring Gloves and Negatron Cloak.",
    "At level 9, add Neeko, Sejuani, Taric and Fiddlesticks to the board.",
    "Brock can also hold Mittens and Silvermere Dawn.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-brock",
  },
} satisfies Comp;
