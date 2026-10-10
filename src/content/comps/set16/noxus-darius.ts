import type { Comp } from "../../types";

export default {
  slug: "set16-noxus-darius",
  name: "Noxus Darius",
  set: 16,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Darius. Darius (Sterak's Gage, Titan's Resolve and Adaptive Helm) carries alongside Draven (Kraken's Fury, Guinsoo's Rageblade and Last Whisper). The board runs 5 Noxus, 2 Arcanist and 2 Bruiser.",
  board: [
    {
      apiName: "TFT16_Darius",
      hex: 3,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_TitansResolve", "TFT_Item_AdaptiveHelm"],
    },
    { apiName: "TFT16_Swain", hex: 17, items: ["TFT_Item_RedBuff", "TFT_Item_FrozenHeart"] },
    { apiName: "TFT16_Kobuko", hex: 18 },
    { apiName: "TFT16_Neeko", hex: 19 },
    { apiName: "TFT16_Sion", hex: 20 },
    {
      apiName: "TFT16_Draven",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade", "TFT_Item_LastWhisper"],
    },
    {
      apiName: "TFT16_Leblanc",
      hex: 23,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT16_Illaoi", hex: 2 },
    { apiName: "TFT16_Briar", hex: 3 },
    { apiName: "TFT16_Sion", hex: 4, items: ["TFT_Item_TitansResolve", "TFT_Item_SteraksGage"] },
    { apiName: "TFT16_Leblanc", hex: 24, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT16_Augment_Noxus_BringerOfRuin",
    "TFT6_Augment_GachaAddict",
    "TFT9_Augment_ArmyBuilding",
    "TFT16_Augment_TheDarkinForge",
    "TFT_Augment_HeftyRolls",
    "TFT_Augment_ExclusiveCustomization",
    "TFT_Augment_ItemGargoyleStoneplate",
  ],
  tips: [
    "On carousels and early slams, look for Sterak's Gage, Titan's Resolve, Tear of the Goddess and Recurve Bow.",
    "At level 9, add Renekton , Azir and Fiddlesticks to the board.",
    "Darius can also hold Silvermere Dawn, Juggernaut Emblem and Bruiser Emblem.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-noxus-atakhan",
  },
} satisfies Comp;
