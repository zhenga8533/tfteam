import type { Comp } from "../../types";

export default {
  slug: "set16-shadow-isles-gwen",
  name: "Shadow Isles Gwen",
  set: 16,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Gwen . Gwen  (Hextech Gunblade, Rabadon's Deathcap and Blue Buff) carries alongside Kindred (Kraken's Fury, Last Whisper and Guinsoo's Rageblade). The board runs 4 Shadow Isles, 4 Warden and 2 Disruptor.",
  board: [
    {
      apiName: "TFT16_Loris",
      hex: 1,
      star: 3,
      items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_WarmogsArmor"],
    },
    {
      apiName: "TFT16_Thresh",
      hex: 2,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT16_Viego", hex: 3 },
    { apiName: "TFT16_Yorick", hex: 4 },
    { apiName: "TFT16_Braum", hex: 5 },
    {
      apiName: "TFT16_Gwen",
      hex: 7,
      star: 3,
      carry: true,
      items: ["TFT_Item_HextechGunblade", "TFT_Item_RabadonsDeathcap", "TFT_Item_BlueBuff"],
    },
    { apiName: "TFT16_Seraphine", hex: 21 },
    {
      apiName: "TFT16_Kindred",
      hex: 23,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_LastWhisper", "TFT_Item_GuinsoosRageblade"],
    },
  ],
  early: [
    { apiName: "TFT16_Yorick", hex: 2 },
    {
      apiName: "TFT16_Viego",
      hex: 3,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_HextechGunblade", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT16_Nautilus", hex: 4 },
    { apiName: "TFT16_TwistedFate", hex: 24 },
  ],
  augments: [
    "TFT11_Augment_Calltochaos",
    "TFT9_Augment_BigGrabBag",
    "TFT11_Augment_Epoch",
    "TFT9_Augment_HealingOrbsI",
    "TFT_Augment_HomeCooking",
    "TFT_Augment_FiresalePlus",
    "TFT_Augment_WandOverflow",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Recurve Bow, Needlessly Large Rod and B.F. Sword.",
    "At level 9, add Kalista , Fiddlesticks and Ornn to the board.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-shadow-isles-kalista",
  },
} satisfies Comp;
