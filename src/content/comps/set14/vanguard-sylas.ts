import type { Comp } from "../../types";

export default {
  slug: "set14-vanguard-sylas",
  name: "Vanguard Sylas",
  set: 14,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Sylas. Sylas (Bloodthirster, Archangel's Staff and Titan's Resolve) carries alongside Xayah (Last Whisper, Infinity Edge and Striker's Flail). The board runs 6 Vanguard, 3 Anima Squad and 2 Golden Ox.",
  board: [
    {
      apiName: "TFT14_Vi",
      hex: 1,
      star: 3,
      items: ["TFT_Item_SteraksGage", "TFT_Item_WarmogsArmor", "TFT_Item_RedBuff"],
    },
    { apiName: "TFT14_Skarner", hex: 2 },
    { apiName: "TFT14_Leona", hex: 3 },
    { apiName: "TFT14_Rhaast", hex: 4 },
    { apiName: "TFT14_Jarvan", hex: 5 },
    {
      apiName: "TFT14_Sylas",
      hex: 7,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_ArchangelsStaff", "TFT_Item_TitansResolve"],
    },
    {
      apiName: "TFT14_Xayah",
      hex: 21,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT14_Aphelios", hex: 27 },
  ],
  early: [
    { apiName: "TFT14_Vi", hex: 2 },
    { apiName: "TFT14_Sylas", hex: 3, carry: true, items: ["TFT_Item_TitansResolve", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT14_Illaoi", hex: 4 },
    { apiName: "TFT14_Seraphine", hex: 24 },
  ],
  augments: [
    "TFT_Augment_Lineup",
    "TFT9_Augment_HealingOrbsII",
    "TFT14_Augment_SylasCarry",
    "TFT14_Augment_Guardian_Vertical",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Titan's Resolve, Needlessly Large Rod and B.F. Sword.",
    "Sylas can also hold Seeker's Armguard.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-wolf-guard-sylas",
  },
} satisfies Comp;
