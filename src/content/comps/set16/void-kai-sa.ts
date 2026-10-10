import type { Comp } from "../../types";

export default {
  slug: "set16-void-kai-sa",
  name: "Void Kai'Sa",
  set: 16,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Kai'Sa . Kai'Sa  (Guinsoo's Rageblade, Jeweled Gauntlet and Hextech Gunblade) carries alongside Ziggs  (Guinsoo's Rageblade, Void Staff and Rabadon's Deathcap). The board runs 4 Bruiser, 4 Void and 3 Longshot.",
  board: [
    { apiName: "TFT16_Wukong", hex: 0 },
    { apiName: "TFT16_ChoGath", hex: 1 },
    { apiName: "TFT16_Kobuko", hex: 2 },
    { apiName: "TFT16_Swain", hex: 3 },
    { apiName: "TFT16_Volibear", hex: 4, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT16_RiftHerald",
      hex: 5,
      items: ["TFT_Item_BrambleVest", "TFT_Item_Redemption", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT16_KogMaw", hex: 21 },
    {
      apiName: "TFT16_Ziggs",
      hex: 24,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_StatikkShiv", "TFT_Item_RabadonsDeathcap"],
    },
    {
      apiName: "TFT16_Kaisa",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_JeweledGauntlet", "TFT_Item_HextechGunblade"],
    },
  ],
  early: [
    { apiName: "TFT16_ChoGath", hex: 2 },
    { apiName: "TFT16_Briar", hex: 3 },
    { apiName: "TFT16_Neeko", hex: 4 },
    { apiName: "TFT16_KogMaw", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade"] },
  ],
  augments: [
    "TFT16_Augment_Void_EvolveAndOvercome",
    "TFT9_Augment_LearningFromExperience2",
    "TFT6_Augment_Distancing",
    "TFT_Augment_ItemSpiritVisage",
    "TFT_Augment_FoodfightTactics",
    "TFT9_Augment_Commander_Ascension",
    "TFT_Augment_HoldTheLine",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Tear of the Goddess, Recurve Bow and Needlessly Large Rod.",
    "At level 9, add Shen, Dr. Mundo, Singed and Shyvana to the board.",
    "Rift Herald  can also hold Juggernaut Emblem.",
    "Kai'Sa  can also hold Spear of Shojin, Last Whisper and Infinity Edge.",
    "Favor economy, combat and item augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-void-kaisa-flex",
  },
} satisfies Comp;
