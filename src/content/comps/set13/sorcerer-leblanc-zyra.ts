import type { Comp } from "../../types";

export default {
  slug: "set13-sorcerer-leblanc-zyra",
  name: "Sorcerer LeBlanc & Zyra",
  set: 13,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for LeBlanc. LeBlanc (Red Buff, Guinsoo's Rageblade and Void Staff) carries alongside Zyra (Spear of Shojin, Jeweled Gauntlet and Striker's Flail). The board runs 6 Sorcerer, 3 Black Rose and 3 Experiment.",
  board: [
    { apiName: "TFT13_Vladimir", hex: 1 },
    { apiName: "TFT13_Swain", hex: 2 },
    { apiName: "TFT13_Elise", hex: 3 },
    { apiName: "TFT13_DrMundo", hex: 4, items: ["TFT_Item_RedBuff", "TFT_Item_FrozenHeart", "TFT_Item_BrambleVest"] },
    { apiName: "TFT13_NunuWillump", hex: 5 },
    { apiName: "TFT13_Nami", hex: 21 },
    { apiName: "TFT13_Zoe", hex: 23 },
    {
      apiName: "TFT13_LeBlanc",
      hex: 25,
      carry: true,
      items: ["TFT_Item_RapidFireCannon", "TFT_Item_GuinsoosRageblade", "TFT_Item_StatikkShiv"],
    },
    {
      apiName: "TFT13_Zyra",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT13_Vladimir", hex: 2 },
    { apiName: "TFT13_Darius", hex: 3 },
    { apiName: "TFT13_Swain", hex: 4 },
    { apiName: "TFT13_Lux", hex: 23 },
    { apiName: "TFT13_Zyra", hex: 24, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT_Augment_QualityOverQuantity",
    "TFT_Augment_GlassCannonII",
    "TFT_Augment_FiresalePlus",
    "TFT_Augment_Moonlight",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Needlessly Large Rod, Sparring Gloves and Tear of the Goddess.",
    "Swain can also hold Lightshield Crest.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-experiment-sorceror",
  },
} satisfies Comp;
