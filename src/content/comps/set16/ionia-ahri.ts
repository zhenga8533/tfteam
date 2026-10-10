import type { Comp } from "../../types";

export default {
  slug: "set16-ionia-ahri",
  name: "Ionia Ahri",
  set: 16,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Ahri. Ahri (2× Nashor's Tooth and Jeweled Gauntlet) carries alongside Yone (Bloodthirster, Titan's Resolve and Guinsoo's Rageblade). The board runs 7 Ionia, 2 Arcanist and 2 Bruiser.",
  board: [
    { apiName: "TFT16_Sett", hex: 0, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Shen", hex: 1 },
    { apiName: "TFT16_Neeko", hex: 2 },
    { apiName: "TFT16_Yasuo", hex: 3, star: 3, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Wukong", hex: 4 },
    {
      apiName: "TFT16_Kennen",
      hex: 5,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_IonicSpark", "TFT_Item_Redemption"],
    },
    {
      apiName: "TFT16_Yone",
      hex: 13,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_GuinsoosRageblade"],
    },
    {
      apiName: "TFT16_Ahri",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT16_Shen", hex: 2 },
    { apiName: "TFT16_Briar", hex: 3 },
    { apiName: "TFT16_Yasuo", hex: 4 },
    { apiName: "TFT16_Ahri", hex: 24, carry: true, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan"] },
  ],
  augments: [
    "TFT10_Augment_HeroicGrabBag",
    "TFT9_Augment_Commander_RollingForDays",
    "TFT6_Augment_GachaAddict",
    "TFT16_Augment_WaterAxiom",
    "TFT_Augment_HeftyRolls",
    "TFT_Augment_Dummify",
    "TFT_Augment_Golemify",
    "TFT_Augment_PatienceIsAVirtue",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Giant's Belt, Sparring Gloves and Needlessly Large Rod.",
    "At level 7, add Kobuko & Yuumi to the board.",
    "At level 9, add Sylas  to the board.",
    "Ahri can also hold Dawncore and Sniper's Focus.",
    "Yone can also hold Mittens, Death's Defiance and Infinity Force.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-ahri-yone",
  },
} satisfies Comp;
