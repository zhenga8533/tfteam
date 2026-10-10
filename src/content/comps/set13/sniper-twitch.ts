import type { Comp } from "../../types";

export default {
  slug: "set13-sniper-twitch",
  name: "Sniper Twitch",
  set: 13,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Twitch. Twitch (Infinity Edge, Hextech Gunblade and Guinsoo's Rageblade) carries alongside Caitlyn (Infinity Edge, Blue Buff and Last Whisper). The board runs 6 Sniper, 4 Watcher and 2 Enforcer.",
  board: [
    { apiName: "TFT13_Prime", hex: 1 },
    { apiName: "TFT13_Vladimir", hex: 2 },
    { apiName: "TFT13_Garen", hex: 3, items: ["TFT_Item_WarmogsArmor", "TFT_Item_RedBuff", "TFT_Item_Redemption"] },
    { apiName: "TFT13_FlyGuy", hex: 4, items: ["TFT13_Item_SniperEmblemItem"] },
    {
      apiName: "TFT13_Caitlyn",
      hex: 21,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_BlueBuff", "TFT_Item_LastWhisper"],
    },
    { apiName: "TFT13_Shooter", hex: 23 },
    { apiName: "TFT13_Zeri", hex: 24 },
    { apiName: "TFT13_KogMaw", hex: 25 },
    {
      apiName: "TFT13_Twitch",
      hex: 27,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_HextechGunblade", "TFT_Item_GuinsoosRageblade"],
    },
  ],
  early: [
    { apiName: "TFT13_Trundle", hex: 2 },
    { apiName: "TFT13_Fish", hex: 3, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT13_Zeri", hex: 23 },
    { apiName: "TFT13_Shooter", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_InfinityEdge"] },
  ],
  augments: [
    "TFT13_Augment_SniperCrown",
    "TFT13_Augment_SniperCrest",
    "TFT13_Augment_Sniper",
    "TFT_Augment_CloningFacility",
    "TFT9_Augment_PumpingUp",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Needlessly Large Rod, B.F. Sword and Tear of the Goddess.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-experiment-twitch",
  },
} satisfies Comp;
