import type { Comp } from "../../types";

export default {
  slug: "set15-edgelord-xayah",
  name: "Edgelord Xayah",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Xayah. Xayah carries alongside Rakan (Evenshroud and Sunfire Cape). The board runs 4 Protector, 2 Edgelord and 2 Star Guardian.",
  board: [
    { apiName: "TFT15_Neeko", hex: 9 },
    { apiName: "TFT15_Rakan", hex: 10, carry: true, items: ["TFT_Item_SpectralGauntlet", "TFT_Item_RedBuff"] },
    { apiName: "TFT15_Yasuo", hex: 11 },
    { apiName: "TFT15_KSante", hex: 12 },
    { apiName: "TFT15_Janna", hex: 21 },
    { apiName: "TFT15_Xayah", hex: 25, carry: true },
  ],
  early: [
    { apiName: "TFT15_Shen", hex: 2 },
    { apiName: "TFT15_Malphite", hex: 3 },
    { apiName: "TFT15_Rakan", hex: 4, carry: true, items: ["TFT_Item_ArchangelsStaff"] },
    {
      apiName: "TFT15_Xayah",
      hex: 24,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"],
    },
  ],
  augments: [
    "TFT6_Augment_Twins2",
    "TFT10_Augment_HeroicGrabBag",
    "TFT6_Augment_Keepers1",
    "TFT_Augment_TwoMuchValue",
    "TFT_Augment_AnExaltedAdventure",
    "TFT15_Augment_Protector_PreemptiveProtection",
    "TFT6_Augment_PandorasItems",
    "TFT11_Augment_RadiantRefactor",
  ],
  tips: [
    "On carousels and early slams, look for Archangel's Staff, Kraken's Fury, Recurve Bow and Chain Vest.",
    "At level 9, add K'Sante and K'Sante to the board.",
    "Xayah can also hold Flickerblades and Fishbones.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-double-trouble-fan-service",
  },
} satisfies Comp;
