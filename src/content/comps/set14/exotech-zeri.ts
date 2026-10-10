import type { Comp } from "../../types";

export default {
  slug: "set14-exotech-zeri",
  name: "Exotech Zeri",
  set: 14,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Zeri. Zeri (Guinsoo's Rageblade and Kraken's Fury) carries alongside Jhin (Infinity Edge and Spear of Shojin). The board runs 7 Exotech, 2 Bastion and 2 Dynamo.",
  board: [
    { apiName: "TFT14_Sejuani", hex: 1, items: ["TFT_Item_FrozenHeart", "TFT_Item_FrozenHeart"] },
    { apiName: "TFT14_Mordekaiser", hex: 2, items: ["TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet"] },
    { apiName: "TFT14_Garen", hex: 3, items: ["TFT14_Item_EdgeRunnerEmblemItem", "TFT_Item_SteraksGage"] },
    { apiName: "TFT14_Jax", hex: 4 },
    { apiName: "TFT14_Zeri", hex: 14, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"] },
    { apiName: "TFT14_Kindred", hex: 20 },
    { apiName: "TFT14_Jhin", hex: 21, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"] },
    { apiName: "TFT14_Aurora", hex: 25 },
    { apiName: "TFT14_Varus", hex: 27 },
  ],
  early: [
    { apiName: "TFT14_Naafiri", hex: 2 },
    { apiName: "TFT14_Jax", hex: 3 },
    { apiName: "TFT14_Kindred", hex: 23 },
    { apiName: "TFT14_Jhin", hex: 24, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"] },
  ],
  augments: [
    "TFT14_Augment_ExotechCrown",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT6_Augment_BinaryAirdrop",
    "TFT_Augment_ClimbTheLadder2",
    "TFT_Augment_ForwardThinking",
    "TFT_Augment_Flexible",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Recurve Bow, Negatron Cloak and Giant's Belt.",
    "Zeri can also hold Flickerblades and Radiant Kraken's Fury.",
    "Mordekaiser can also hold Vanguard Emblem.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-exotech-zeri",
  },
} satisfies Comp;
