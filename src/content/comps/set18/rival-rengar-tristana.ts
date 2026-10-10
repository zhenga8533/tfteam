import type { Comp } from "../../types";

export default {
  slug: "set18-rival-rengar-tristana",
  name: "Rival Rengar & Tristana",
  set: 18,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Rengar. Rengar (Sprykin Emblem, Edge of Night and Guinsoo's Rageblade) carries alongside Tristana (Guinsoo's Rageblade, Last Whisper and Deathblade). The board runs 5 Sprykin, 2 Brawler and 2 Defender.",
  board: [
    {
      apiName: "DA_18_Rammus",
      hex: 4,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "DA_18_Lillia", hex: 15 },
    { apiName: "DA_18_Kobuko", hex: 16 },
    { apiName: "DA_18_GnarSmall", hex: 17 },
    {
      apiName: "DA_18_Rengar",
      hex: 20,
      star: 3,
      carry: true,
      items: ["DA_18_EmblemSprykin", "TFT_Item_GuardianAngel", "TFT_Item_GuinsoosRageblade"],
    },
    { apiName: "DA_18_Sivir", hex: 25 },
    {
      apiName: "DA_18_Tristana",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_LastWhisper", "TFT_Item_Deathblade"],
    },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Rengar", hex: 4, carry: true },
    { apiName: "DA_18_Xayah", hex: 24 },
  ],
  augments: ["DA_LegionOfThrees"],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Edge of Night, Negatron Cloak and Recurve Bow.",
    "Rengar can also hold Fae Emblem, Edge of Night and Guinsoo's Rageblade.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-fae-tristana-copy",
  },
} satisfies Comp;
