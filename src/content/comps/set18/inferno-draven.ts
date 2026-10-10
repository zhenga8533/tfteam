import type { Comp } from "../../types";

export default {
  slug: "set18-inferno-draven",
  name: "Inferno Draven",
  set: 18,
  tier: "A",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Draven. Draven (Guinsoo's Rageblade, Last Whisper and Kraken's Fury) carries alongside Elder Dragon (Infinity Edge, Deathblade and Striker's Flail). The board runs 2 Inferno, 2 Juggernaut and 2 Vanguard.",
  board: [
    { apiName: "DA_Taric18", hex: 1 },
    { apiName: "DA_18_Kennen", hex: 2, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "DA_Sentinel18", hex: 3, items: ["TFT_Item_FrozenHeart"] },
    { apiName: "DA_Amumu18", hex: 4 },
    {
      apiName: "DA_18_Maokai",
      hex: 5,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_Crownguard", "TFT_Item_SpectralGauntlet"],
    },
    {
      apiName: "DA_18_ElderDragon",
      hex: 20,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_Deathblade", "TFT_Item_PowerGauntlet"],
    },
    {
      apiName: "DA_18_Ivern",
      hex: 21,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_SpearOfShojin", "TFT_Item_AdaptiveHelm"],
    },
    {
      apiName: "DA_Draven18",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_LastWhisper", "TFT_Item_RunaansHurricane"],
    },
  ],
  early: [
    { apiName: "DA_Scuttlecrab18", hex: 2 },
    { apiName: "DA_18_Yorick", hex: 3 },
    { apiName: "DA_18_Sentry", hex: 23 },
    { apiName: "DA_Cinderling18", hex: 24 },
  ],
  augments: [
    "DA_BirthdayReunion",
    "DA_BirthdayPresent",
    "DA_LevelUp",
    "DA_LuxurySubscription",
    "DA_LateGameSpecialist",
    "DA_Swordsmith",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, B.F. Sword, Sparring Gloves and Giant's Belt.",
    "At level 9, add Morgana, Alune, Ashe and Lux to the board.",
    "Elder Dragon can also hold Gold Collector.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-dragon-princess",
  },
} satisfies Comp;
