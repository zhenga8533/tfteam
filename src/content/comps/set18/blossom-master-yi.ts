import type { Comp } from "../../types";

export default {
  slug: "set18-blossom-master-yi",
  name: "Blossom Master Yi",
  set: 18,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Master Yi. Master Yi (Edge of Night, Titan's Resolve and Guinsoo's Rageblade) carries alongside Rengar (Titan's Resolve, Edge of Night and Guinsoo's Rageblade). The board runs 3 Blossom, 2 Adaptor and 2 Brawler.",
  board: [
    { apiName: "DA_18_Sett", hex: 0 },
    { apiName: "DA_Krug18", hex: 1, star: 3 },
    {
      apiName: "DA_Vi18",
      hex: 5,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_SpectralGauntlet"],
    },
    { apiName: "DA_18_Yorick", hex: 14 },
    {
      apiName: "DA_18_Rengar",
      hex: 19,
      star: 3,
      carry: true,
      items: ["TFT_Item_TitansResolve", "TFT_Item_GuardianAngel", "TFT_Item_GuinsoosRageblade"],
    },
    {
      apiName: "DA_18_MasterYi_AD",
      hex: 20,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_TitansResolve", "TFT_Item_GuinsoosRageblade"],
    },
    {
      apiName: "DA_Nidalee18_AP",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  early: [
    { apiName: "DA_18_MasterYi_AD", hex: 2, carry: true, items: ["TFT_Item_GuinsoosRageblade"] },
    { apiName: "DA_18_Yorick", hex: 3 },
    { apiName: "DA_Gromp18_AP", hex: 23 },
    { apiName: "DA_Karma18", hex: 24 },
  ],
  augments: ["DA_LatentForge", "DA_ForgedInStrength", "DA_LivingForge", "DA_NestingAnvils", "DA_LegionOfThrees"],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Recurve Bow, Chain Vest and B.F. Sword.",
    "At level 9, add Kog'Maw to the board.",
    "Master Yi can also hold Brawler Emblem, Hellfire Hatchet and Quicksilver.",
    "Master Yi can also hold Wit's End, Flickerblades and Rapid Firecannon.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-adaptor-reroll-copy",
  },
} satisfies Comp;
