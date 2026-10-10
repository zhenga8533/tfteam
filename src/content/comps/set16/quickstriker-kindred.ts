import type { Comp } from "../../types";

export default {
  slug: "set16-quickstriker-kindred",
  name: "Quickstriker Kindred",
  set: 16,
  tier: "A",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Kindred. Kindred (Guinsoo's Rageblade, Kraken's Fury and Giant Slayer) carries alongside Lucian & Senna (Red Buff, Last Whisper and Infinity Edge). The board runs 1 Targon, 3 Noxus and 2 Arcanist.",
  board: [
    { apiName: "TFT16_Swain", hex: 1, items: ["TFT_Item_FrozenHeart"] },
    { apiName: "TFT16_Darius", hex: 2 },
    { apiName: "TFT16_Shyvana", hex: 3 },
    { apiName: "TFT16_Taric", hex: 4 },
    {
      apiName: "TFT16_Skarner",
      hex: 5,
      items: ["TFT_Item_Redemption", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    {
      apiName: "TFT16_Sylas",
      hex: 6,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_UnstableConcoction", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT16_Draven", hex: 21 },
    {
      apiName: "TFT16_Lucian",
      hex: 25,
      carry: true,
      items: ["TFT_Item_RapidFireCannon", "TFT_Item_LastWhisper", "TFT_Item_InfinityEdge"],
    },
    {
      apiName: "TFT16_Kindred",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT16_Illaoi", hex: 3 },
    { apiName: "TFT16_TwistedFate", hex: 23 },
    { apiName: "TFT16_Bard", hex: 24 },
    { apiName: "TFT16_Draven", hex: 25, items: ["TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "TFT11_Augment_Calltochaos",
    "TFT_Augment_ComponentQuestBow",
    "TFT_Augment_BirthdayReunion",
    "TFT_Augment_ForwardThinking",
    "TFT_Augment_BodyguardTraining",
    "TFT_Augment_AuraFarming",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Negatron Cloak, Needlessly Large Rod and Chain Vest.",
    "At level 9, add Nautilus, Miss Fortune and Ornn to the board.",
    "Kindred can also hold Flickerblades and Mittens.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-kindred-noxus-95",
  },
} satisfies Comp;
