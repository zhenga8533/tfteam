import type { Comp } from "../../types";

export default {
  slug: "set16-targon-aphelios",
  name: "Targon Aphelios",
  set: 16,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Aphelios. Aphelios (Kraken's Fury, Infinity Edge and Guinsoo's Rageblade) carries alongside Bard  (Archangel's Staff, Spear of Shojin and Void Staff). The board runs 1 Targon, 2 Arcanist and 2 Defender.",
  board: [
    { apiName: "TFT16_Loris", hex: 1 },
    { apiName: "TFT16_Swain", hex: 2 },
    { apiName: "TFT16_Vi", hex: 3, star: 3 },
    {
      apiName: "TFT16_Neeko",
      hex: 4,
      star: 3,
      items: ["TFT_Item_Redemption", "TFT_Item_IonicSpark", "TFT_Item_RedBuff"],
    },
    {
      apiName: "TFT16_Nidalee",
      hex: 6,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet", "TFT_Item_HextechGunblade"],
    },
    {
      apiName: "TFT16_Bard",
      hex: 25,
      star: 3,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv"],
    },
    {
      apiName: "TFT16_Aphelios",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_InfinityEdge", "TFT_Item_GuinsoosRageblade"],
    },
  ],
  early: [
    { apiName: "TFT16_Vi", hex: 2 },
    { apiName: "TFT16_Neeko", hex: 3 },
    {
      apiName: "TFT16_Aphelios",
      hex: 23,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade"],
    },
    { apiName: "TFT16_Bard", hex: 24, carry: true },
  ],
  augments: [
    "TFT_Augment_TwoMuchValue",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT6_Augment_GachaAddict",
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_HeavyIsTheCrown",
    "TFT6_Augment_CalculatedLoss",
    "TFT_Augment_HomeCooking",
    "TFT_Augment_HeftyRolls",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Kraken's Fury, B.F. Sword and Sparring Gloves.",
    "At level 8, add Skarner , Sett and Shyvana to the board.",
    "At level 9, add Taric to the board.",
    "Aphelios can also hold Gold Collector and Flickerblades.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-bard-aphelios",
  },
} satisfies Comp;
