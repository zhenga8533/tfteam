import type { Comp } from "../../types";

export default {
  slug: "set13-pit-fighter-violet",
  name: "Pit Fighter Violet",
  set: 13,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Violet. Violet (Titan's Resolve, Sterak's Gage and Quicksilver) carries alongside Draven (Guinsoo's Rageblade, Giant Slayer and Kraken's Fury). The board runs 7 Pit Fighter, 4 Family and 2 Conqueror.",
  board: [
    { apiName: "TFT13_Darius", hex: 1, star: 3 },
    { apiName: "TFT13_Vi", hex: 2, items: ["TFT13_Item_FamilyEmblemItem"] },
    { apiName: "TFT13_Lieutenant", hex: 3 },
    { apiName: "TFT13_Blue", hex: 4, star: 3, items: ["TFT_Item_TearOfTheGoddess", "TFT13_Item_PitFighterEmblemItem"] },
    {
      apiName: "TFT13_Prime",
      hex: 5,
      star: 3,
      items: ["TFT_Item_Redemption", "TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet"],
    },
    {
      apiName: "TFT13_Red",
      hex: 13,
      star: 3,
      carry: true,
      items: ["TFT_Item_TitansResolve", "TFT_Item_SteraksGage", "TFT_Item_Quicksilver"],
    },
    { apiName: "TFT13_Urgot", hex: 19 },
    { apiName: "TFT13_Gangplank", hex: 21 },
    {
      apiName: "TFT13_Draven",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_MadredsBloodrazor", "TFT_Item_RunaansHurricane"],
    },
  ],
  early: [
    { apiName: "TFT13_Prime", hex: 2 },
    { apiName: "TFT13_Red", hex: 3, carry: true, items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"] },
    { apiName: "TFT13_Darius", hex: 4 },
    { apiName: "TFT13_Blue", hex: 23 },
    { apiName: "TFT13_Draven", hex: 24, carry: true, items: ["TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "TFT_Augment_CookingPot",
    "TFT13_Augment_FamilyCrown",
    "TFT13_Augment_FamilyCrest",
    "TFT13_Augment_Family",
    "TFT6_Augment_PortableForge",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Titan's Resolve, Recurve Bow and Sparring Gloves.",
    "Violet can also hold Suspicious Trench Coat, Fishbones and Spectral Cutlass.",
    "Violet can also hold Mittens, Silvermere Dawn and Prowler's Claw.",
    "Favor combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-ohana-means-family",
  },
} satisfies Comp;
