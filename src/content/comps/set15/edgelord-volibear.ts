import type { Comp } from "../../types";

export default {
  slug: "set15-edgelord-volibear",
  name: "Edgelord Volibear",
  set: 15,
  tier: "C",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Volibear. Volibear (Kraken's Fury, Infinity Edge and Hand Of Justice) carries alongside Braum (Blue Buff, Sterak's Gage and Protector's Vow). The board runs 6 Bastion, 4 Edgelord and 2 Luchador.",
  board: [
    { apiName: "TFT15_Shen", hex: 0 },
    { apiName: "TFT15_Swain", hex: 1 },
    { apiName: "TFT15_XinZhao", hex: 2 },
    {
      apiName: "TFT15_Braum",
      hex: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_SteraksGage", "TFT_Item_FrozenHeart"],
    },
    {
      apiName: "TFT15_Volibear",
      hex: 4,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction"],
    },
    {
      apiName: "TFT15_Leona",
      hex: 5,
      items: ["TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT15_Yone", hex: 6 },
    { apiName: "TFT15_Rell", hex: 7 },
    { apiName: "TFT15_Samira", hex: 27 },
  ],
  early: [
    { apiName: "TFT15_Rell", hex: 2 },
    { apiName: "TFT15_Garen", hex: 3 },
    { apiName: "TFT15_Shen", hex: 4 },
    { apiName: "TFT15_Xayah", hex: 24, items: ["TFT_Item_RunaansHurricane", "TFT_Item_InfinityEdge"] },
  ],
  augments: [
    "TFT6_Augment_MaxLevel10",
    "TFT_Augment_UpwardMobility",
    "TFT7_Augment_LategameSpecialist",
    "TFT_Augment_ForwardThinking",
    "TFT_Augment_SwordOverflow",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, B.F. Sword, Sparring Gloves and Tear of the Goddess.",
    "Volibear can also hold Bastion Emblem.",
    "Favor economy, combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-edgelord-95",
  },
} satisfies Comp;
