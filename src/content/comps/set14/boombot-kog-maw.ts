import type { Comp } from "../../types";

export default {
  slug: "set14-boombot-kog-maw",
  name: "BoomBot Kog'Maw",
  set: 14,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Kog'Maw. Kog'Maw (Guinsoo's Rageblade and 2× Kraken's Fury) carries. The board runs 6 Vanguard, 2 BoomBot and 2 Rapidfire.",
  board: [
    { apiName: "TFT14_Jarvan", hex: 0 },
    {
      apiName: "TFT14_Vi",
      hex: 1,
      star: 3,
      items: ["TFT_Item_BrambleVest", "TFT_Item_WarmogsArmor", "TFT_Item_SteraksGage"],
    },
    {
      apiName: "TFT14_Skarner",
      hex: 2,
      star: 3,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_NightHarvester", "TFT_Item_RedBuff"],
    },
    { apiName: "TFT14_Sylas", hex: 3, star: 3 },
    { apiName: "TFT14_Leona", hex: 4 },
    { apiName: "TFT14_Rhaast", hex: 5 },
    {
      apiName: "TFT14_KogMaw",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane", "TFT_Item_RunaansHurricane"],
    },
    { apiName: "TFT14_Kindred", hex: 22 },
  ],
  early: [
    { apiName: "TFT14_Vi", hex: 2 },
    { apiName: "TFT14_Skarner", hex: 3 },
    { apiName: "TFT14_Kindred", hex: 23 },
    {
      apiName: "TFT14_KogMaw",
      hex: 24,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"],
    },
  ],
  augments: [
    "TFT7_Augment_PandorasBench",
    "TFT11_Augment_Buildabud",
    "TFT_Augment_InvestmentStrategy2",
    "TFT_Augment_Overheal",
    "TFT6_Augment_GachaAddict",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Kraken's Fury, B.F. Sword and Giant's Belt.",
    "Vi can also hold Unending Despair.",
    "Kog'Maw can also hold Flickerblades, Gold Collector and Sniper's Focus.",
    "Favor economy, combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-ok-boomers",
  },
} satisfies Comp;
