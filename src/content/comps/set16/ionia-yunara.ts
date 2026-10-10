import type { Comp } from "../../types";

export default {
  slug: "set16-ionia-yunara",
  name: "Ionia Yunara",
  set: 16,
  tier: "S",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Yunara. Yunara (Guinsoo's Rageblade, Striker's Flail and Infinity Edge) carries alongside Ryze  (Morellonomicon, Rabadon's Deathcap and Spear of Shojin). The board runs 1 Targon, 3 Freljord and 3 Ionia.",
  board: [
    { apiName: "TFT16_Taric", hex: 1 },
    {
      apiName: "TFT16_Wukong",
      hex: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption"],
    },
    { apiName: "TFT16_Sejuani", hex: 4 },
    { apiName: "TFT16_Kobuko", hex: 9 },
    { apiName: "TFT16_Kennen", hex: 11 },
    { apiName: "TFT16_Ashe", hex: 21 },
    {
      apiName: "TFT16_Ryze",
      hex: 23,
      carry: true,
      items: ["TFT_Item_Morellonomicon", "TFT_Item_RabadonsDeathcap", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "TFT16_Lissandra", hex: 25, items: ["TFT_Item_StatikkShiv"] },
    {
      apiName: "TFT16_Yunara",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_PowerGauntlet", "TFT_Item_InfinityEdge"],
    },
  ],
  early: [
    { apiName: "TFT16_Shen", hex: 2 },
    { apiName: "TFT16_Illaoi", hex: 3 },
    { apiName: "TFT16_XinZhao", hex: 4 },
    { apiName: "TFT16_Jhin", hex: 24, items: ["TFT_Item_InfinityEdge", "TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "TFT_Augment_SpeedyDoubleKill",
    "TFT11_Augment_Reinfourcement",
    "TFT_Augment_FiresalePlus",
    "TFT9_Augment_LearningFromExperience2",
    "TFT_Augment_BronzeForLifeI",
    "TFT_Augment_BronzeForLife2",
    "TFT9_Augment_BuildingACollectionPlusPlus",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Infinity Edge, Giant's Belt and Recurve Bow.",
    "At level 9, add Fiddlesticks and Kindred to the board.",
    "Yunara can also hold Gold Collector and Flickerblades.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-frel-unara",
  },
} satisfies Comp;
