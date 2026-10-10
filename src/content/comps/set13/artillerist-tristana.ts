import type { Comp } from "../../types";

export default {
  slug: "set13-artillerist-tristana",
  name: "Artillerist Tristana",
  set: 13,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Tristana. Tristana (Infinity Edge, Guinsoo's Rageblade and Hextech Gunblade) carries alongside Ezreal (Last Whisper, Kraken's Fury and Infinity Edge). The board runs 6 Sentinel, 3 Rebel and 2 Artillerist.",
  board: [
    { apiName: "TFT13_Irelia", hex: 1 },
    { apiName: "TFT13_Illaoi", hex: 2 },
    { apiName: "TFT13_Rumble", hex: 3 },
    { apiName: "TFT13_Singed", hex: 4, star: 3 },
    {
      apiName: "TFT13_Rell",
      hex: 5,
      star: 3,
      items: ["TFT_Item_Redemption", "TFT_Item_FrozenHeart", "TFT_Item_RedBuff"],
    },
    { apiName: "TFT13_Leona", hex: 6 },
    {
      apiName: "TFT13_Ezreal",
      hex: 25,
      star: 3,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_RunaansHurricane", "TFT_Item_InfinityEdge"],
    },
    {
      apiName: "TFT13_Tristana",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade"],
    },
  ],
  early: [
    { apiName: "TFT13_Singed", hex: 2 },
    { apiName: "TFT13_Irelia", hex: 3, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT13_Urgot", hex: 10 },
    { apiName: "TFT13_Tristana", hex: 24, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "TFT9_Augment_BardPlaybook1",
    "TFT_Augment_TwoMuchValue",
    "TFT13_Augment_Artillerist",
    "TFT_Augment_CloningFacility",
    "TFT_Augment_CookingPot",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Infinity Edge, B.F. Sword and Giant's Belt.",
    "Tristana can also hold Gold Collector, Fishbones and Sniper's Focus.",
    "Tristana can also hold Radiant Giant Slayer.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-sentinel-tristana",
  },
} satisfies Comp;
