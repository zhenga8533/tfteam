import type { Comp } from "../../types";

export default {
  slug: "set15-juggernaut-lee-sin",
  name: "Juggernaut Lee Sin",
  set: 15,
  tier: "S",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Lee Sin. Lee Sin (Juggernaut Emblem, Hand Of Justice and Infinity Edge) carries alongside Twisted Fate (Giant Slayer, Hextech Gunblade and Guinsoo's Rageblade). The board runs 6 Juggernaut, 2 Luchador and 2 Soul Fighter.",
  board: [
    { apiName: "TFT15_DrMundo", hex: 0 },
    { apiName: "TFT15_Naafiri", hex: 1 },
    { apiName: "TFT15_Braum", hex: 2 },
    { apiName: "TFT15_Vi", hex: 3 },
    { apiName: "TFT15_Udyr", hex: 4 },
    { apiName: "TFT15_Sett", hex: 5, items: ["TFT_Item_WarmogsArmor", "TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"] },
    {
      apiName: "TFT15_LeeSin",
      hex: 6,
      carry: true,
      items: ["TFT15_Item_JuggernautEmblemItem", "TFT_Item_UnstableConcoction", "TFT_Item_InfinityEdge"],
    },
    {
      apiName: "TFT15_Zyra",
      hex: 24,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet"],
    },
    {
      apiName: "TFT15_TwistedFate",
      hex: 27,
      carry: true,
      items: ["TFT_Item_MadredsBloodrazor", "TFT_Item_HextechGunblade", "TFT_Item_GuinsoosRageblade"],
    },
  ],
  early: [
    { apiName: "TFT15_DrMundo", hex: 2, items: ["TFT_Item_WarmogsArmor"] },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Jhin", hex: 23 },
    { apiName: "TFT15_Gnar", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_MadredsBloodrazor"] },
  ],
  augments: [
    "TFT_Augment_AuraFarming",
    "TFT6_Augment_CalculatedLoss",
    "TFT6_Augment_MaxLevel10",
    "TFT_Augment_UpwardMobility",
    "TFT_Augment_InvestedPlus",
    "TFT_Augment_ForwardThinking",
    "TFT7_Augment_LategameSpecialist",
    "TFT15_Augment_Juggernaut_Indomitable",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, B.F. Sword, Tear of the Goddess and Giant's Belt.",
    "Lee Sin can also hold Manazane, Spectral Cutlass and Prowler's Claw.",
    "Twisted Fate can also hold Flickerblades, Wit's End and Zhonya's Paradox.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-fateedge-of-night-unlimited-blade-works",
  },
} satisfies Comp;
