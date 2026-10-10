import type { Comp } from "../../types";

export default {
  slug: "set13-visionary-morgana",
  name: "Visionary Morgana",
  set: 13,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Morgana. Morgana (Blue Buff, Red Buff and Void Staff) carries alongside Vex (Spear of Shojin, Jeweled Gauntlet and Striker's Flail). The board runs 6 Visionary, 3 Rebel and 2 Bruiser.",
  board: [
    {
      apiName: "TFT13_Rell",
      hex: 3,
      star: 3,
      items: ["TFT_Item_Redemption", "TFT_Item_GargoyleStoneplate", "TFT_Item_Crownguard"],
    },
    { apiName: "TFT13_NunuWillump", hex: 15 },
    { apiName: "TFT13_Illaoi", hex: 17 },
    { apiName: "TFT13_Sett", hex: 19 },
    { apiName: "TFT13_Malzahar", hex: 21 },
    {
      apiName: "TFT13_Vex",
      hex: 23,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT13_Heimerdinger", hex: 25 },
    {
      apiName: "TFT13_Morgana",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_RapidFireCannon", "TFT_Item_StatikkShiv"],
    },
  ],
  early: [
    { apiName: "TFT13_Rell", hex: 2 },
    { apiName: "TFT13_Singed", hex: 3 },
    { apiName: "TFT13_Morgana", hex: 23, carry: true },
    { apiName: "TFT13_Vex", hex: 24, carry: true },
  ],
  augments: [
    "TFT_Augment_CookingPot",
    "TFT9_Augment_MissedConnections",
    "TFT13_Augment_VisionaryCrown",
    "TFT13_Augment_VisionaryCrest",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Needlessly Large Rod, Sparring Gloves and Giant's Belt.",
    "Favor combat, economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-visionary-vex",
  },
} satisfies Comp;
