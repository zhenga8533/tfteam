import type { Comp } from "../../types";

export default {
  slug: "set15-duelist-ashe",
  name: "Duelist Ashe",
  set: 15,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Ashe. Ashe (2× Kraken's Fury and Guinsoo's Rageblade) carries alongside Lee Sin (Edge of Night, Infinity Edge and Hand Of Justice). The board runs 6 Duelist, 2 Juggernaut and 2 Soul Fighter.",
  board: [
    { apiName: "TFT15_Sett", hex: 1 },
    { apiName: "TFT15_Viego", hex: 2 },
    { apiName: "TFT15_Gangplank", hex: 3 },
    {
      apiName: "TFT15_LeeSin",
      hex: 4,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction"],
    },
    {
      apiName: "TFT15_Udyr",
      hex: 5,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_Redemption", "TFT_Item_SpectralGauntlet"],
    },
    { apiName: "TFT15_KaiSa", hex: 21 },
    { apiName: "TFT15_Kayle", hex: 24 },
    {
      apiName: "TFT15_Ashe",
      hex: 27,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"],
    },
  ],
  early: [
    { apiName: "TFT15_DrMundo", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Kobuko", hex: 4 },
    { apiName: "TFT15_Gnar", hex: 24, items: ["TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT7_Augment_LivingForge",
    "TFT11_Augment_RadiantRefactor",
    "TFT9_Augment_HighEndSector",
    "TFT6_Augment_PandorasItems",
    "TFT_Augment_SwordOverflow",
    "TFT_Augment_AnotherOne",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Negatron Cloak, B.F. Sword and Giant's Belt.",
    "At level 9, add Lee Sin and Twisted Fate to the board.",
    "Ashe can also hold Flickerblades, Fishbones and Radiant Kraken's Fury.",
    "Favor combat, economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-duelist-ashe-ok",
  },
} satisfies Comp;
