import type { Comp } from "../../types";

export default {
  slug: "set16-shurima-azir",
  name: "Shurima Azir",
  set: 16,
  tier: "X",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Azir. Azir carries alongside Seraphine (Jeweled Gauntlet, Nashor's Tooth and Void Staff). The board runs 4 Shurima, 2 Arcanist and 2 Defender.",
  board: [
    { apiName: "TFT16_Neeko", hex: 1 },
    { apiName: "TFT16_Nasus", hex: 2, items: ["TFT_Item_RedBuff", "TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"] },
    { apiName: "TFT16_Renekton", hex: 3, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Swain", hex: 4 },
    { apiName: "TFT16_Vi", hex: 5 },
    {
      apiName: "TFT16_Seraphine",
      hex: 21,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan", "TFT_Item_StatikkShiv"],
    },
    {
      apiName: "TFT16_Xerath",
      hex: 24,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT16_Azir", hex: 27, carry: true },
  ],
  early: [
    { apiName: "TFT16_Vi", hex: 2 },
    { apiName: "TFT16_JarvanIV", hex: 3 },
    { apiName: "TFT16_Orianna", hex: 23, items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"] },
    { apiName: "TFT16_Sona", hex: 24 },
  ],
  augments: [
    "TFT16_Augment_Shurima_SecretsOfTheSands",
    "TFT9_Augment_LearningFromExperience2",
    "TFT_Augment_FiresalePlus",
    "TFT7_Augment_LategameSpecialist",
    "TFT11_Augment_Calltochaos",
    "TFT_Augment_Pyromaniac",
    "TFT9_Augment_BigGrabBag",
  ],
  tips: [
    "On carousels and early slams, look for Needlessly Large Rod, Recurve Bow, Tear of the Goddess and Sparring Gloves.",
    "At level 9, add Loris, Nasus , Renekton  and Ornn to the board.",
    "Seraphine can also hold Lich Bane and Dawncore.",
    "Azir can also hold Guinsoo's Rageblade, Archangel's Staff and Hextech Gunblade.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-shurima-flex",
  },
} satisfies Comp;
