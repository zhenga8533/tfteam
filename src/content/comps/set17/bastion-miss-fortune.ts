import type { Comp } from "../../types";

export default {
  slug: "set17-bastion-miss-fortune",
  name: "Bastion Miss Fortune",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Miss Fortune. Miss Fortune (Guinsoo's Rageblade, Deathblade and Giant Slayer) carries. The board runs 2 Bastion, 2 Brawler and 2 Marauder.",
  board: [
    {
      apiName: "TFT17_Ornn",
      hex: 2,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor", "TFT_Item_NightHarvester"],
    },
    { apiName: "TFT17_Maokai", hex: 3 },
    { apiName: "TFT17_Rhaast", hex: 4 },
    { apiName: "TFT17_Aatrox", hex: 5 },
    { apiName: "TFT17_Urgot", hex: 10 },
    {
      apiName: "TFT17_MissFortune",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Deathblade", "TFT_Item_MadredsBloodrazor"],
    },
    { apiName: "TFT17_Belveth", hex: 22 },
  ],
  early: [
    { apiName: "TFT17_RekSai", hex: 2 },
    { apiName: "TFT17_Briar", hex: 3 },
    { apiName: "TFT17_Belveth", hex: 10 },
    {
      apiName: "TFT17_MissFortune",
      hex: 24,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Deathblade"],
    },
  ],
  augments: [
    "TFT_Augment_Expedition",
    "TFT_Augment_LegionOfThrees",
    "TFT_Augment_TreasureHunt",
    "TFT_Augment_ForgeSword",
    "TFT_Augment_JustSlayer",
    "TFT6_Augment_Electrocharge1",
    "TFT9_Augment_ArmyBuilding",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Deathblade, Giant's Belt and Guinsoo's Rageblade.",
    "At level 8, add Akali to the board.",
    "At level 9, add Diana to the board.",
    "Miss Fortune can also hold Dawncore, Guinsoo's Rageblade and Infinity Edge.",
    "Favor item, combat and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-challenger-miss-fortune",
  },
} satisfies Comp;
