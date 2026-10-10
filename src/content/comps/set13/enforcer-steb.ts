import type { Comp } from "../../types";

export default {
  slug: "set13-enforcer-steb",
  name: "Enforcer Steb",
  set: 13,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 1-cost reroll comp built around three-star Steb. Steb (Bloodthirster, Archangel's Staff and Jeweled Gauntlet) carries alongside Maddie (Deathblade, Last Whisper and Infinity Edge). The board runs 8 Enforcer, 2 Bruiser and 2 Sniper.",
  board: [
    { apiName: "TFT13_Camille", hex: 0 },
    { apiName: "TFT13_Elise", hex: 1, items: ["TFT13_Item_SquadEmblemItem"] },
    { apiName: "TFT13_Beardy", hex: 5, items: ["TFT_Item_Redemption", "TFT_Item_RedBuff", "TFT_Item_IonicSpark"] },
    {
      apiName: "TFT13_Fish",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_ArchangelsStaff", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT13_Vi", hex: 12 },
    { apiName: "TFT13_Caitlyn", hex: 21 },
    { apiName: "TFT13_TwistedFate", hex: 24 },
    {
      apiName: "TFT13_Shooter",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_Deathblade", "TFT_Item_LastWhisper", "TFT_Item_InfinityEdge"],
    },
  ],
  augments: [
    "TFT13_Augment_EnforcerCrown",
    "TFT13_Augment_EnforcerCrest",
    "TFT13_Augment_FishCarry",
    "TFT_Augment_ClimbTheLadder2",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Archangel's Staff, Jeweled Gauntlet and B.F. Sword.",
    "Steb can also hold Seeker's Armguard and Zhonya's Paradox.",
    "Favor economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-combat-medic",
  },
} satisfies Comp;
