import type { Comp } from "../../types";

export default {
  slug: "set17-fateweaver-twisted-fate",
  name: "Fateweaver Twisted Fate",
  set: 17,
  tier: "S",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Twisted Fate. Twisted Fate (2× Nashor's Tooth and Rabadon's Deathcap) carries alongside Milio (Spear of Shojin and 2× Rabadon's Deathcap). The board runs 4 Fateweaver, 3 Stargazer and 2 Bastion.",
  board: [
    {
      apiName: "TFT17_Jax",
      hex: 3,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_Crownguard", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT17_Aatrox", hex: 6, star: 3 },
    { apiName: "TFT17_Talon", hex: 10, star: 3 },
    {
      apiName: "TFT17_TwistedFate",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_RabadonsDeathcap", "TFT_Item_Leviathan"],
    },
    {
      apiName: "TFT17_Milio",
      hex: 22,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap", "TFT_Item_RabadonsDeathcap"],
    },
    { apiName: "TFT17_Riven", hex: 25 },
    { apiName: "TFT17_Corki", hex: 26 },
    { apiName: "TFT17_Caitlyn", hex: 27, star: 3 },
  ],
  early: [
    { apiName: "TFT17_Jax", hex: 2, items: ["TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT17_Aatrox", hex: 3 },
    { apiName: "TFT17_TwistedFate", hex: 23, carry: true, items: ["TFT_Item_Leviathan", "TFT_Item_RabadonsDeathcap"] },
    { apiName: "TFT17_Caitlyn", hex: 24 },
  ],
  augments: [
    "TFT_Augment_Waverider",
    "TFT6_Augment_GachaAddict",
    "TFT_Augment_EarlyLearning",
    "TFT_Augment_NoScoutNoPivot",
    "TFT9_Augment_MissedConnections",
    "TFT_Augment_ForgedInStrength",
    "TFT7_Augment_LivingForge",
    "TFT9_Augment_PandorasRadiantBox",
  ],
  tips: [
    "On carousels and early slams, look for Gargoyle Stoneplate, Recurve Bow, Giant's Belt and Needlessly Large Rod.",
    "At level 8, add Morgana to the board.",
    "At level 9, add Nunu & Willump to the board.",
    "Twisted Fate can also hold Spear of Shojin, Luden's Tempest and Rabadon's Deathcap.",
    "Jax can also hold Soraka's Miracle and The Indomitable.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-tf-reroll",
  },
} satisfies Comp;
