import type { Comp } from "../../types";

export default {
  slug: "set15-mighty-mech-gangplank",
  name: "Mighty Mech Gangplank",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Gangplank. Gangplank (Guinsoo's Rageblade, Kraken's Fury and Edge of Night) carries alongside Yasuo (Infinity Edge, Edge of Night and Hand Of Justice). The board runs 4 Mentor, 3 Mighty Mech and 2 Duelist.",
  board: [
    { apiName: "TFT15_Udyr", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    {
      apiName: "TFT15_Yasuo",
      hex: 4,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_GuardianAngel", "TFT_Item_UnstableConcoction"],
    },
    {
      apiName: "TFT15_Kobuko",
      hex: 5,
      star: 3,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_FrozenHeart", "TFT_Item_Crownguard"],
    },
    {
      apiName: "TFT15_Gangplank",
      hex: 13,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT15_Senna", hex: 21 },
    { apiName: "TFT15_Ryze", hex: 27 },
  ],
  early: [
    {
      apiName: "TFT15_Gangplank",
      hex: 2,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"],
    },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Lucian", hex: 23 },
    { apiName: "TFT15_Kayle", hex: 24 },
  ],
  augments: [
    "TFT15_Augment_Mentor_TeachersCouncil",
    "TFT11_Augment_RadiantRefactor",
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_LastSecondSave",
    "TFT_Augment_TwoMuchValue",
    "TFT6_Augment_Keepers1",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Kraken's Fury, B.F. Sword and Chain Vest.",
    "Gangplank can also hold Flickerblades, Sniper's Focus and Fishbones.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-pirate-king",
  },
} satisfies Comp;
