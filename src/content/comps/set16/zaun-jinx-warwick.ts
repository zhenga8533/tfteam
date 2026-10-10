import type { Comp } from "../../types";

export default {
  slug: "set16-zaun-jinx-warwick",
  name: "Zaun Jinx & Warwick",
  set: 16,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Jinx. Jinx (Guinsoo's Rageblade, Quicksilver and Kraken's Fury) carries alongside Warwick (Titan's Resolve, Edge of Night and Bloodthirster). The board runs 5 Zaun, 2 Bruiser and 2 Gunslinger.",
  board: [
    {
      apiName: "TFT16_Wukong",
      hex: 1,
      items: ["TFT_Item_RedBuff", "TFT_Item_Redemption", "TFT_Item_SpectralGauntlet"],
    },
    { apiName: "TFT16_Blitzcrank", hex: 3 },
    { apiName: "TFT16_DrMundo", hex: 4 },
    { apiName: "TFT16_Singed", hex: 6 },
    {
      apiName: "TFT16_Warwick",
      hex: 14,
      carry: true,
      items: ["TFT_Item_TitansResolve", "TFT_Item_GuardianAngel", "TFT_Item_Bloodthirster"],
    },
    {
      apiName: "TFT16_Jinx",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Quicksilver", "TFT_Item_RunaansHurricane"],
    },
    { apiName: "TFT16_Kindred", hex: 24 },
    { apiName: "TFT16_Lucian", hex: 27 },
  ],
  early: [
    { apiName: "TFT16_Vi", hex: 1, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Quicksilver"] },
    { apiName: "TFT16_Ekko", hex: 2 },
    { apiName: "TFT16_Blitzcrank", hex: 3 },
    { apiName: "TFT16_Neeko", hex: 4 },
  ],
  augments: [
    "TFT16_Augment_Zaun_SilcosRevenge",
    "TFT_Augment_InfinityProtection",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_TraitTree",
    "TFT_Augment_ComebackStory",
    "TFT_Augment_BodyguardTraining",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Recurve Bow, Negatron Cloak and Sparring Gloves.",
    "At level 9, add Shyvana and Ziggs  to the board.",
    "Warwick can also hold Gunslinger Emblem, Titan's Resolve and Edge of Night.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-warwick-flex",
  },
} satisfies Comp;
