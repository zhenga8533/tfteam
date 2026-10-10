import type { Comp } from "../../types";

export default {
  slug: "set15-luchador-volibear-jinx",
  name: "Luchador Volibear & Jinx",
  set: 15,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Volibear. Volibear (Kraken's Fury, Infinity Edge and Guinsoo's Rageblade) carries alongside Jinx (Infinity Edge, Spear of Shojin and Giant Slayer). The board runs 4 Luchador, 4 Star Guardian and 2 Bastion.",
  board: [
    { apiName: "TFT15_Gnar", hex: 0 },
    { apiName: "TFT15_DrMundo", hex: 1 },
    { apiName: "TFT15_Rell", hex: 2 },
    { apiName: "TFT15_Kobuko", hex: 3 },
    { apiName: "TFT15_Braum", hex: 4, items: ["TFT_Item_FrozenHeart", "TFT_Item_SteraksGage"] },
    {
      apiName: "TFT15_Poppy",
      hex: 5,
      items: ["TFT_Item_RedBuff", "TFT5_Item_SpectralGauntletRadiant", "TFT_Item_Redemption"],
    },
    {
      apiName: "TFT15_Volibear",
      hex: 13,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_InfinityEdge", "TFT_Item_GuinsoosRageblade"],
    },
    { apiName: "TFT15_Xayah", hex: 21 },
    {
      apiName: "TFT15_Jinx",
      hex: 27,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT15_DrMundo", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Jhin", hex: 23 },
    { apiName: "TFT15_Gnar", hex: 24, items: ["TFT_Item_InfinityEdge", "TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "TFT11_Augment_RainingGold",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT11_Augment_Reinfourcement",
    "TFT_Augment_Replication",
    "TFT15_Augment_StarGuardian_TinyTeam",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Recurve Bow and Negatron Cloak.",
    "At level 9, add Lee Sin and Varus to the board.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-volibear-jinx",
  },
} satisfies Comp;
