import type { Comp } from "../../types";

export default {
  slug: "set14-slayer-vayne",
  name: "Slayer Vayne",
  set: 14,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Vayne. Vayne (Guinsoo's Rageblade, Flickerblades and Kraken's Fury) carries alongside Senna (Last Whisper, Guinsoo's Rageblade and Infinity Edge). The board runs 4 Slayer, 4 Vanguard and 2 Divinicorp.",
  board: [
    { apiName: "TFT14_Sylas", hex: 0 },
    { apiName: "TFT14_Rhaast", hex: 1 },
    { apiName: "TFT14_Zed", hex: 2, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT14_Leona", hex: 3 },
    {
      apiName: "TFT14_Jarvan",
      hex: 4,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart"],
    },
    {
      apiName: "TFT14_Senna",
      hex: 26,
      star: 3,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_GuinsoosRageblade", "TFT_Item_InfinityEdge"],
    },
    {
      apiName: "TFT14_Vayne",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Artifact_NavoriFlickerblades", "TFT_Item_RunaansHurricane"],
    },
  ],
  early: [
    { apiName: "TFT14_Sylas", hex: 2 },
    { apiName: "TFT14_Shaco", hex: 3 },
    { apiName: "TFT14_Vi", hex: 4 },
    {
      apiName: "TFT14_Vayne",
      hex: 24,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Artifact_NavoriFlickerblades"],
    },
  ],
  augments: [
    "TFT9_Augment_PumpingUp",
    "TFT10_Augment_HeroicGrabBag",
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_LivingForge",
    "TFT_Augment_TwoMuchValue",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Recurve Bow, Needlessly Large Rod and Negatron Cloak.",
    "Vayne can also hold 2× Guinsoo's Rageblade.",
    "Jarvan IV can also hold Unending Despair, Silvermere Dawn and Trickster's Glass.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-slay-queen",
  },
} satisfies Comp;
