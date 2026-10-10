import type { Comp } from "../../types";

export default {
  slug: "set16-bruiser-volibear",
  name: "Bruiser Volibear",
  set: 16,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Volibear . Volibear  (Sterak's Gage, Bloodthirster and Titan's Resolve) carries alongside Ryze  (Jeweled Gauntlet and 2× Nashor's Tooth). The board runs 1 Targon, 4 Bruiser and 3 Freljord.",
  board: [
    { apiName: "TFT16_Wukong", hex: 2, items: ["TFT_Item_Redemption", "TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"] },
    { apiName: "TFT16_Taric", hex: 3 },
    { apiName: "TFT16_Kobuko", hex: 5 },
    { apiName: "TFT16_Shen", hex: 6 },
    { apiName: "TFT16_Kennen", hex: 10 },
    { apiName: "TFT16_Sejuani", hex: 14 },
    {
      apiName: "TFT16_Volibear",
      hex: 16,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"],
    },
    {
      apiName: "TFT16_Ryze",
      hex: 22,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT16_Lissandra", hex: 24, items: ["TFT_Item_Morellonomicon", "TFT_Item_StatikkShiv"] },
  ],
  early: [
    { apiName: "TFT16_Illaoi", hex: 2 },
    { apiName: "TFT16_Briar", hex: 3 },
    { apiName: "TFT16_Sion", hex: 4, items: ["TFT_Item_RedBuff", "TFT_Item_Redemption"] },
    { apiName: "TFT16_Leblanc", hex: 24, items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT16_Augment_Weightlifting",
    "TFT9_Augment_LearningFromExperience2",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_MuseumHeist",
    "TFT7_Augment_LategameSpecialist",
  ],
  tips: [
    "On carousels and early slams, look for Nashor's Tooth, Jeweled Gauntlet, Tear of the Goddess and Giant's Belt.",
    "At level 9, add Skarner , Fiddlesticks and Sett to the board.",
    "Lissandra can also hold Blue Buff, Rabadon's Deathcap and Spear of Shojin.",
    "Volibear  can also hold Mittens, Hellfire Hatchet and Dawncore.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-the-relentless-storm",
  },
} satisfies Comp;
