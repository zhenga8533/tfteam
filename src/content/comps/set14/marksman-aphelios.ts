import type { Comp } from "../../types";

export default {
  slug: "set14-marksman-aphelios",
  name: "Marksman Aphelios",
  set: 14,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Aphelios. Aphelios (Guinsoo's Rageblade, Hextech Gunblade and Kraken's Fury) carries alongside Xayah (Infinity Edge, Last Whisper and Striker's Flail). The board runs 4 Marksman, 4 Vanguard and 3 Anima Squad.",
  board: [
    {
      apiName: "TFT14_Leona",
      hex: 2,
      items: ["TFT_Item_DragonsClaw", "TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT14_Jarvan", hex: 3, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT14_Sylas", hex: 4 },
    { apiName: "TFT14_Rhaast", hex: 6 },
    {
      apiName: "TFT14_Aphelios",
      hex: 21,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade", "TFT_Item_RunaansHurricane"],
    },
    {
      apiName: "TFT14_Xayah",
      hex: 22,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT14_Jinx", hex: 25 },
    { apiName: "TFT14_Jhin", hex: 27 },
  ],
  early: [
    { apiName: "TFT14_Vi", hex: 2 },
    { apiName: "TFT14_Sylas", hex: 3 },
    { apiName: "TFT14_Kindred", hex: 23 },
    { apiName: "TFT14_Jhin", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_InfinityEdge"] },
  ],
  augments: [
    "TFT14_Augment_Marksman_Vertical",
    "TFT9_Augment_PumpingUp",
    "TFT_Augment_Overheal",
    "TFT_Augment_ThornPlatedArmor",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Infinity Edge, B.F. Sword and Giant's Belt.",
    "Aphelios can also hold Flickerblades.",
    "Miss Fortune can also hold Marksman Emblem, Infinity Edge and Spear of Shojin.",
    "Favor item, combat and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-marksman-vanguard",
  },
} satisfies Comp;
