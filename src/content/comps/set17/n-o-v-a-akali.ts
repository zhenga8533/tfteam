import type { Comp } from "../../types";

export default {
  slug: "set17-n-o-v-a-akali",
  name: "N.O.V.A. Akali",
  set: 17,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Akali. Akali (Striker's Flail, Deathblade and Hextech Gunblade) carries alongside Kindred (Kraken's Fury, Giant Slayer and Guinsoo's Rageblade). The board runs 5 N.O.V.A., 2 Bastion and 2 Brawler.",
  board: [
    {
      apiName: "TFT17_Jax",
      hex: 3,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_GargoyleStoneplate", "TFT_Item_Crownguard"],
    },
    { apiName: "TFT17_Maokai", hex: 14 },
    { apiName: "TFT17_Urgot", hex: 15 },
    {
      apiName: "TFT17_Akali",
      hex: 16,
      star: 3,
      carry: true,
      items: ["TFT_Item_PowerGauntlet", "TFT_Item_Deathblade", "TFT_Item_HextechGunblade"],
    },
    { apiName: "TFT17_Morgana", hex: 18 },
    { apiName: "TFT17_Aatrox", hex: 20 },
    {
      apiName: "TFT17_Kindred",
      hex: 21,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor", "TFT_Item_GuinsoosRageblade"],
    },
    { apiName: "TFT17_Caitlyn", hex: 23 },
  ],
  early: [
    { apiName: "TFT17_RekSai", hex: 2 },
    { apiName: "TFT17_Briar", hex: 3 },
    { apiName: "TFT17_Akali", hex: 4, carry: true, items: ["TFT_Item_HextechGunblade", "TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT17_Belveth", hex: 10 },
  ],
  augments: [
    "TFT_Augment_InfinityProtection",
    "TFT_Augment_GroupHug1",
    "TFT9_Augment_Commander_RollingForDays",
    "TFT_Augment_WorthTheWaitPrismatic",
    "TFT9_Augment_BardPlaybook1",
    "TFT_Augment_SwordOverflow",
    "TFT_Augment_HomeCooking",
    "TFT_Augment_BodyguardTraining",
  ],
  tips: [
    "On carousels and early slams, look for Hextech Gunblade, Gargoyle Stoneplate, B.F. Sword and Sparring Gloves.",
    "At level 9, add Fiora, Vex and Shen to the board.",
    "Akali can also hold Gold Collector, Death's Defiance and Infinity Force.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-akali-reroll",
  },
} satisfies Comp;
