import type { Comp } from "../../types";

export default {
  slug: "set14-boombot-urgot-garen",
  name: "BoomBot Urgot & Garen",
  set: 14,
  tier: "A",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Urgot. Urgot (Kraken's Fury, Guinsoo's Rageblade and Deathblade) carries alongside Garen (Sterak's Gage, Infinity Edge and Bloodthirster). The board runs 6 Vanguard, 3 Anima Squad and 2 BoomBot.",
  board: [
    { apiName: "TFT14_Sylas", hex: 0 },
    { apiName: "TFT14_Vi", hex: 1 },
    {
      apiName: "TFT14_Garen",
      hex: 2,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_InfinityEdge", "TFT_Item_Bloodthirster"],
    },
    {
      apiName: "TFT14_Leona",
      hex: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT14_Rhaast", hex: 4 },
    { apiName: "TFT14_Skarner", hex: 5 },
    { apiName: "TFT14_Jarvan", hex: 6 },
    {
      apiName: "TFT14_Urgot",
      hex: 21,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade", "TFT_Item_Deathblade"],
    },
    { apiName: "TFT14_Aurora", hex: 24 },
  ],
  early: [
    { apiName: "TFT14_Vi", hex: 2 },
    { apiName: "TFT14_Skarner", hex: 3 },
    { apiName: "TFT14_Kindred", hex: 23 },
    { apiName: "TFT14_KogMaw", hex: 24, items: ["TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "TFT_Augment_UpwardMobility",
    "TFT9_Augment_FinalReserves",
    "TFT6_Augment_MaxLevel10",
    "TFT7_Augment_ClutteredMind",
    "TFT_Augment_FiresalePlus",
    "TFT14_Augment_VanguardCirclet",
    "TFT_Augment_ForwardThinking",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Negatron Cloak, Sparring Gloves and B.F. Sword.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-vanguard-urgot",
  },
} satisfies Comp;
