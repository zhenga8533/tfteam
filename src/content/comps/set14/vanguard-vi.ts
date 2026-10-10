import type { Comp } from "../../types";

export default {
  slug: "set14-vanguard-vi",
  name: "Vanguard Vi",
  set: 14,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Vi. Vi (Bloodthirster, Titan's Resolve and Sterak's Gage) carries alongside Zed (Hand Of Justice, Infinity Edge and Striker's Flail). The board runs 6 Vanguard, 3 Cypher and 2 Slayer.",
  board: [
    { apiName: "TFT14_Jarvan", hex: 0 },
    { apiName: "TFT14_Rhaast", hex: 1 },
    { apiName: "TFT14_Sylas", hex: 2 },
    { apiName: "TFT14_Leona", hex: 3, items: ["TFT_Item_Redemption", "TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet"] },
    {
      apiName: "TFT14_Zed",
      hex: 4,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet"],
    },
    {
      apiName: "TFT14_Vi",
      hex: 5,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_SteraksGage"],
    },
    { apiName: "TFT14_Braum", hex: 6 },
    { apiName: "TFT14_Draven", hex: 27 },
  ],
  early: [
    { apiName: "TFT14_Skarner", hex: 1 },
    { apiName: "TFT14_Sylas", hex: 2 },
    { apiName: "TFT14_Vi", hex: 3, carry: true, items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"] },
    { apiName: "TFT14_Rhaast", hex: 4 },
  ],
  augments: [
    "TFT14_Augment_ViCarry",
    "TFT_Augment_Lineup",
    "TFT9_Augment_HealingOrbsII",
    "TFT14_Augment_Guardian_Vertical",
    "TFT_Augment_ClimbTheLadder2",
    "TFT14_Augment_BlackMarketGargantuanResolve",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Titan's Resolve, Sterak's Gage and Negatron Cloak.",
    "Vi can also hold Silvermere Dawn.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-cease-and-desist-vi",
  },
} satisfies Comp;
