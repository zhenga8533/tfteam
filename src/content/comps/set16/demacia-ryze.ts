import type { Comp } from "../../types";

export default {
  slug: "set16-demacia-ryze",
  name: "Demacia Ryze",
  set: 16,
  tier: "S",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Ryze . Ryze  (2× Nashor's Tooth and Jeweled Gauntlet) carries alongside Lissandra (Morellonomicon, Void Staff and Adaptive Helm). The board runs 3 Demacia, 3 Freljord and 3 Ionia.",
  board: [
    { apiName: "TFT16_Braum", hex: 2, items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_Redemption"] },
    { apiName: "TFT16_Garen", hex: 3 },
    { apiName: "TFT16_XinZhao", hex: 5 },
    { apiName: "TFT16_Sett", hex: 6 },
    { apiName: "TFT16_Kennen", hex: 10 },
    { apiName: "TFT16_Kobuko", hex: 14 },
    {
      apiName: "TFT16_Volibear",
      hex: 16,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_Quicksilver", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT16_Galio", hex: 20 },
    {
      apiName: "TFT16_Ryze",
      hex: 22,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"],
    },
    {
      apiName: "TFT16_Lissandra",
      hex: 24,
      carry: true,
      items: ["TFT_Item_Morellonomicon", "TFT_Item_StatikkShiv", "TFT_Item_AdaptiveHelm"],
    },
  ],
  early: [
    { apiName: "TFT16_Poppy", hex: 2 },
    { apiName: "TFT16_JarvanIV", hex: 3 },
    { apiName: "TFT16_Vi", hex: 4 },
    { apiName: "TFT16_Sona", hex: 24, items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT9_Augment_LearningFromExperience2",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_UpwardMobility",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT16_Augment_WaterAxiom",
    "TFT_Augment_ForgeRod",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Giant's Belt, Needlessly Large Rod and Sparring Gloves.",
    "At level 9, add Wukong to the board.",
    "At level 10, add Taric to the board.",
    "Ryze  can also hold Lich Bane.",
    "Ryze  can also hold Sniper's Focus and Dawncore.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-demacia-ryze-sett",
  },
} satisfies Comp;
