import type { Comp } from "../../types";

export default {
  slug: "set13-enforcer-caitlyn",
  name: "Enforcer Caitlyn",
  set: 13,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Caitlyn. Caitlyn (Infinity Edge, Deathblade and Blue Buff) carries alongside Vi (Bloodthirster, Titan's Resolve and Giant Slayer). The board runs 6 Enforcer, 2 Pit Fighter and 2 Quickstriker.",
  board: [
    { apiName: "TFT13_Fish", hex: 1 },
    { apiName: "TFT13_Gangplank", hex: 3 },
    { apiName: "TFT13_Rumble", hex: 4 },
    { apiName: "TFT13_Beardy", hex: 5, items: ["TFT_Item_IonicSpark", "TFT_Item_SpectralGauntlet"] },
    {
      apiName: "TFT13_Vi",
      hex: 6,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_MadredsBloodrazor"],
    },
    { apiName: "TFT13_Ambessa", hex: 13 },
    { apiName: "TFT13_Shooter", hex: 21 },
    {
      apiName: "TFT13_TwistedFate",
      hex: 24,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_Morellonomicon", "TFT_Item_RabadonsDeathcap"],
    },
    {
      apiName: "TFT13_Caitlyn",
      hex: 27,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_Deathblade", "TFT_Item_BlueBuff"],
    },
  ],
  early: [
    { apiName: "TFT13_Fish", hex: 2 },
    {
      apiName: "TFT13_Trundle",
      hex: 3,
      items: ["TFT13_Item_SquadEmblemItem", "TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT13_Camille", hex: 4 },
    { apiName: "TFT13_Blue", hex: 23 },
    { apiName: "TFT13_Shooter", hex: 24 },
  ],
  augments: [
    "TFT13_Augment_Enforcer",
    "TFT13_Augment_EnforcerCrown",
    "TFT13_Augment_EnforcerCrest",
    "TFT_Augment_FiresalePlus",
    "TFT13_TeamupAugment_Reunion",
    "TFT13_TeamupAugment_Mentorship",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Spatula, Chain Vest and B.F. Sword.",
    "Vi can also hold Suspicious Trench Coat and Death's Defiance.",
    "Caitlyn can also hold Gold Collector and Fishbones.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-operation-find-jinx",
  },
} satisfies Comp;
