import type { Comp } from "../../types";

export default {
  slug: "set17-space-groove-samira",
  name: "Space Groove Samira",
  set: 17,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Samira. Samira (Thief's Gloves) carries. The board runs 5 Space Groove, 2 Sniper and 2 Vanguard.",
  board: [
    { apiName: "TFT17_Blitzcrank", hex: 14 },
    { apiName: "TFT17_Nasus", hex: 15 },
    { apiName: "TFT17_Ornn", hex: 18 },
    { apiName: "TFT17_Jhin", hex: 21 },
    { apiName: "TFT17_Nami", hex: 25, items: ["TFT_Item_Morellonomicon"] },
    { apiName: "TFT17_Samira", hex: 26, carry: true, items: ["TFT_Item_ThiefsGloves"] },
  ],
  early: [
    { apiName: "TFT17_Pantheon", hex: 2 },
    { apiName: "TFT17_RekSai", hex: 3 },
    { apiName: "TFT17_Samira", hex: 23, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_Deathblade"] },
    { apiName: "TFT17_Ezreal", hex: 24 },
  ],
  augments: [
    "TFT10_Augment_HeroicGrabBag",
    "TFT6_Augment_TradeSector",
    "TFT6_Augment_CalculatedLoss",
    "TFT_Augment_ExclusiveCustomization",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT_Augment_LegionOfThrees",
    "TFT_Augment_TwoTanky",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, B.F. Sword, Sparring Gloves and Giant's Belt.",
    "At level 9, add Shen to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-samira-knock-up-copy",
  },
} satisfies Comp;
