import type { Comp } from "../../types";

export default {
  slug: "set13-rebel-irelia",
  name: "Rebel Irelia",
  set: 13,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Irelia. Irelia (Bloodthirster, Infinity Edge and Hand Of Justice) carries alongside Zoe (Guinsoo's Rageblade, Jeweled Gauntlet and Striker's Flail). The board runs 7 Rebel, 2 Ambusher and 2 Sentinel.",
  board: [
    { apiName: "TFT13_Ekko", hex: 2 },
    { apiName: "TFT13_Akali", hex: 3 },
    { apiName: "TFT13_Sett", hex: 4 },
    {
      apiName: "TFT13_Illaoi",
      hex: 5,
      items: ["TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet", "TFT_Item_Redemption"],
    },
    {
      apiName: "TFT13_Irelia",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT13_Ezreal", hex: 21 },
    {
      apiName: "TFT13_Zoe",
      hex: 25,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT13_Jinx", hex: 27, items: ["TFT_Item_SpearOfShojin"] },
  ],
  early: [
    { apiName: "TFT13_Akali", hex: 2 },
    {
      apiName: "TFT13_Irelia",
      hex: 3,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_InfinityEdge"],
    },
    { apiName: "TFT13_Singed", hex: 4 },
    { apiName: "TFT13_Vex", hex: 24 },
  ],
  augments: [
    "TFT13_Augment_IreliaCarry",
    "TFT13_Augment_RebelCrown",
    "TFT13_Augment_RebelCrest",
    "TFT13_Augment_Rebel",
    "TFT_Augment_FindYourCenter",
    "TFT_Augment_ShojinSpirit",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Infinity Edge, Titan's Resolve and Sparring Gloves.",
    "Irelia can also hold Prowler's Claw and Spectral Cutlass.",
    "Favor combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-ireliaing",
  },
} satisfies Comp;
