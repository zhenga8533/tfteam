import type { Comp } from "../../types";

export default {
  slug: "set17-conduit-viktor-aurora",
  name: "Conduit Viktor & Aurora",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Hard",
  summary:
    "A 3-cost reroll comp built around three-star Viktor. Viktor (Jeweled Gauntlet and Rabadon's Deathcap) carries alongside Aurora (Spear of Shojin, Void Staff and Morellonomicon). The board runs 3 Voyager, 3 Shepherd and 2 Conduit.",
  board: [
    {
      apiName: "TFT17_Illaoi",
      hex: 2,
      star: 3,
      items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT17_Rhaast", hex: 3 },
    { apiName: "TFT17_IvernMinion", hex: 5 },
    { apiName: "TFT17_Mordekaiser", hex: 6 },
    {
      apiName: "TFT17_Aurora",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"],
    },
    {
      apiName: "TFT17_Viktor",
      hex: 23,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_RabadonsDeathcap"],
    },
    { apiName: "TFT17_Sona", hex: 25 },
    { apiName: "TFT17_Karma", hex: 27 },
  ],
  early: [
    { apiName: "TFT17_Illaoi", hex: 2 },
    { apiName: "TFT17_Briar", hex: 3 },
    { apiName: "TFT17_Jinx", hex: 24 },
  ],
  augments: [
    "TFT10_Augment_HeroicGrabBag",
    "TFT9_Augment_ArmyBuilding",
    "TFT6_Augment_TradeSector2",
    "TFT_Augment_MagicRoll",
    "TFT6_Augment_CalculatedLoss",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT9_Augment_JeweledLotus",
    "TFT6_Augment_GachaAddict",
  ],
  tips: [
    "On carousels and early slams, look for Jeweled Gauntlet, Needlessly Large Rod, Tear of the Goddess and Giant's Belt.",
    "At level 8, add Morgana to the board.",
    "At level 9, add Pyke to the board.",
    "Viktor can also hold Voyager Emblem.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-aurora-viktor",
  },
} satisfies Comp;
