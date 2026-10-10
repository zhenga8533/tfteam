import type { Comp } from "../../types";

export default {
  slug: "set18-elderwood-draven",
  name: "Elderwood Draven",
  set: 18,
  tier: "A",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Draven. Draven (Kraken's Fury, Guinsoo's Rageblade and Deathblade) carries alongside Ezreal (Spear of Shojin, Last Whisper and Deathblade). The board runs 3 Elderwood, 2 Brawler and 2 Executioner.",
  board: [
    { apiName: "DA_18_Alistar", hex: 1 },
    { apiName: "DA_Amumu18", hex: 2 },
    { apiName: "DA_18_Kennen", hex: 3, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "DA_Taric18", hex: 4 },
    {
      apiName: "DA_18_Maokai",
      hex: 5,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_BrambleVest"],
    },
    { apiName: "DA_18_GnarSmall", hex: 10, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "DA_18_Ivern", hex: 21 },
    {
      apiName: "DA_18_Ezreal",
      hex: 26,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_LastWhisper", "TFT_Item_Deathblade"],
    },
    {
      apiName: "DA_Draven18",
      hex: 27,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade", "TFT_Item_Deathblade"],
    },
  ],
  early: [
    {
      apiName: "DA_18_Rengar",
      hex: 1,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_LastWhisper", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "DA_18_Alistar", hex: 2 },
    { apiName: "DA_18_RekSai", hex: 3 },
    { apiName: "DA_18_Warwick", hex: 4 },
  ],
  augments: [
    "DA_LevelUp",
    "DA_LateGameSpecialist",
    "DA_LuxurySubscription",
    "DA_ExplosiveGrowthPlus",
    "DA_BirthdayPresent",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Last Whisper, Kraken's Fury and Giant's Belt.",
    "At level 9, add Hecarim, Sentinel and Lux to the board.",
    "Draven can also hold Gold Collector, Flickerblades and Fishbones.",
    "Maokai can also hold Mogul's Mail, Void Gauntlet and Lightshield Crest.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-elderwood-executioners-copy",
  },
} satisfies Comp;
