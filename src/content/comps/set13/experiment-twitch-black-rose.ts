import type { Comp } from "../../types";

export default {
  slug: "set13-experiment-twitch-black-rose",
  name: "Experiment Twitch (Black Rose)",
  set: 13,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Twitch. Twitch (Guinsoo's Rageblade, Red Buff and Deathblade) carries. The board runs 5 Black Rose, 3 Experiment and 2 Bruiser.",
  board: [
    { apiName: "TFT13_Vladimir", hex: 1 },
    { apiName: "TFT13_NunuWillump", hex: 2 },
    { apiName: "TFT13_Elise", hex: 3 },
    {
      apiName: "TFT13_DrMundo",
      hex: 4,
      items: ["TFT_Item_Redemption", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT13_Morgana", hex: 21 },
    { apiName: "TFT13_Cassiopeia", hex: 22 },
    { apiName: "TFT13_LeBlanc", hex: 24, items: ["TFT_Item_StatikkShiv", "TFT_Item_GuinsoosRageblade"] },
    { apiName: "TFT13_Caitlyn", hex: 26, items: ["TFT_Item_BlueBuff", "TFT_Item_InfinityEdge"] },
    {
      apiName: "TFT13_Twitch",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RapidFireCannon", "TFT_Item_Deathblade"],
    },
  ],
  early: [
    { apiName: "TFT13_Sett", hex: 1 },
    { apiName: "TFT13_NunuWillump", hex: 2 },
    { apiName: "TFT13_Fish", hex: 3, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT13_Trundle", hex: 4 },
    { apiName: "TFT13_Shooter", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Deathblade"] },
  ],
  augments: [
    "TFT13_Augment_CabalCrown",
    "TFT13_Augment_CabalCrest",
    "TFT9_Augment_PumpingUp2",
    "TFT7_Augment_LivingForge",
    "TFT_Augment_TableScraps",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Deathblade, Recurve Bow and Giant's Belt.",
    "Twitch can also hold Gold Collector and Red Buff.",
    "Dr. Mundo can also hold Talisman Of Ascension.",
    "Favor economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-the-black-rat",
  },
} satisfies Comp;
