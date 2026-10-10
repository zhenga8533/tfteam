import type { Comp } from "../../types";

export default {
  slug: "set18-rival-rengar",
  name: "Rival Rengar",
  set: 18,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Rengar. Rengar (Edge of Night, Titan's Resolve and Guinsoo's Rageblade) carries alongside Mama Beak (Last Whisper, Kraken's Fury and Guinsoo's Rageblade). The board runs 4 Vanguard, 3 Riftbeast and 2 Lunar.",
  board: [
    {
      apiName: "DA_18_Rengar",
      hex: 0,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_TitansResolve", "TFT_Item_GuinsoosRageblade"],
    },
    {
      apiName: "DA_18_Hecarim",
      hex: 1,
      star: 3,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_RedBuff", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "DA_Sentinel18", hex: 6 },
    { apiName: "DA_18_Diana", hex: 7, star: 3, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "DA_Brambleback18", hex: 8 },
    { apiName: "DA_Taric18", hex: 13 },
    {
      apiName: "DA_CrimsonRaptor18",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade"],
    },
    { apiName: "DA_18_Aphelios", hex: 22 },
  ],
  early: [
    { apiName: "DA_18_Rengar", hex: 1, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_GuardianAngel"] },
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Elise", hex: 4 },
  ],
  augments: ["DA_ChampDelivery", "DA_SpeedyDoubleKill", "DA_BoosterPack", "DA_LatentForge", "DA_LegionOfThrees"],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Edge of Night, Titan's Resolve and Recurve Bow.",
    "Rengar can also hold Mittens, Rapid Firecannon and Hellfire Hatchet.",
    "Rengar can also hold Flickerblades, Infinity Force and Titanic Hydra.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-rengar-rr",
  },
} satisfies Comp;
