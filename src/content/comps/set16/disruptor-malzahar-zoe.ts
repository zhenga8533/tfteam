import type { Comp } from "../../types";

export default {
  slug: "set16-disruptor-malzahar-zoe",
  name: "Disruptor Malzahar & Zoe",
  set: 16,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Malzahar. Malzahar (2× Nashor's Tooth and Jeweled Gauntlet) carries alongside Zoe (Morellonomicon, Spear of Shojin and Jeweled Gauntlet). The board runs 1 Targon, 3 Warden and 2 Disruptor.",
  board: [
    { apiName: "TFT16_Braum", hex: 1 },
    { apiName: "TFT16_Loris", hex: 2 },
    { apiName: "TFT16_ChoGath", hex: 3 },
    {
      apiName: "TFT16_Nautilus",
      hex: 4,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT16_Seraphine", hex: 21 },
    {
      apiName: "TFT16_Zoe",
      hex: 25,
      star: 3,
      carry: true,
      items: ["TFT_Item_Morellonomicon", "TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet"],
    },
    {
      apiName: "TFT16_Malzahar",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT16_Vi", hex: 2 },
    { apiName: "TFT16_JarvanIV", hex: 3 },
    { apiName: "TFT16_Orianna", hex: 23, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan"] },
    { apiName: "TFT16_Sona", hex: 24 },
  ],
  augments: [
    "TFT9_Augment_Commander_RollingForDays",
    "TFT11_Augment_Calltochaos",
    "TFT9_Augment_BigGrabBag",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_HomeCooking",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT_Augment_TheVidalion",
  ],
  tips: [
    "On carousels and early slams, look for Jeweled Gauntlet, Recurve Bow, Giant's Belt and Tear of the Goddess.",
    "At level 8, add Taric and Ornn to the board.",
    "Malzahar can also hold Dawncore and Radiant Nashor's Tooth.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-malzoehar",
  },
} satisfies Comp;
