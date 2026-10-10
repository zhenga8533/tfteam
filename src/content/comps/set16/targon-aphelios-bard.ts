import type { Comp } from "../../types";

export default {
  slug: "set16-targon-aphelios-bard",
  name: "Targon Aphelios & Bard",
  set: 16,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Aphelios. Aphelios (Kraken's Fury, Guinsoo's Rageblade and Infinity Edge) carries alongside Bard  (Jeweled Gauntlet, Nashor's Tooth and Archangel's Staff). The board runs 6 Bruiser and 1 Targon.",
  board: [
    { apiName: "TFT16_Kobuko", hex: 1 },
    { apiName: "TFT16_Wukong", hex: 2 },
    { apiName: "TFT16_Illaoi", hex: 3, star: 3 },
    { apiName: "TFT16_Shen", hex: 4, star: 3 },
    {
      apiName: "TFT16_Sion",
      hex: 5,
      star: 3,
      items: ["TFT_Item_DragonsClaw", "TFT_Item_RedBuff", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT16_Volibear", hex: 20, items: ["TFT_Item_SteraksGage", "TFT_Item_Bloodthirster"] },
    {
      apiName: "TFT16_Bard",
      hex: 25,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan", "TFT_Item_ArchangelsStaff"],
    },
    {
      apiName: "TFT16_Aphelios",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade", "TFT_Item_InfinityEdge"],
    },
  ],
  early: [
    { apiName: "TFT16_Sion", hex: 2, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT16_Shen", hex: 3 },
    {
      apiName: "TFT16_Aphelios",
      hex: 23,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"],
    },
    { apiName: "TFT16_Bard", hex: 24, carry: true },
  ],
  augments: [
    "TFT_Augment_PatienceIsAVirtue",
    "TFT6_Augment_GachaAddict",
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_ChaosEvolution",
    "TFT11_Augment_Epoch",
    "TFT_Augment_TwoMuchValue",
    "TFT16_Augment_Weightlifting",
    "TFT_Augment_HeavyIsTheCrown",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Recurve Bow, B.F. Sword and Sparring Gloves.",
    "At level 9, add Taric, Fiddlesticks, Lucian & Senna and Sett to the board.",
    "Sion can also hold The Indomitable and Talisman Of Ascension.",
    "Aphelios can also hold Flickerblades.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-bard-sion",
  },
} satisfies Comp;
