import type { Comp } from "../../types";

export default {
  slug: "set13-experiment-twitch",
  name: "Experiment Twitch",
  set: 13,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Twitch. Twitch (Guinsoo's Rageblade, Red Buff and Infinity Edge) carries alongside Vi (Experiment Emblem, Titan's Resolve and Bloodthirster). The board runs 5 Experiment, 2 Bruiser and 2 Dominator.",
  board: [
    { apiName: "TFT13_NunuWillump", hex: 0 },
    { apiName: "TFT13_Mordekaiser", hex: 2 },
    { apiName: "TFT13_Elise", hex: 3 },
    {
      apiName: "TFT13_DrMundo",
      hex: 4,
      items: ["TFT_Item_Redemption", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    {
      apiName: "TFT13_Vi",
      hex: 8,
      carry: true,
      items: ["TFT13_Item_ExperimentEmblemItem", "TFT_Item_TitansResolve", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT13_Urgot", hex: 17 },
    { apiName: "TFT13_Jayce", hex: 21 },
    {
      apiName: "TFT13_Caitlyn",
      hex: 26,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_LastWhisper", "TFT_Item_InfinityEdge"],
    },
    {
      apiName: "TFT13_Twitch",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RapidFireCannon", "TFT_Item_InfinityEdge"],
    },
  ],
  early: [
    { apiName: "TFT13_Trundle", hex: 2 },
    { apiName: "TFT13_Fish", hex: 3, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT13_Zeri", hex: 23 },
    { apiName: "TFT13_Shooter", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_InfinityEdge"] },
  ],
  augments: [
    "TFT13_Augment_ExperimentCrown",
    "TFT13_Augment_ExperimentCrest",
    "TFT_Augment_Pyromaniac",
    "TFT13_Augment_Experiment",
    "TFT_Augment_Dummify",
    "TFT_Augment_Golemify",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Giant's Belt, Recurve Bow and B.F. Sword.",
    "Twitch can also hold Gold Collector.",
    "Dr. Mundo can also hold Lightshield Crest.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-twitch-flex-corki",
  },
} satisfies Comp;
