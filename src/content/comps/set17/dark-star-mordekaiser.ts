import type { Comp } from "../../types";

export default {
  slug: "set17-dark-star-mordekaiser",
  name: "Dark Star Mordekaiser",
  set: 17,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Hard",
  summary:
    "A 2-cost reroll comp built around three-star Mordekaiser. Mordekaiser (Jeweled Gauntlet, Edge of Night and Hextech Gunblade) carries alongside Karma (Jeweled Gauntlet, Void Staff and Spear of Shojin). The board runs 6 Dark Star, 3 Shepherd and 2 Vanguard.",
  board: [
    { apiName: "TFT17_IvernMinion", hex: 1 },
    {
      apiName: "TFT17_Mordekaiser",
      hex: 3,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_GuardianAngel", "TFT_Item_HextechGunblade"],
    },
    {
      apiName: "TFT17_Illaoi",
      hex: 4,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT17_Chogath", hex: 5 },
    { apiName: "TFT17_Lissandra", hex: 21 },
    {
      apiName: "TFT17_Karma",
      hex: 23,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_StatikkShiv", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "TFT17_Kaisa", hex: 25 },
    {
      apiName: "TFT17_Jhin",
      hex: 27,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_MadredsBloodrazor", "TFT_Item_Deathblade"],
    },
  ],
  early: [
    { apiName: "TFT17_Illaoi", hex: 2 },
    { apiName: "TFT17_Mordekaiser", hex: 3, carry: true },
    { apiName: "TFT17_Teemo", hex: 23 },
    { apiName: "TFT17_Lissandra", hex: 24 },
  ],
  augments: [
    "TFT17_Augment_MordekaiserCarry",
    "TFT_Augment_BoxingLessons",
    "TFT9_Augment_Commander_Ascension",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_FindYourCenter",
    "TFT7_Augment_UrfsGrabBag2",
    "TFT16_Augment_UltraRapidFire",
  ],
  tips: [
    "On carousels and early slams, look for Jeweled Gauntlet, Edge of Night, Needlessly Large Rod and Giant's Belt.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-heat-death-mordekaiser",
  },
} satisfies Comp;
