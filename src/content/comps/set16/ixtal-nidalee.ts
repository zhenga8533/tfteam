import type { Comp } from "../../types";

export default {
  slug: "set16-ixtal-nidalee",
  name: "Ixtal Nidalee",
  set: 16,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Nidalee . Nidalee  (Rabadon's Deathcap, Jeweled Gauntlet and Hextech Gunblade) carries. The board runs 3 Ixtal, 2 Arcanist and 2 Defender.",
  board: [
    {
      apiName: "TFT16_Nidalee",
      hex: 0,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet", "TFT_Item_HextechGunblade"],
    },
    {
      apiName: "TFT16_Skarner",
      hex: 2,
      items: ["TFT_Item_NightHarvester", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT16_Shyvana", hex: 3 },
    { apiName: "TFT16_Vi", hex: 4 },
    { apiName: "TFT16_Swain", hex: 5 },
    { apiName: "TFT16_Seraphine", hex: 21, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    { apiName: "TFT16_Azir", hex: 24 },
    { apiName: "TFT16_Neeko", hex: 27 },
  ],
  early: [
    { apiName: "TFT16_Vi", hex: 2 },
    { apiName: "TFT16_Neeko", hex: 3 },
    { apiName: "TFT16_Orianna", hex: 23, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_StatikkShiv"] },
    { apiName: "TFT16_Anivia", hex: 24 },
  ],
  augments: [
    "TFT_Augment_ComebackStory",
    "TFT9_Augment_JeweledLotus",
    "TFT9_Augment_LearningFromExperience2",
    "TFT_Augment_WandOverflow",
    "TFT16_Augment_Shurima_SecretsOfTheSands",
    "TFT_Augment_MagicRollMinus",
  ],
  tips: [
    "On carousels and early slams, look for Jeweled Gauntlet, Needlessly Large Rod, Tear of the Goddess and Giant's Belt.",
    "At level 9, add Darius, Mel , Sylas  and Brock to the board.",
    "Nidalee  can also hold Seeker's Armguard.",
    "Favor economy, combat and item augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-nidalee-ap-flex",
  },
} satisfies Comp;
