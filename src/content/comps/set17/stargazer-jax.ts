import type { Comp } from "../../types";

export default {
  slug: "set17-stargazer-jax",
  name: "Stargazer Jax",
  set: 17,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Jax. Jax (Titan's Resolve, Bloodthirster and Edge of Night) carries alongside Milio (2× Nashor's Tooth and Rabadon's Deathcap). The board runs 3 Stargazer, 2 Bastion and 2 Brawler.",
  board: [
    { apiName: "TFT17_Aatrox", hex: 2, star: 3 },
    {
      apiName: "TFT17_Pantheon",
      hex: 5,
      star: 3,
      items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_RedBuff"],
    },
    { apiName: "TFT17_Maokai", hex: 9 },
    { apiName: "TFT17_Rhaast", hex: 10 },
    {
      apiName: "TFT17_Jax",
      hex: 12,
      star: 3,
      carry: true,
      items: ["TFT_Item_TitansResolve", "TFT_Item_Bloodthirster", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT17_TwistedFate", hex: 25 },
    { apiName: "TFT17_Lulu", hex: 26 },
    {
      apiName: "TFT17_Milio",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_Leviathan", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  early: [
    { apiName: "TFT17_Talon", hex: 2 },
    { apiName: "TFT17_Aatrox", hex: 3 },
    { apiName: "TFT17_Jax", hex: 4, carry: true, items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"] },
    { apiName: "TFT17_TwistedFate", hex: 24 },
  ],
  augments: [
    "TFT17_Augment_JaxCarry",
    "TFT_Augment_Waverider",
    "TFT6_Augment_GachaAddict",
    "TFT9_Augment_MissedConnections",
    "TFT_Augment_BronzeForLife2",
    "TFT6_Augment_SecondWind1",
    "TFT9_Augment_HealingOrbsII",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Titan's Resolve, Edge of Night and Recurve Bow.",
    "At level 8, add Rhaast to the board.",
    "At level 9, add Morgana, Talon and Riven to the board.",
    "Jax can also hold Bloodthirster, Guinsoo's Rageblade and Titan's Resolve.",
    "Jax can also hold Seeker's Armguard, Titan's Resolve and Edge of Night.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-reach-for-the-stars-jax",
  },
} satisfies Comp;
