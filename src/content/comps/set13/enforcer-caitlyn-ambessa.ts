import type { Comp } from "../../types";

export default {
  slug: "set13-enforcer-caitlyn-ambessa",
  name: "Enforcer Caitlyn & Ambessa",
  set: 13,
  tier: "X",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Caitlyn. Caitlyn (Blue Buff and Infinity Edge) carries alongside Ambessa (Edge of Night, Enforcer Emblem and Quicksilver). The board runs 8 Enforcer, 2 Quickstriker and 2 Sentinel.",
  board: [
    { apiName: "TFT13_Fish", hex: 0 },
    { apiName: "TFT13_Rumble", hex: 1 },
    {
      apiName: "TFT13_Beardy",
      hex: 5,
      items: ["TFT_Item_RedBuff", "TFT_Item_Redemption", "TFT_Item_SpectralGauntlet"],
    },
    { apiName: "TFT13_Vi", hex: 6 },
    { apiName: "TFT13_Camille", hex: 7 },
    {
      apiName: "TFT13_Ambessa",
      hex: 13,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT13_Item_SquadEmblemItem", "TFT_Item_Quicksilver"],
    },
    { apiName: "TFT13_Caitlyn", hex: 21, carry: true, items: ["TFT_Item_BlueBuff", "TFT_Item_InfinityEdge"] },
    { apiName: "TFT13_TwistedFate", hex: 24 },
    {
      apiName: "TFT13_Shooter",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_GuinsoosRageblade", "TFT_Item_Deathblade"],
    },
  ],
  early: [
    { apiName: "TFT13_Trundle", hex: 2 },
    { apiName: "TFT13_Fish", hex: 3, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT13_Blue", hex: 23 },
    { apiName: "TFT13_Shooter", hex: 24, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_LastWhisper"] },
    { apiName: "TFT13_Zeri", hex: 25 },
  ],
  augments: [
    "TFT13_Augment_Enforcer",
    "TFT13_Augment_EnforcerCrown",
    "TFT13_Augment_EnforcerCrest",
    "TFT10_Augment_LittleBuddies",
    "TFT_Augment_FiresalePlus",
    "TFT13_TeamupAugment_Mentorship",
  ],
  tips: [
    "On carousels and early slams, look for Last Whisper, Recurve Bow, B.F. Sword and Giant's Belt.",
    "Caitlyn can also hold Silvermere Dawn and Gold Collector.",
    "Ambessa can also hold Suspicious Trench Coat and Spectral Cutlass.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-trait-martial-law",
  },
} satisfies Comp;
