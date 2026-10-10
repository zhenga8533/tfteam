import type { Comp } from "../../types";

export default {
  slug: "set16-darkin-zaahen",
  name: "Darkin Zaahen",
  set: 16,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Zaahen. Zaahen (Titan's Resolve, Bloodthirster and Infinity Edge) carries alongside Lux (Archangel's Staff, Hextech Gunblade and Morellonomicon). The board runs 1 Targon, 6 Demacia and 2 Arcanist.",
  board: [
    { apiName: "TFT16_Taric", hex: 0 },
    { apiName: "TFT16_Poppy", hex: 2 },
    { apiName: "TFT16_JarvanIV", hex: 3 },
    { apiName: "TFT16_Swain", hex: 4 },
    {
      apiName: "TFT16_Garen",
      hex: 5,
      items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_SpectralGauntlet"],
    },
    {
      apiName: "TFT16_Zaahen",
      hex: 13,
      carry: true,
      items: ["TFT_Item_TitansResolve", "TFT_Item_Bloodthirster", "TFT_Item_InfinityEdge"],
    },
    { apiName: "TFT16_Galio", hex: 17 },
    { apiName: "TFT16_Vayne", hex: 21 },
    {
      apiName: "TFT16_Lux",
      hex: 27,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_HextechGunblade", "TFT_Item_Morellonomicon"],
    },
  ],
  early: [
    { apiName: "TFT16_Loris", hex: 1 },
    { apiName: "TFT16_Poppy", hex: 2 },
    { apiName: "TFT16_JarvanIV", hex: 3 },
    { apiName: "TFT16_XinZhao", hex: 4, items: ["TFT_Item_TitansResolve", "TFT_Item_InfinityEdge"] },
  ],
  augments: [
    "TFT16_Augment_TheDarkinForge",
    "TFT9_Augment_HealingOrbsII",
    "TFT6_Augment_RadiantRelics",
    "TFT_Augment_HomeCooking",
    "TFT11_Augment_Calltochaos",
  ],
  tips: [
    "On carousels and early slams, look for Titan's Resolve, Infinity Edge, B.F. Sword and Negatron Cloak.",
    "At level 9, add Fiddlesticks, Sylas  and Zaahen to the board.",
    "Zaahen can also hold Death's Defiance and Infinity Force.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-trials-of-twilight-zaahen-demacia",
  },
} satisfies Comp;
