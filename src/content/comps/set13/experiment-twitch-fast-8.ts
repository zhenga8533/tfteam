import type { Comp } from "../../types";

export default {
  slug: "set13-experiment-twitch-fast-8",
  name: "Experiment Twitch (Fast 8)",
  set: 13,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Twitch. Twitch (Guinsoo's Rageblade, Red Buff and Infinity Edge) carries. The board runs 6 Bruiser, 3 Experiment and 2 Enforcer.",
  board: [
    { apiName: "TFT13_Sett", hex: 0 },
    { apiName: "TFT13_Fish", hex: 1 },
    { apiName: "TFT13_Chainsaw", hex: 2 },
    { apiName: "TFT13_Elise", hex: 3, items: ["TFT_Item_FrozenHeart"] },
    {
      apiName: "TFT13_DrMundo",
      hex: 4,
      items: ["TFT13_Item_BruiserEmblemItem", "TFT_Item_Redemption", "TFT_Item_SpectralGauntlet"],
    },
    { apiName: "TFT13_NunuWillump", hex: 5 },
    { apiName: "TFT13_Caitlyn", hex: 21, items: ["TFT_Item_InfinityEdge", "TFT_Item_BlueBuff"] },
    { apiName: "TFT13_Jayce", hex: 24 },
    {
      apiName: "TFT13_Twitch",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RapidFireCannon", "TFT_Item_InfinityEdge"],
    },
  ],
  early: [
    { apiName: "TFT13_NunuWillump", hex: 1 },
    { apiName: "TFT13_Sett", hex: 2 },
    { apiName: "TFT13_Fish", hex: 3, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT13_Trundle", hex: 4 },
    { apiName: "TFT13_Shooter", hex: 24, items: ["TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "TFT_Augment_CookingPot",
    "TFT13_Augment_BruiserCrest",
    "TFT13_Augment_BruiserCrown",
    "TFT_Augment_SwordOverflow",
    "TFT_Augment_SpiritLink1",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, B.F. Sword, Giant's Belt and Recurve Bow.",
    "Dr. Mundo can also hold Talisman Of Ascension.",
    "Twitch can also hold Gold Collector.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-bruiser-twitch",
  },
} satisfies Comp;
