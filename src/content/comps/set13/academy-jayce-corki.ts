import type { Comp } from "../../types";

export default {
  slug: "set13-academy-jayce-corki",
  name: "Academy Jayce & Corki",
  set: 13,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Jayce. Jayce (Infinity Edge and Spear of Shojin) carries alongside Corki (Last Whisper, Infinity Edge and Academy Emblem). The board runs 5 Academy, 4 Sentinel and 3 Rebel.",
  board: [
    { apiName: "TFT13_Irelia", hex: 1 },
    { apiName: "TFT13_Leona", hex: 3 },
    { apiName: "TFT13_Rumble", hex: 4 },
    { apiName: "TFT13_Illaoi", hex: 5, items: ["TFT_Item_Redemption", "TFT_Item_FrozenHeart", "TFT_Item_RedBuff"] },
    { apiName: "TFT13_Lux", hex: 21 },
    { apiName: "TFT13_Jayce", hex: 23, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"] },
    {
      apiName: "TFT13_Corki",
      hex: 25,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT13_Item_AcademyEmblemItem"],
    },
    {
      apiName: "TFT13_Ezreal",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_RunaansHurricane", "TFT_Item_RunaansHurricane"],
    },
  ],
  early: [
    { apiName: "TFT13_Rell", hex: 2 },
    { apiName: "TFT13_Leona", hex: 3 },
    { apiName: "TFT13_Lux", hex: 23 },
    {
      apiName: "TFT13_Ezreal",
      hex: 24,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_RunaansHurricane"],
    },
  ],
  augments: [
    "TFT13_Augment_AcademyCrown",
    "TFT13_Augment_AcademyCrest",
    "TFT13_Augment_Academy",
    "TFT_Augment_GlassCannonII",
    "TFT11_Augment_RadiantRefactor",
    "TFT10_Augment_HeroicGrabBag",
  ],
  tips: [
    "On carousels and early slams, look for Kraken's Fury, Recurve Bow, Negatron Cloak and B.F. Sword.",
    "Illaoi can also hold Lightshield Crest.",
    "Ezreal can also hold Radiant Kraken's Fury and Gold Collector.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-hurricane-ezreal",
  },
} satisfies Comp;
