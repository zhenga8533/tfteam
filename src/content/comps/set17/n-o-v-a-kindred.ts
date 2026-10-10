import type { Comp } from "../../types";

export default {
  slug: "set17-n-o-v-a-kindred",
  name: "N.O.V.A. Kindred",
  set: 17,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Kindred. Kindred (Guinsoo's Rageblade, Kraken's Fury and Giant Slayer) carries alongside Akali (Striker's Flail, Hextech Gunblade and Deathblade). The board runs 5 N.O.V.A., 2 Bastion and 2 Brawler.",
  board: [
    {
      apiName: "TFT17_TahmKench",
      hex: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption"],
    },
    { apiName: "TFT17_Shen", hex: 9 },
    { apiName: "TFT17_Maokai", hex: 10 },
    { apiName: "TFT17_Aatrox", hex: 16 },
    { apiName: "TFT17_Belveth", hex: 18 },
    {
      apiName: "TFT17_Akali",
      hex: 23,
      carry: true,
      items: ["TFT_Item_PowerGauntlet", "TFT_Item_HextechGunblade", "TFT_Item_Deathblade"],
    },
    {
      apiName: "TFT17_Kindred",
      hex: 24,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor"],
    },
    { apiName: "TFT17_Caitlyn", hex: 27 },
  ],
  early: [
    { apiName: "TFT17_RekSai", hex: 2, items: ["TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT17_Briar", hex: 3 },
    { apiName: "TFT17_Akali", hex: 4, carry: true, items: ["TFT_Item_HextechGunblade"] },
    { apiName: "TFT17_Belveth", hex: 10 },
  ],
  augments: [
    "TFT9_Augment_Commander_RollingForDays",
    "TFT_Augment_EpicRolldown",
    "TFT_Augment_ExpectedUnexpectedness",
    "TFT11_Augment_Epoch",
    "TFT_Augment_SoloLeveling",
    "TFT_Augment_TragicalBlade",
    "TFT_Augment_ItemGargoyleStoneplate",
    "TFT_Augment_BodyguardTraining",
  ],
  tips: [
    "On carousels and early slams, look for Hextech Gunblade, Gargoyle Stoneplate, Negatron Cloak and Giant's Belt.",
    "At level 9, add Gragas, Master Yi, Morgana and Rammus to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-nova-kindred",
  },
} satisfies Comp;
