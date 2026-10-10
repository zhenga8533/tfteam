import type { Comp } from "../../types";

export default {
  slug: "set16-targon-diana",
  name: "Targon Diana",
  set: 16,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Diana . Diana  (Guinsoo's Rageblade, Bloodthirster and Titan's Resolve) carries. The board runs 3 Shurima, 1 Targon and 2 Arcanist.",
  board: [
    { apiName: "TFT16_Swain", hex: 0 },
    { apiName: "TFT16_Vi", hex: 2 },
    { apiName: "TFT16_Sylas", hex: 3, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT16_Diana",
      hex: 4,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"],
    },
    {
      apiName: "TFT16_Nasus",
      hex: 6,
      items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT16_Azir", hex: 21, items: ["TFT_Item_ArchangelsStaff", "TFT_Item_GuinsoosRageblade"] },
    { apiName: "TFT16_Xerath", hex: 24, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan"] },
    { apiName: "TFT16_Seraphine", hex: 27, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
  ],
  early: [
    { apiName: "TFT16_Vi", hex: 2 },
    { apiName: "TFT16_Neeko", hex: 3 },
    { apiName: "TFT16_Leona", hex: 4 },
    { apiName: "TFT16_Bard", hex: 24 },
  ],
  augments: [
    "TFT16_Augment_TheDarkinForge",
    "TFT11_Augment_Calltochaos",
    "TFT9_Augment_Commander_RollingForDays",
    "TFT16_Augment_Shurima_SecretsOfTheSands",
    "TFT_Augment_HoldTheLine",
    "TFT_Augment_LateGameScaling",
    "TFT9_Augment_JeweledLotus",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Needlessly Large Rod, B.F. Sword and Negatron Cloak.",
    "At level 9, add Shyvana, Neeko and Renekton  to the board.",
    "Diana  can also hold Infinity Force.",
    "Diana  can also hold Wit's End, Seeker's Armguard and Lich Bane.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-shurima-diana",
  },
} satisfies Comp;
