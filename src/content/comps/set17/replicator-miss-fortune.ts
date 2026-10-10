import type { Comp } from "../../types";

export default {
  slug: "set17-replicator-miss-fortune",
  name: "Replicator Miss Fortune",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Miss Fortune. Miss Fortune (Infinity Edge, Deathblade and Spear of Shojin) carries alongside Lulu (2× Nashor's Tooth and Jeweled Gauntlet). The board runs 3 Replicator, 2 Bastion and 2 Brawler.",
  board: [
    { apiName: "TFT17_Rhaast", hex: 0 },
    { apiName: "TFT17_Pantheon", hex: 1 },
    { apiName: "TFT17_Aatrox", hex: 2 },
    { apiName: "TFT17_Maokai", hex: 3, star: 3, items: ["TFT_Item_RedBuff"] },
    {
      apiName: "TFT17_Ornn",
      hex: 4,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_Redemption", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT17_Nami", hex: 21 },
    {
      apiName: "TFT17_Lulu",
      hex: 26,
      star: 3,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"],
    },
    {
      apiName: "TFT17_MissFortune",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_Deathblade", "TFT_Item_SpearOfShojin"],
    },
  ],
  early: [
    { apiName: "TFT17_Pantheon", hex: 2 },
    { apiName: "TFT17_Chogath", hex: 3 },
    { apiName: "TFT17_MissFortune", hex: 23, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge"] },
    { apiName: "TFT17_Lissandra", hex: 24 },
  ],
  augments: [
    "TFT10_Augment_HeroicGrabBag",
    "TFT6_Augment_GachaAddict",
    "TFT_Augment_LegionOfThrees",
    "TFT_Augment_SwordOverflow",
    "TFT_Augment_ForgeSword",
    "TFT_Augment_SizeMatters",
    "TFT7_Augment_LivingForge",
    "TFT_Augment_TragicalBlade",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Tear of the Goddess, Recurve Bow and Giant's Belt.",
    "At level 8, add Morgana to the board.",
    "At level 9, add Jax to the board.",
    "Lulu can also hold Dawncore.",
    "Miss Fortune can also hold Sniper's Focus and Yasuo's Bladework.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-replicator-mf-reroll",
  },
} satisfies Comp;
