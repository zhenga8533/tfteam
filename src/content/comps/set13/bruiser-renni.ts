import type { Comp } from "../../types";

export default {
  slug: "set13-bruiser-renni",
  name: "Bruiser Renni",
  set: 13,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Renni. Renni (Bloodthirster, Titan's Resolve and Sterak's Gage) carries alongside Gangplank (Last Whisper, Infinity Edge and Spear of Shojin). The board runs 6 Bruiser, 3 Pit Fighter and 2 Enforcer.",
  board: [
    { apiName: "TFT13_Sett", hex: 0 },
    { apiName: "TFT13_Vi", hex: 1, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT13_Elise", hex: 2, items: ["TFT_Item_RedBuff"] },
    {
      apiName: "TFT13_Chainsaw",
      hex: 3,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_SteraksGage"],
    },
    { apiName: "TFT13_Trundle", hex: 4 },
    { apiName: "TFT13_NunuWillump", hex: 5 },
    { apiName: "TFT13_Fish", hex: 6 },
    {
      apiName: "TFT13_Gangplank",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"],
    },
  ],
  early: [
    { apiName: "TFT13_Trundle", hex: 2 },
    { apiName: "TFT13_Fish", hex: 3 },
    { apiName: "TFT13_Blue", hex: 23 },
    { apiName: "TFT13_Shooter", hex: 24 },
    { apiName: "TFT13_Zeri", hex: 25 },
  ],
  augments: [
    "TFT13_Augment_ChainsawCarry",
    "TFT13_Augment_Bruiser",
    "TFT13_Augment_BruiserCrest",
    "TFT13_Augment_BruiserCrown",
  ],
  tips: ["On carousels and early slams, look for Bloodthirster, Titan's Resolve, Giant's Belt and B.F. Sword."],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-brutal-revenge",
  },
} satisfies Comp;
