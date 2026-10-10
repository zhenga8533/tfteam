import type { Comp } from "../../types";

export default {
  slug: "set17-dark-star-cho-gath",
  name: "Dark Star Cho'Gath",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 1-cost reroll comp built around three-star Cho'Gath. Cho'Gath (Protector's Vow, Warmog's Armor and Spirit Visage) carries alongside Lissandra (Jeweled Gauntlet and 2× Nashor's Tooth). The board runs 6 Dark Star, 2 Brawler and 2 Replicator.",
  board: [
    { apiName: "TFT17_Pantheon", hex: 0 },
    { apiName: "TFT17_Mordekaiser", hex: 1 },
    { apiName: "TFT17_Galio", hex: 4, items: ["TFT_Item_IonicSpark", "TFT_Item_RedBuff"] },
    {
      apiName: "TFT17_Chogath",
      hex: 5,
      star: 3,
      carry: true,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_WarmogsArmor", "TFT_Item_Redemption"],
    },
    { apiName: "TFT17_Ezreal", hex: 21 },
    { apiName: "TFT17_Karma", hex: 22 },
    { apiName: "TFT17_Kaisa", hex: 25 },
    {
      apiName: "TFT17_Jhin",
      hex: 26,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT_Item_Deathblade"],
    },
    {
      apiName: "TFT17_Lissandra",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan", "TFT_Item_Leviathan"],
    },
  ],
  early: [
    { apiName: "TFT17_Pantheon", hex: 2 },
    { apiName: "TFT17_Chogath", hex: 3, carry: true },
    { apiName: "TFT17_Lissandra", hex: 23, carry: true },
    { apiName: "TFT17_Ezreal", hex: 24 },
  ],
  augments: [
    "TFT_Augment_TreasureHunt",
    "TFT9_Augment_MissedConnections",
    "TFT_Augment_ConstructACompanion",
    "TFT_Augment_WorthTheWaitGold",
    "TFT_Augment_HoldTheLine",
    "TFT_Augment_UrfsGambit",
    "TFT17_Augment_DarkStar_WhiteHole",
    "TFT_Augment_EarlyLearning",
  ],
  tips: [
    "On carousels and early slams, look for Needlessly Large Rod, Recurve Bow, Giant's Belt and Tear of the Goddess.",
    "At level 8, add Meepsie and Illaoi to the board.",
    "At level 9, add Ezreal and Blitzcrank to the board.",
    "Lissandra can also hold Dawncore and Eternal Pact.",
    "Lissandra can also hold Radiant Nashor's Tooth, Jeweled Gauntlet and Striker's Flail.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-dark-star-lissandra",
  },
} satisfies Comp;
