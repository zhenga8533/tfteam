import type { Comp } from "../../types";

export default {
  slug: "set17-primordian-briar",
  name: "Primordian Briar",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 1-cost reroll comp built around three-star Briar. Briar (Sterak's Gage, Titan's Resolve and Bloodthirster) carries alongside Bel'Veth (Quicksilver, Kraken's Fury and Giant Slayer). The board runs 3 Primordian, 2 Brawler and 2 Challenger.",
  board: [
    {
      apiName: "TFT17_Briar",
      hex: 0,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_TitansResolve", "TFT_Item_Bloodthirster"],
    },
    {
      apiName: "TFT17_RekSai",
      hex: 8,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_FrozenHeart", "TFT_Item_SpectralGauntlet"],
    },
    { apiName: "TFT17_Chogath", hex: 13 },
    {
      apiName: "TFT17_Belveth",
      hex: 14,
      star: 3,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor"],
    },
    {
      apiName: "TFT17_Kaisa",
      hex: 21,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "TFT17_Kindred", hex: 23 },
    { apiName: "TFT17_Akali", hex: 24 },
    { apiName: "TFT17_Rhaast", hex: 25 },
  ],
  early: [
    { apiName: "TFT17_RekSai", hex: 2 },
    { apiName: "TFT17_Chogath", hex: 3 },
    { apiName: "TFT17_Briar", hex: 4, carry: true, items: ["TFT_Item_Bloodthirster", "TFT_Item_SteraksGage"] },
    { apiName: "TFT17_Belveth", hex: 10, carry: true },
  ],
  augments: [
    "TFT6_Augment_GachaAddict",
    "TFT6_Augment_TradeSector",
    "TFT9_Augment_MissedConnections",
    "TFT_Augment_Waverider",
    "TFT_Augment_BoxingLessons",
    "TFT_Augment_NoScoutNoPivot",
    "TFT_Augment_GroupHug1",
    "TFT_Augment_FuriousBlows",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Negatron Cloak, Giant's Belt and Chain Vest.",
    "At level 9, add Pantheon, Riven, Tahm Kench and Jhin to the board.",
    "Briar can also hold Titanic Hydra, Infinity Force and Hellfire Hatchet.",
    "Bel'Veth can also hold Fishbones, Evelynn's Instinct and Gold Collector.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-primordian-reroll",
  },
} satisfies Comp;
