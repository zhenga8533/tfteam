import type { Comp } from "../../types";

export default {
  slug: "set16-ionia-ryze",
  name: "Ionia Ryze",
  set: 16,
  tier: "B",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Ryze . Ryze  (Spear of Shojin, Morellonomicon and Void Staff) carries alongside Azir (Guinsoo's Rageblade, Archangel's Staff and Hextech Gunblade). The board runs 3 Ionia, 2 Bruiser and 2 Defender.",
  board: [
    { apiName: "TFT16_Kennen", hex: 2 },
    { apiName: "TFT16_Kobuko", hex: 3 },
    {
      apiName: "TFT16_Wukong",
      hex: 4,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest", "TFT_Item_NightHarvester"],
    },
    { apiName: "TFT16_Vi", hex: 5 },
    {
      apiName: "TFT16_Sett",
      hex: 6,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction"],
    },
    {
      apiName: "TFT16_Azir",
      hex: 21,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_ArchangelsStaff", "TFT_Item_HextechGunblade"],
    },
    { apiName: "TFT16_Xerath", hex: 23 },
    { apiName: "TFT16_Seraphine", hex: 25 },
    {
      apiName: "TFT16_Ryze",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_Morellonomicon", "TFT_Item_StatikkShiv"],
    },
  ],
  early: [
    { apiName: "TFT16_Poppy", hex: 2 },
    { apiName: "TFT16_Rumble", hex: 3 },
    { apiName: "TFT16_Teemo", hex: 23, items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv"] },
    { apiName: "TFT16_Lulu", hex: 24 },
  ],
  augments: [
    "TFT16_Augment_Shurima_SecretsOfTheSands",
    "TFT_Augment_LateGameScaling",
    "TFT_Augment_SpeedyDoubleKill",
    "TFT9_Augment_LearningFromExperience2",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_BronzeForLife2",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Needlessly Large Rod, Tear of the Goddess and Giant's Belt.",
    "At level 9, add Poppy , Xin Zhao, Garen and Renekton  to the board.",
    "Xerath  can also hold Jeweled Gauntlet, Nashor's Tooth and Spear of Shojin.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-shurima-ryze-ionia-demacia",
  },
} satisfies Comp;
