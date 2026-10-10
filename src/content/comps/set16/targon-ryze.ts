import type { Comp } from "../../types";

export default {
  slug: "set16-targon-ryze",
  name: "Targon Ryze",
  set: 16,
  tier: "C",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Ryze . Ryze  (Spear of Shojin, Morellonomicon and Jeweled Gauntlet) carries alongside Ziggs  (Nashor's Tooth, Jeweled Gauntlet and Void Staff). The board runs 1 Targon, 3 Ionia and 3 Zaun.",
  board: [
    { apiName: "TFT16_DrMundo", hex: 0 },
    { apiName: "TFT16_Kennen", hex: 1 },
    { apiName: "TFT16_Taric", hex: 2 },
    { apiName: "TFT16_Vi", hex: 3 },
    {
      apiName: "TFT16_Wukong",
      hex: 4,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    {
      apiName: "TFT16_Sett",
      hex: 6,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT16_Caitlyn", hex: 21 },
    {
      apiName: "TFT16_Ryze",
      hex: 24,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_Morellonomicon", "TFT_Item_JeweledGauntlet"],
    },
    {
      apiName: "TFT16_Ziggs",
      hex: 27,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet", "TFT_Item_StatikkShiv"],
    },
  ],
  early: [
    { apiName: "TFT16_Poppy", hex: 2 },
    { apiName: "TFT16_Rumble", hex: 3 },
    {
      apiName: "TFT16_Teemo",
      hex: 23,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan", "TFT_Item_StatikkShiv"],
    },
    { apiName: "TFT16_Lulu", hex: 24 },
  ],
  augments: [
    "TFT_Augment_TraitTree",
    "TFT9_Augment_LearningFromExperience2",
    "TFT9_Augment_BigGrabBag",
    "TFT11_Augment_Calltochaos",
    "TFT_Augment_UpwardMobility",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Needlessly Large Rod, Giant's Belt and Sparring Gloves.",
    "At level 9, add Renekton , Seraphine and Azir to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-ionia-zaun-ryze",
  },
} satisfies Comp;
