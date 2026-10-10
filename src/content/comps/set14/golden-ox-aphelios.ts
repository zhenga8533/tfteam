import type { Comp } from "../../types";

export default {
  slug: "set14-golden-ox-aphelios",
  name: "Golden Ox Aphelios",
  set: 14,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Aphelios. Aphelios (Guinsoo's Rageblade, Hextech Gunblade and Kraken's Fury) carries alongside Xayah (Infinity Edge, Last Whisper and Striker's Flail). The board runs 6 Vanguard, 3 Anima Squad and 2 Golden Ox.",
  board: [
    { apiName: "TFT14_Braum", hex: 0 },
    { apiName: "TFT14_Garen", hex: 1, items: ["TFT14_Item_GuardianEmblemItem", "TFT_Item_SteraksGage"] },
    { apiName: "TFT14_Sylas", hex: 2 },
    { apiName: "TFT14_Jarvan", hex: 3 },
    { apiName: "TFT14_Leona", hex: 4, items: ["TFT_Item_WarmogsArmor", "TFT_Item_RedBuff", "TFT_Item_BrambleVest"] },
    { apiName: "TFT14_Rhaast", hex: 25 },
    {
      apiName: "TFT14_Xayah",
      hex: 26,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper", "TFT_Item_PowerGauntlet"],
    },
    {
      apiName: "TFT14_Aphelios",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade", "TFT_Item_RunaansHurricane"],
    },
  ],
  early: [
    { apiName: "TFT14_Vi", hex: 2 },
    { apiName: "TFT14_Sylas", hex: 3 },
    { apiName: "TFT14_Kindred", hex: 23 },
    { apiName: "TFT14_Jhin", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"] },
  ],
  augments: [
    "TFT14_Augment_Marksman_Vertical",
    "TFT9_Augment_PumpingUp",
    "TFT_Augment_Overheal",
    "TFT14_Augment_VanguardCrown",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Recurve Bow, Negatron Cloak and Giant's Belt.",
    "Xayah can also hold Gold Collector, Manazane and Sniper's Focus.",
    "Aphelios can also hold Flickerblades and Radiant Guinsoo's Rageblade.",
    "Favor item, combat and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-6-vanguard-marksman",
  },
} satisfies Comp;
