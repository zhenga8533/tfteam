import type { Comp } from "../../types";

export default {
  slug: "set17-n-o-v-a-kindred-leblanc",
  name: "N.O.V.A. Kindred & LeBlanc",
  set: 17,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Kindred. Kindred (Guinsoo's Rageblade, Kraken's Fury and Giant Slayer) carries alongside LeBlanc (Guinsoo's Rageblade, Rabadon's Deathcap and Jeweled Gauntlet). The board runs 3 N.O.V.A., 2 Arbiter and 2 Bastion.",
  board: [
    { apiName: "TFT17_Aatrox", hex: 1 },
    { apiName: "TFT17_TahmKench", hex: 3 },
    {
      apiName: "TFT17_Morgana",
      hex: 4,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_Crownguard", "TFT_Item_NightHarvester"],
    },
    { apiName: "TFT17_Maokai", hex: 9 },
    { apiName: "TFT17_Shen", hex: 11 },
    { apiName: "TFT17_Diana", hex: 18 },
    {
      apiName: "TFT17_Kindred",
      hex: 26,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor"],
    },
    {
      apiName: "TFT17_Leblanc",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT17_Jax", hex: 2 },
    { apiName: "TFT17_Aatrox", hex: 3 },
    { apiName: "TFT17_Caitlyn", hex: 23, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"] },
    { apiName: "TFT17_TwistedFate", hex: 24 },
  ],
  augments: [
    "TFT_Augment_EpicRolldown",
    "TFT_Augment_ExclusiveCustomization",
    "TFT_Augment_SpeedyDoubleKill",
    "TFT11_Augment_Reinfourcement",
    "TFT_Augment_ComponentQuestRod",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT9_Augment_Commander_RollingForDays",
    "TFT_Augment_SubscriptionService",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Recurve Bow, Negatron Cloak and Needlessly Large Rod.",
    "At level 9, add Fiora and Graves to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-kindred-leblanc",
  },
} satisfies Comp;
