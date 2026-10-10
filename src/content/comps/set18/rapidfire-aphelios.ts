import type { Comp } from "../../types";

export default {
  slug: "set18-rapidfire-aphelios",
  name: "Rapidfire Aphelios",
  set: 18,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Aphelios. Aphelios (Infinity Edge, Kraken's Fury and Striker's Flail) carries alongside Brambleback (Rapidfire Emblem, Edge of Night and Quicksilver). The board runs 5 Rapidfire, 3 Riftbeast and 2 Fae.",
  board: [
    {
      apiName: "DA_Amumu18",
      hex: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_BrambleVest"],
    },
    { apiName: "DA_Sentinel18", hex: 9, items: ["TFT_Item_FrozenHeart"] },
    { apiName: "DA_18_Rakan", hex: 10 },
    {
      apiName: "DA_Brambleback18",
      hex: 14,
      carry: true,
      items: ["DA_18_EmblemRapidfire", "TFT_Item_GuardianAngel", "TFT_Item_Quicksilver"],
    },
    {
      apiName: "DA_18_Aphelios",
      hex: 21,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_RunaansHurricane", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "DA_CrimsonRaptor18", hex: 22, items: ["TFT_Item_LastWhisper"] },
    { apiName: "DA_18_Xayah", hex: 23 },
    { apiName: "DA_18_Varus", hex: 27 },
  ],
  early: [
    { apiName: "DA_18_Shen", hex: 2 },
    { apiName: "DA_18_Ornn", hex: 3 },
    { apiName: "DA_18_Varus", hex: 23, items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper"] },
    { apiName: "DA_18_Xayah", hex: 24 },
  ],
  augments: ["DA_Swordsmith", "DA_SwordOverflow", "DA_BacklineBlueprint", "DA_FutureFocused"],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Chain Vest and Recurve Bow.",
    "At level 9, add Diana to the board.",
    "Aphelios can also hold Gold Collector.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-aphelios-rapidfire",
  },
} satisfies Comp;
