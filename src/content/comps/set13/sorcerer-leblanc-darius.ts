import type { Comp } from "../../types";

export default {
  slug: "set13-sorcerer-leblanc-darius",
  name: "Sorcerer LeBlanc & Darius",
  set: 13,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star LeBlanc. LeBlanc (Void Staff and Red Buff) carries alongside Darius (Gargoyle Stoneplate, Sterak's Gage and Bloodthirster). The board runs 6 Sorcerer, 3 Black Rose and 2 Conqueror.",
  board: [
    {
      apiName: "TFT13_Darius",
      hex: 3,
      star: 3,
      carry: true,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_SteraksGage", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT13_Zoe", hex: 21 },
    { apiName: "TFT13_Nami", hex: 22 },
    { apiName: "TFT13_LeBlanc", hex: 23, carry: true, items: ["TFT_Item_StatikkShiv", "TFT_Item_RapidFireCannon"] },
    { apiName: "TFT13_Swain", hex: 24 },
    {
      apiName: "TFT13_Zyra",
      hex: 25,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT13_Elise", hex: 26 },
    { apiName: "TFT13_Vladimir", hex: 27 },
  ],
  early: [
    { apiName: "TFT13_Vladimir", hex: 2 },
    { apiName: "TFT13_Darius", hex: 3, carry: true, items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT13_Rell", hex: 4 },
    { apiName: "TFT13_Zyra", hex: 24, carry: true, items: ["TFT_Item_SpearOfShojin"] },
  ],
  augments: [
    "TFT_Augment_WorthTheWaitGold",
    "TFT13_Augment_SorcererCrest",
    "TFT13_Augment_SorcererCrown",
    "TFT9_Augment_PumpingUp2",
    "TFT11_Augment_RadiantRefactor",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Gargoyle Stoneplate, Tear of the Goddess and Needlessly Large Rod.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-sorceror-darius",
  },
} satisfies Comp;
