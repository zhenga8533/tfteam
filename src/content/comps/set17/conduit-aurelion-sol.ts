import type { Comp } from "../../types";

export default {
  slug: "set17-conduit-aurelion-sol",
  name: "Conduit Aurelion Sol",
  set: 17,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Aurelion Sol. Aurelion Sol (Rabadon's Deathcap, Void Staff and Jeweled Gauntlet) carries. The board runs 3 Conduit, 2 Dark Star and 2 Vanguard.",
  board: [
    {
      apiName: "TFT17_Galio",
      hex: 4,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_GargoyleStoneplate", "TFT_Item_NightHarvester"],
    },
    { apiName: "TFT17_Morgana", hex: 17, items: ["TFT_Item_WarmogsArmor", "TFT_Item_Redemption"] },
    { apiName: "TFT17_Rhaast", hex: 22 },
    { apiName: "TFT17_Mordekaiser", hex: 23 },
    { apiName: "TFT17_Blitzcrank", hex: 24 },
    { apiName: "TFT17_Karma", hex: 25, items: ["TFT_Item_Morellonomicon"] },
    {
      apiName: "TFT17_AurelionSol",
      hex: 27,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_StatikkShiv", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT17_Briar", hex: 3 },
    { apiName: "TFT17_Aurora", hex: 23 },
    { apiName: "TFT17_Jinx", hex: 24 },
  ],
  augments: [
    "TFT11_Augment_Reinfourcement",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT_Augment_TwinGuardians",
    "TFT_Augment_ItemGargoyleStoneplate",
    "TFT_Augment_Expedition",
    "TFT_Augment_ForgedInStrength",
    "TFT7_Augment_LivingForge",
    "TFT9_Augment_Commander_Ascension",
  ],
  tips: [
    "On carousels and early slams, look for Gargoyle Stoneplate, Rabadon's Deathcap, Void Staff and Chain Vest.",
    "At level 9, add Urgot, Tahm Kench and Fiora to the board.",
    "Aurelion Sol can also hold Ahri's Aura.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-mecha-sol",
  },
} satisfies Comp;
