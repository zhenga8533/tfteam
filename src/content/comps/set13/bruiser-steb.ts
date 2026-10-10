import type { Comp } from "../../types";

export default {
  slug: "set13-bruiser-steb",
  name: "Bruiser Steb",
  set: 13,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 1-cost reroll comp built around three-star Steb. Steb (Bloodthirster, Archangel's Staff and Jeweled Gauntlet) carries alongside Caitlyn (Blue Buff, Deathblade and Infinity Edge). The board runs 6 Bruiser, 3 Enforcer and 2 Sniper.",
  board: [
    { apiName: "TFT13_Trundle", hex: 0 },
    { apiName: "TFT13_Sett", hex: 2 },
    { apiName: "TFT13_NunuWillump", hex: 3 },
    { apiName: "TFT13_Chainsaw", hex: 4 },
    { apiName: "TFT13_Elise", hex: 5, items: ["TFT_Item_IonicSpark", "TFT_Item_RedBuff", "TFT_Item_Redemption"] },
    {
      apiName: "TFT13_Fish",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_ArchangelsStaff", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT13_Shooter", hex: 21 },
    {
      apiName: "TFT13_Caitlyn",
      hex: 27,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_Deathblade", "TFT_Item_InfinityEdge"],
    },
  ],
  augments: [
    "TFT13_Augment_FishCarry",
    "TFT13_Augment_BruiserCrest",
    "TFT13_Augment_BruiserCrown",
    "TFT6_Augment_PortableForge",
    "TFT_Augment_Lineup",
    "TFT_Augment_ClimbTheLadder2",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Archangel's Staff, Jeweled Gauntlet and B.F. Sword.",
    "Steb can also hold Seeker's Armguard, Zhonya's Paradox and Talisman Of Ascension.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-combat-medic-bruisers",
  },
} satisfies Comp;
