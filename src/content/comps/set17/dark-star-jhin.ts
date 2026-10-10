import type { Comp } from "../../types";

export default {
  slug: "set17-dark-star-jhin",
  name: "Dark Star Jhin",
  set: 17,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Jhin. Jhin (Last Whisper, Deathblade and Infinity Edge) carries alongside Kai'Sa (Giant Slayer, Spear of Shojin and Infinity Edge). The board runs 6 Dark Star, 3 Conduit and 2 Brawler.",
  board: [
    { apiName: "TFT17_TahmKench", hex: 0 },
    { apiName: "TFT17_Chogath", hex: 1 },
    {
      apiName: "TFT17_Morgana",
      hex: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_NightHarvester", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT17_Mordekaiser", hex: 5 },
    { apiName: "TFT17_Galio", hex: 6 },
    {
      apiName: "TFT17_Bard",
      hex: 21,
      carry: true,
      items: ["TFT17_Item_DarkStarEmblemItem", "TFT_Item_RabadonsDeathcap", "TFT_Item_StatikkShiv"],
    },
    { apiName: "TFT17_Karma", hex: 23 },
    {
      apiName: "TFT17_Kaisa",
      hex: 26,
      carry: true,
      items: ["TFT_Item_MadredsBloodrazor", "TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge"],
    },
    {
      apiName: "TFT17_Jhin",
      hex: 27,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_Deathblade", "TFT_Item_InfinityEdge"],
    },
  ],
  early: [
    { apiName: "TFT17_Chogath", hex: 2 },
    { apiName: "TFT17_Briar", hex: 3 },
    { apiName: "TFT17_RekSai", hex: 4 },
    { apiName: "TFT17_Kaisa", hex: 24, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"] },
  ],
  augments: [
    "TFT_Augment_TraitTree",
    "TFT_Augment_MayTheFoursBeWithYou",
    "TFT_Augment_HoldTheLine",
    "TFT_Augment_UrfsGambit",
    "TFT6_Augment_MakeshiftArmor1",
    "TFT_Augment_Lineup",
    "TFT_Augment_BoxingLessons",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Tear of the Goddess and Recurve Bow.",
    "At level 8, add Meepsie, Aurelion Sol and Riven to the board.",
    "At level 9, add Illaoi to the board.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-dark-star",
  },
} satisfies Comp;
