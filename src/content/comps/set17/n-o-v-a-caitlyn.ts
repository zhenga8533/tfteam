import type { Comp } from "../../types";

export default {
  slug: "set17-n-o-v-a-caitlyn",
  name: "N.O.V.A. Caitlyn",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Caitlyn. Caitlyn (Guinsoo's Rageblade, Kraken's Fury and Giant Slayer) carries alongside Corki (N.O.V.A. Emblem, Deathblade and Red Buff). The board runs 5 N.O.V.A., 4 Bastion and 3 Meeple.",
  board: [
    {
      apiName: "TFT17_Aatrox",
      hex: 3,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_TitansResolve", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT17_Rammus", hex: 9 },
    { apiName: "TFT17_Poppy", hex: 17 },
    { apiName: "TFT17_Shen", hex: 18 },
    {
      apiName: "TFT17_Caitlyn",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor"],
    },
    {
      apiName: "TFT17_Corki",
      hex: 22,
      carry: true,
      items: ["TFT17_Item_DRXEmblemItem", "TFT_Item_Deathblade", "TFT_Item_RapidFireCannon"],
    },
    { apiName: "TFT17_Kindred", hex: 24 },
    { apiName: "TFT17_Maokai", hex: 26 },
  ],
  early: [
    { apiName: "TFT17_Jax", hex: 2 },
    { apiName: "TFT17_Aatrox", hex: 3 },
    { apiName: "TFT17_TwistedFate", hex: 23 },
    { apiName: "TFT17_Caitlyn", hex: 24, carry: true },
  ],
  augments: [
    "TFT_Augment_TreasureHunt",
    "TFT_Augment_ItemGargoyleStoneplate",
    "TFT6_Augment_GachaAddict",
    "TFT_Augment_SwordOverflow",
    "TFT_Augment_ForgeSword",
    "TFT_Augment_ComponentQuestSword",
    "TFT_Augment_HomeCooking",
    "TFT9_Augment_MissedConnections",
  ],
  tips: [
    "On carousels and early slams, look for Gargoyle Stoneplate, Guinsoo's Rageblade, Negatron Cloak and Chain Vest.",
    "At level 9, add Talon, Twisted Fate and Jax to the board.",
    "Aatrox can also hold Silvermere Dawn and 2× Gargoyle Stoneplate.",
    "Aatrox can also hold Aegis of Dawn and 2× Gargoyle Stoneplate.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-nova-reroll",
  },
} satisfies Comp;
