import type { Comp } from "../../types";

export default {
  slug: "set16-zaun-jinx",
  name: "Zaun Jinx",
  set: 16,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Jinx. Jinx (Guinsoo's Rageblade, Kraken's Fury and Quicksilver) carries alongside Warwick (Titan's Resolve, Sterak's Gage and Bloodthirster). The board runs 1 Targon, 3 Freljord and 3 Zaun.",
  board: [
    {
      apiName: "TFT16_Sejuani",
      hex: 1,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_Redemption", "TFT_Item_FrozenHeart"],
    },
    { apiName: "TFT16_Braum", hex: 2 },
    { apiName: "TFT16_Vi", hex: 4 },
    { apiName: "TFT16_Taric", hex: 6 },
    { apiName: "TFT16_Loris", hex: 9 },
    {
      apiName: "TFT16_Warwick",
      hex: 15,
      carry: true,
      items: ["TFT_Item_TitansResolve", "TFT_Item_SteraksGage", "TFT_Item_Bloodthirster"],
    },
    {
      apiName: "TFT16_Jinx",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane", "TFT_Item_Quicksilver"],
    },
    { apiName: "TFT16_Lucian", hex: 23, items: ["TFT_Item_LastWhisper"] },
    { apiName: "TFT16_Ashe", hex: 27 },
  ],
  early: [
    { apiName: "TFT16_JarvanIV", hex: 2 },
    { apiName: "TFT16_Blitzcrank", hex: 3 },
    { apiName: "TFT16_Vi", hex: 4 },
    { apiName: "TFT16_Jinx", hex: 24, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_LastWhisper"] },
  ],
  augments: [
    "TFT_Augment_BronzeForLifeI",
    "TFT_Augment_BronzeForLife2",
    "TFT_Augment_ComponentQuestBow",
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_FoodfightTactics",
    "TFT9_Augment_Commander_Ascension",
    "TFT_Augment_PatienceIsAVirtue",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Recurve Bow, Negatron Cloak and Sparring Gloves.",
    "At level 9, add Kindred and Ryze  to the board.",
    "Jinx can also hold Flickerblades.",
    "Warwick can also hold Gunslinger Emblem.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-zaunara",
  },
} satisfies Comp;
