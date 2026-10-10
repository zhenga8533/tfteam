import type { Comp } from "../../types";

export default {
  slug: "set17-stargazer-xayah",
  name: "Stargazer Xayah",
  set: 17,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Xayah. Xayah (Red Buff, Kraken's Fury and Last Whisper) carries alongside Riven (Bloodthirster, Sterak's Gage and Stargazer Emblem). The board runs 8 Stargazer, 2 Bastion and 2 Conduit.",
  board: [
    { apiName: "TFT17_Jax", hex: 2 },
    { apiName: "TFT17_Morgana", hex: 3, items: ["TFT17_Item_StargazerEmblemItem"] },
    { apiName: "TFT17_Shen", hex: 4, items: ["TFT17_Item_StargazerEmblemItem"] },
    { apiName: "TFT17_Nunu", hex: 5, items: ["TFT_Item_FrozenHeart", "TFT_Item_Crownguard", "TFT_Item_AdaptiveHelm"] },
    { apiName: "TFT17_Mordekaiser", hex: 8 },
    {
      apiName: "TFT17_Riven",
      hex: 12,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_SteraksGage", "TFT17_Item_StargazerEmblemItem"],
    },
    { apiName: "TFT17_Talon", hex: 15 },
    { apiName: "TFT17_Jhin", hex: 26, items: ["TFT17_Item_StargazerEmblemItem"] },
    {
      apiName: "TFT17_Xayah",
      hex: 27,
      carry: true,
      items: ["TFT_Item_RapidFireCannon", "TFT_Item_RunaansHurricane", "TFT_Item_LastWhisper"],
    },
  ],
  early: [
    { apiName: "TFT17_Talon", hex: 2, items: ["TFT_Item_Bloodthirster", "TFT_Item_RunaansHurricane"] },
    { apiName: "TFT17_Aatrox", hex: 3 },
    { apiName: "TFT17_Jax", hex: 4 },
    { apiName: "TFT17_TwistedFate", hex: 24 },
  ],
  augments: [
    "TFT_Augment_EpicRolldown",
    "TFT11_Augment_Reinfourcement",
    "TFT6_Augment_SalvageBin",
    "TFT_Augment_ForgeSword",
    "TFT6_Augment_TradeSector2",
    "TFT_Augment_ClimbTheLadder1",
    "TFT9_Augment_OneTwosThree",
    "TFT9_Augment_Commander_RollingForDays",
  ],
  tips: [
    "On carousels and early slams, look for Kraken's Fury, Recurve Bow, Negatron Cloak and B.F. Sword.",
    "At level 9, add Rhaast, Morgana and Vex to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-mountain-riven",
  },
} satisfies Comp;
