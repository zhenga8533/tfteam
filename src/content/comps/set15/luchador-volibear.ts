import type { Comp } from "../../types";

export default {
  slug: "set15-luchador-volibear",
  name: "Luchador Volibear",
  set: 15,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Volibear. Volibear (Infinity Edge, Giant Slayer and Hand Of Justice) carries. The board runs 5 Luchador, 4 Juggernaut and 4 Soul Fighter.",
  board: [
    { apiName: "TFT15_Naafiri", hex: 0 },
    { apiName: "TFT15_DrMundo", hex: 1 },
    { apiName: "TFT15_XinZhao", hex: 2 },
    { apiName: "TFT15_LeeSin", hex: 3, items: ["TFT15_Item_RingKingsEmblemItem", "TFT15_Item_JuggernautEmblemItem"] },
    { apiName: "TFT15_Braum", hex: 4, items: ["TFT_Item_BlueBuff", "TFT_Item_FrozenHeart"] },
    { apiName: "TFT15_Sett", hex: 5, items: ["TFT_Item_BrambleVest", "TFT_Item_WarmogsArmor", "TFT_Item_DragonsClaw"] },
    {
      apiName: "TFT15_Volibear",
      hex: 6,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_MadredsBloodrazor", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT15_Gnar", hex: 20 },
    { apiName: "TFT15_Samira", hex: 27, items: ["TFT_Item_LastWhisper", "TFT_Item_RapidFireCannon"] },
  ],
  early: [
    { apiName: "TFT15_Zac", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Naafiri", hex: 4, items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper"] },
    { apiName: "TFT15_Kalista", hex: 24 },
  ],
  augments: [
    "TFT9_Augment_BigGrabBag",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT15_Augment_RingKingCrest",
    "TFT_Augment_ShojinSpirit",
    "TFT_Augment_GuardbreakerSpirit",
    "TFT6_Augment_Keepers2",
    "TFT_Augment_SwordOverflow",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, Sparring Gloves, Recurve Bow and Giant's Belt.",
    "Volibear can also hold Spectral Cutlass, Infinity Edge and Edge of Night.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-444-voli",
  },
} satisfies Comp;
