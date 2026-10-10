import type { Comp } from "../../types";

export default {
  slug: "set13-rebel-jinx",
  name: "Rebel Jinx",
  set: 13,
  tier: "S",
  playstyle: "Fast 9",
  difficulty: "Medium",
  summary:
    "A level 9 comp that caps its board around Jinx. Jinx (Spear of Shojin, Infinity Edge and Giant Slayer) carries alongside Zoe (Guinsoo's Rageblade, Jeweled Gauntlet and Striker's Flail). The board runs 7 Rebel, 2 Ambusher and 2 Bruiser.",
  board: [
    { apiName: "TFT13_Irelia", hex: 0 },
    { apiName: "TFT13_Illaoi", hex: 2, items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_Redemption"] },
    { apiName: "TFT13_Ekko", hex: 3 },
    { apiName: "TFT13_Elise", hex: 4 },
    { apiName: "TFT13_Sett", hex: 5 },
    { apiName: "TFT13_LeBlanc", hex: 21, items: ["TFT13_Item_RebelEmblemItem", "TFT_Item_StatikkShiv"] },
    {
      apiName: "TFT13_Zoe",
      hex: 23,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT13_Ezreal", hex: 25 },
    {
      apiName: "TFT13_Jinx",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT13_Rell", hex: 2 },
    { apiName: "TFT13_Irelia", hex: 3, items: ["TFT_Item_WarmogsArmor"] },
    { apiName: "TFT13_Akali", hex: 4 },
    {
      apiName: "TFT13_Vex",
      hex: 24,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet"],
    },
  ],
  augments: [
    "TFT6_Augment_MaxLevel10",
    "TFT_Augment_UpwardMobility",
    "TFT13_Augment_RebelCrest",
    "TFT13_Augment_RebelCrown",
    "TFT_Augment_ClimbTheLadder2",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Needlessly Large Rod, Giant's Belt and Sparring Gloves.",
    "Illaoi can also hold Lightshield Crest.",
    "Zoe can also hold Sniper's Focus and Deathfire Grasp.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-zaun-rebellion",
  },
} satisfies Comp;
