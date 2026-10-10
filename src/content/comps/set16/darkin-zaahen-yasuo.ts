import type { Comp } from "../../types";

export default {
  slug: "set16-darkin-zaahen-yasuo",
  name: "Darkin Zaahen & Yasuo",
  set: 16,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Zaahen. Zaahen (Titan's Resolve, Bloodthirster and Giant Slayer) carries alongside Yasuo (Infinity Edge, Hand Of Justice and Edge of Night). The board runs 6 Ionia, 2 Bruiser and 2 Quickstriker.",
  board: [
    { apiName: "TFT16_Sett", hex: 0, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Shen", hex: 2 },
    {
      apiName: "TFT16_Yasuo",
      hex: 4,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction", "TFT_Item_GuardianAngel"],
    },
    {
      apiName: "TFT16_Wukong",
      hex: 5,
      items: ["TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet", "TFT_Item_FrozenHeart"],
    },
    {
      apiName: "TFT16_Yone",
      hex: 6,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_GuardianAngel", "TFT_Item_GuinsoosRageblade"],
    },
    {
      apiName: "TFT16_Zaahen",
      hex: 13,
      carry: true,
      items: ["TFT_Item_TitansResolve", "TFT_Item_Bloodthirster", "TFT_Item_MadredsBloodrazor"],
    },
    { apiName: "TFT16_Kindred", hex: 25 },
    { apiName: "TFT16_Yunara", hex: 27 },
  ],
  early: [
    { apiName: "TFT16_XinZhao", hex: 2, items: ["TFT_Item_TitansResolve", "TFT_Item_InfinityEdge"] },
    { apiName: "TFT16_Shen", hex: 3 },
    { apiName: "TFT16_Nautilus", hex: 4 },
    { apiName: "TFT16_Jhin", hex: 24 },
  ],
  augments: [
    "TFT16_Augment_TheDarkinForge",
    "TFT_Augment_SwordOverflow",
    "TFT_Augment_HomeCooking",
    "TFT6_Augment_PortableForge",
    "TFT11_Augment_Calltochaos",
  ],
  tips: [
    "On carousels and early slams, look for Titan's Resolve, B.F. Sword, Negatron Cloak and Recurve Bow.",
    "At level 9, add Aatrox  to the board.",
    "Zaahen can also hold Death's Defiance and Infinity Force.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-trials-of-twilight-zaahen",
  },
} satisfies Comp;
