import type { Comp } from "../../types";

export default {
  slug: "set18-hunter-caitlyn",
  name: "Hunter Caitlyn",
  set: 18,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Caitlyn. Caitlyn (Guinsoo's Rageblade, Kraken's Fury and Hextech Gunblade) carries alongside Sivir (Infinity Edge, Last Whisper and Red Buff). The board runs 4 Juggernaut, 3 Hunter and 2 Fae.",
  board: [
    {
      apiName: "DA_Scuttlecrab18",
      hex: 4,
      star: 3,
      items: ["TFT_Item_Redemption", "TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "DA_18_Sejuani", hex: 15, star: 3 },
    { apiName: "DA_18_Rakan", hex: 16 },
    { apiName: "DA_Vi18", hex: 17 },
    { apiName: "DA_18_Tristana", hex: 25 },
    {
      apiName: "DA_18_Sivir",
      hex: 26,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper", "TFT_Item_RapidFireCannon"],
    },
    {
      apiName: "DA_18_Caitlyn",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane", "TFT_Item_HextechGunblade"],
    },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Tristana", hex: 23 },
    { apiName: "DA_18_Caitlyn", hex: 24, carry: true },
  ],
  augments: ["DA_PrismaticTicket", "DA_ShimmerscaleEssence"],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Kraken's Fury, Recurve Bow and Giant's Belt.",
    "At level 9, add Amumu and Maokai to the board.",
    "Caitlyn can also hold Radiant Guinsoo's Rageblade, Hextech Gunblade and Kraken's Fury.",
    "Caitlyn can also hold Flickerblades, Gambler's Blade and Gold Collector.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-caitlyn-hunters",
  },
} satisfies Comp;
