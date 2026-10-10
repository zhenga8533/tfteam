import type { Comp } from "../../types";

export default {
  slug: "set16-freljord-lissandra",
  name: "Freljord Lissandra",
  set: 16,
  tier: "S",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Lissandra. Lissandra (2× Nashor's Tooth and Jeweled Gauntlet) carries alongside Volibear  (Sterak's Gage, Bloodthirster and Titan's Resolve). The board runs 7 Freljord, 4 Invoker and 1 Targon.",
  board: [
    { apiName: "TFT16_Ornn", hex: 1, items: ["TFT16_Item_FreljordEmblemItem"] },
    { apiName: "TFT16_Taric", hex: 2, items: ["TFT16_Item_FreljordEmblemItem"] },
    { apiName: "TFT16_Braum", hex: 5, items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_RedBuff"] },
    { apiName: "TFT16_Sejuani", hex: 7 },
    { apiName: "TFT16_Kobuko", hex: 9 },
    {
      apiName: "TFT16_Volibear",
      hex: 19,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT16_Anivia", hex: 21 },
    {
      apiName: "TFT16_Zilean",
      hex: 24,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap", "TFT_Item_StatikkShiv"],
    },
    {
      apiName: "TFT16_Lissandra",
      hex: 26,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT16_Illaoi", hex: 2 },
    { apiName: "TFT16_Briar", hex: 3 },
    { apiName: "TFT16_Sion", hex: 4, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT16_Leblanc", hex: 24, items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT16_Augment_Weightlifting",
    "TFT9_Augment_JeweledLotus",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT_Augment_SeraphimsStaff",
    "TFT_Augment_HoldTheLine",
    "TFT11_Augment_Reinfourcement",
    "TFT_Augment_TheVidalion",
  ],
  tips: [
    "On carousels and early slams, look for Nashor's Tooth, Jeweled Gauntlet, Giant's Belt and Tear of the Goddess.",
    "At level 9, add Lucian & Senna and Sylas  to the board.",
    "Lissandra can also hold Dawncore and Luden's Tempest.",
    "Volibear  can also hold Mittens, Hellfire Hatchet and Death's Defiance.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-frel-invokers",
  },
} satisfies Comp;
