import type { Comp } from "../../types";

export default {
  slug: "set16-ixtal-brock",
  name: "Ixtal Brock",
  set: 16,
  tier: "A",
  playstyle: "Flex",
  difficulty: "Hard",
  summary:
    "Lose streaks through the early game, then stabilizes around Brock. Brock (Infinity Edge, Sterak's Gage and Hand Of Justice) carries alongside Ryze  (Spear of Shojin, Jeweled Gauntlet and Striker's Flail). The board runs 3 Ixtal, 2 Arcanist and 2 Defender.",
  board: [
    {
      apiName: "TFT16_Skarner",
      hex: 0,
      items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_GargoyleStoneplate"],
    },
    {
      apiName: "TFT16_Brock",
      hex: 1,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_SteraksGage", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT16_Renekton", hex: 3, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Neeko", hex: 4 },
    { apiName: "TFT16_Sylas", hex: 5 },
    { apiName: "TFT16_Fiddlesticks", hex: 10 },
    {
      apiName: "TFT16_Ryze",
      hex: 21,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT16_Seraphine", hex: 24, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    { apiName: "TFT16_Azir", hex: 27 },
  ],
  early: [
    { apiName: "TFT16_Vi", hex: 2 },
    { apiName: "TFT16_Qiyana", hex: 3, items: ["TFT_Item_SteraksGage", "TFT_Item_InfinityEdge"] },
    { apiName: "TFT16_Neeko", hex: 4, items: ["TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT16_Milio", hex: 24 },
  ],
  augments: [
    "TFT16_Augment_Ixtal_Expeditionist",
    "TFT9_Augment_JeweledLotus",
    "TFT6_Augment_CalculatedLoss",
    "TFT_Augment_TitanicTitan",
    "TFT9_Augment_Commander_RollingForDays",
    "TFT_Augment_UpwardMobility",
    "TFT9_Augment_BigGrabBag",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, B.F. Sword, Sparring Gloves and Negatron Cloak.",
    "At level 9, add Milio, Nidalee  and Zilean to the board.",
    "Brock can also hold Mittens and Silvermere Dawn.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-sandy-brock",
  },
} satisfies Comp;
