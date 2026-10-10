import type { Comp } from "../../types";

export default {
  slug: "set17-marauder-master-yi",
  name: "Marauder Master Yi",
  set: 17,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Master Yi. Master Yi (Edge of Night, Giant Slayer and Titan's Resolve) carries alongside Kindred (Guinsoo's Rageblade, Kraken's Fury and Last Whisper). The board runs 4 Brawler, 4 Marauder and 2 Challenger.",
  board: [
    {
      apiName: "TFT17_MasterYi",
      hex: 0,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_MadredsBloodrazor", "TFT_Item_TitansResolve"],
    },
    {
      apiName: "TFT17_TahmKench",
      hex: 1,
      items: ["TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet", "TFT_Item_Redemption"],
    },
    { apiName: "TFT17_Maokai", hex: 6 },
    { apiName: "TFT17_Fiora", hex: 7, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT17_Gragas", hex: 13 },
    { apiName: "TFT17_Urgot", hex: 14 },
    { apiName: "TFT17_Belveth", hex: 20 },
    {
      apiName: "TFT17_Kindred",
      hex: 21,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane", "TFT_Item_LastWhisper"],
    },
  ],
  early: [
    { apiName: "TFT17_RekSai", hex: 2 },
    { apiName: "TFT17_Chogath", hex: 3 },
    { apiName: "TFT17_Briar", hex: 4, items: ["TFT_Item_GuardianAngel"] },
    { apiName: "TFT17_Belveth", hex: 10 },
  ],
  augments: [
    "TFT_Augment_JustSlayer",
    "TFT_Augment_GroupHug1",
    "TFT_Augment_BoxingLessons",
    "TFT_Augment_HomeCooking",
    "TFT_Augment_FuriousBlows",
    "TFT_Augment_ComponentQuestSword",
    "TFT_Augment_EpicRolldown",
    "TFT_Augment_ForgeSword",
  ],
  tips: [
    "On carousels and early slams, look for Edge of Night, Recurve Bow, Giant's Belt and Negatron Cloak.",
    "At level 9, add Rhaast and Shen to the board.",
    "Master Yi can also hold Brawler Emblem, Edge of Night and Giant Slayer.",
    "Master Yi can also hold Titanic Hydra, Edge of Night and Quicksilver.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-yi-marawlers",
  },
} satisfies Comp;
