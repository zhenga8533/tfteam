import type { Comp } from "../../types";

export default {
  slug: "set14-anima-squad-sylas",
  name: "Anima Squad Sylas",
  set: 14,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Sylas. Sylas (Bloodthirster, Titan's Resolve and Jeweled Gauntlet) carries. The board runs 7 Anima Squad, 2 Bastion and 2 Techie.",
  board: [
    { apiName: "TFT14_Leona", hex: 1, items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_Redemption"] },
    { apiName: "TFT14_Viego", hex: 3 },
    { apiName: "TFT14_Illaoi", hex: 5 },
    {
      apiName: "TFT14_Sylas",
      hex: 7,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT14_Renekton", hex: 16 },
    { apiName: "TFT14_Xayah", hex: 21, items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge"] },
    { apiName: "TFT14_Vayne", hex: 23 },
    { apiName: "TFT14_Aurora", hex: 25, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    { apiName: "TFT14_Seraphine", hex: 27 },
  ],
  early: [
    { apiName: "TFT14_Vi", hex: 2 },
    { apiName: "TFT14_Sylas", hex: 3, carry: true, items: ["TFT_Item_TitansResolve", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT14_Illaoi", hex: 4 },
    { apiName: "TFT14_Seraphine", hex: 24 },
  ],
  augments: ["TFT_Augment_Lineup", "TFT9_Augment_HealingOrbsII", "TFT14_Augment_SylasCarry"],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Titan's Resolve, Chain Vest and Recurve Bow.",
    "Sylas can also hold Seeker's Armguard.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-wolf-unchained-sylas",
  },
} satisfies Comp;
