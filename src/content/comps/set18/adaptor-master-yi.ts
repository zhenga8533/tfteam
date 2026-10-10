import type { Comp } from "../../types";

export default {
  slug: "set18-adaptor-master-yi",
  name: "Adaptor Master Yi",
  set: 18,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Master Yi. Master Yi (Guinsoo's Rageblade, Edge of Night and Titan's Resolve) carries alongside Kog'Maw (Spear of Shojin, Rabadon's Deathcap and Jeweled Gauntlet). The board runs 3 Adaptor, 3 Blossom and 2 Brawler.",
  board: [
    { apiName: "DA_18_Sett", hex: 0 },
    { apiName: "DA_Krug18", hex: 1, star: 3 },
    {
      apiName: "DA_Vi18",
      hex: 5,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "DA_18_Yorick", hex: 14 },
    {
      apiName: "DA_18_MasterYi_AD",
      hex: 20,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_GuardianAngel", "TFT_Item_TitansResolve"],
    },
    {
      apiName: "DA_Nidalee18_AP",
      hex: 26,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap"],
    },
    {
      apiName: "DA_KogMaw18_AD",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_MasterYi_AD", hex: 3, carry: true },
    { apiName: "DA_Gromp18_AP", hex: 23 },
    { apiName: "DA_Karma18", hex: 24 },
  ],
  augments: [
    "DA_LatentForge",
    "DA_ForgedInStrength",
    "DA_LivingForge",
    "DA_URF",
    "DA_NestingAnvils",
    "DA_LegionOfThrees",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Edge of Night, Chain Vest and Recurve Bow.",
    "At level 9, add Gromp and Sentinel to the board.",
    "Master Yi can also hold Brawler Emblem, Guinsoo's Rageblade and Edge of Night.",
    "Master Yi can also hold Wit's End, Flickerblades and Rapid Firecannon.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-adaptor-reroll",
  },
} satisfies Comp;
