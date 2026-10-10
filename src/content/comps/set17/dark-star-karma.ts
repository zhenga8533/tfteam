import type { Comp } from "../../types";

export default {
  slug: "set17-dark-star-karma",
  name: "Dark Star Karma",
  set: 17,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Karma. Karma (Void Staff, Spear of Shojin and Morellonomicon) carries alongside Nami (2× Nashor's Tooth and Jeweled Gauntlet). The board runs 3 Shepherd, 2 Dark Star and 2 Replicator.",
  board: [
    { apiName: "TFT17_Illaoi", hex: 3 },
    { apiName: "TFT17_Nunu", hex: 4, items: ["TFT_Item_FrozenHeart", "TFT_Item_Crownguard", "TFT_Item_BrambleVest"] },
    { apiName: "TFT17_IvernMinion", hex: 5 },
    { apiName: "TFT17_Lissandra", hex: 21 },
    {
      apiName: "TFT17_Karma",
      hex: 24,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_SpearOfShojin", "TFT_Item_Morellonomicon"],
    },
    {
      apiName: "TFT17_Nami",
      hex: 27,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan"],
    },
  ],
  early: [
    { apiName: "TFT17_Mordekaiser", hex: 2 },
    { apiName: "TFT17_Leona", hex: 3 },
    {
      apiName: "TFT17_Zoe",
      hex: 23,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT17_Teemo", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_TradeSector2",
    "TFT11_Augment_Reinfourcement",
    "TFT_Augment_TheBaronsLair",
    "TFT_Augment_SmallGrabBag",
    "TFT_Augment_ForgeRod",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_HoldTheLine",
    "TFT_Augment_ExclusiveCustomization",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Needlessly Large Rod, Sparring Gloves and Giant's Belt.",
    "At level 8, add Morgana to the board.",
    "At level 9, add Zoe, Viktor and Bard to the board.",
    "Nami can also hold Spear of Shojin, Jeweled Gauntlet and Giant Slayer.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-karnami-flex",
  },
} satisfies Comp;
