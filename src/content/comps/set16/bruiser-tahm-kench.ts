import type { Comp } from "../../types";

export default {
  slug: "set16-bruiser-tahm-kench",
  name: "Bruiser Tahm Kench",
  set: 16,
  tier: "C",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Tahm Kench. Tahm Kench (Adaptive Helm and Protector's Vow) carries alongside Ryze  (Spear of Shojin and Jeweled Gauntlet). The board runs 1 Targon, 4 Bruiser and 3 Bilgewater.",
  board: [
    { apiName: "TFT16_Taric", hex: 0 },
    { apiName: "TFT16_Kobuko", hex: 1 },
    { apiName: "TFT16_Braum", hex: 2 },
    { apiName: "TFT16_TahmKench", hex: 4, carry: true, items: ["TFT_Item_AdaptiveHelm", "TFT_Item_FrozenHeart"] },
    {
      apiName: "TFT16_Illaoi",
      hex: 5,
      star: 3,
      items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_Redemption"],
    },
    { apiName: "TFT16_Fizz", hex: 6 },
    {
      apiName: "TFT16_Volibear",
      hex: 19,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_SteraksGage", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT16_Lissandra", hex: 25, items: ["TFT_Item_Morellonomicon", "TFT_Item_StatikkShiv"] },
    { apiName: "TFT16_Ryze", hex: 27, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet"] },
  ],
  early: [
    { apiName: "TFT16_Shen", hex: 2 },
    { apiName: "TFT16_Illaoi", hex: 3 },
    { apiName: "TFT16_Graves", hex: 10 },
    { apiName: "TFT16_TwistedFate", hex: 24, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
  ],
  augments: [
    "TFT_Augment_ItemSpiritVisage",
    "TFT9_Augment_LearningFromExperience2",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_Pyromaniac",
    "TFT_Augment_Replication",
    "TFT_Augment_HomeCooking",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Needlessly Large Rod, Giant's Belt and Sparring Gloves.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-shurima-ryze-zaun",
  },
} satisfies Comp;
