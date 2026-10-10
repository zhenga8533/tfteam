import type { Comp } from "../../types";

export default {
  slug: "set16-disruptor-malzahar",
  name: "Disruptor Malzahar",
  set: 16,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Malzahar. Malzahar (2× Nashor's Tooth and Jeweled Gauntlet) carries alongside Zoe (Spear of Shojin, Jeweled Gauntlet and Hextech Gunblade). The board runs 2 Targon, 2 Arcanist and 2 Defender.",
  board: [
    {
      apiName: "TFT16_Leona",
      hex: 3,
      star: 3,
      items: ["TFT_Item_DragonsClaw", "TFT_Item_GargoyleStoneplate", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT16_Vi", hex: 16 },
    { apiName: "TFT16_Neeko", hex: 18 },
    { apiName: "TFT16_Seraphine", hex: 21 },
    { apiName: "TFT16_KogMaw", hex: 23 },
    {
      apiName: "TFT16_Zoe",
      hex: 25,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet", "TFT_Item_HextechGunblade"],
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
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_TheVidalion",
    "TFT_Augment_Trifecta1",
    "TFT6_Augment_GachaAddict",
    "TFT_Augment_TheGoldenDragon",
    "TFT_Augment_NineLives",
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
    url: "https://tftacademy.com/tierlist/comps/set-16-malzahar-zoe-leona",
  },
} satisfies Comp;
