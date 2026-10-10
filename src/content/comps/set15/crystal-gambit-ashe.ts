import type { Comp } from "../../types";

export default {
  slug: "set15-crystal-gambit-ashe",
  name: "Crystal Gambit Ashe",
  set: 15,
  tier: "A",
  playstyle: "Flex",
  difficulty: "Hard",
  summary:
    "Lose streaks through the early game, then stabilizes around Ashe. Ashe (2× Kraken's Fury and Guinsoo's Rageblade) carries alongside Lee Sin (Infinity Edge, Hand Of Justice and Sterak's Gage). The board runs 5 Crystal Gambit, 2 Bastion and 2 Protector.",
  board: [
    {
      apiName: "TFT15_KSante",
      hex: 1,
      items: ["TFT_Item_Redemption", "TFT_Item_WarmogsArmor", "TFT_Item_SpectralGauntlet"],
    },
    { apiName: "TFT15_JarvanIV", hex: 2 },
    {
      apiName: "TFT15_LeeSin",
      hex: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction", "TFT_Item_SteraksGage"],
    },
    { apiName: "TFT15_Braum", hex: 4 },
    { apiName: "TFT15_Swain", hex: 5 },
    { apiName: "TFT15_Vi", hex: 6 },
    {
      apiName: "TFT15_Ashe",
      hex: 21,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"],
    },
    {
      apiName: "TFT15_Zyra",
      hex: 24,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "TFT15_Janna", hex: 27 },
  ],
  early: [
    { apiName: "TFT15_Swain", hex: 2 },
    { apiName: "TFT15_Vi", hex: 3 },
    { apiName: "TFT15_Janna", hex: 23 },
    { apiName: "TFT15_Syndra", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_CalculatedLoss",
    "TFT9_Augment_PandorasItems2",
    "TFT9_Augment_CustomerIsAlwaysRight",
    "TFT_Augment_AnotherOne",
    "TFT11_Augment_Reinfourcement",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT11_Augment_RadiantRefactor",
    "TFT9_Augment_BigGrabBag",
  ],
  tips: [
    "On carousels and early slams, look for Kraken's Fury, Recurve Bow, Negatron Cloak and Giant's Belt.",
    "At level 9, add Braum and Lee Sin to the board.",
    "Ashe can also hold Flickerblades and Fishbones.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-crystal-gamba",
  },
} satisfies Comp;
