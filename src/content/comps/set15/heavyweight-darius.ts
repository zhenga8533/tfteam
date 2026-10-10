import type { Comp } from "../../types";

export default {
  slug: "set15-heavyweight-darius",
  name: "Heavyweight Darius",
  set: 15,
  tier: "A",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Darius. Darius (Infinity Edge, Hand Of Justice and Giant Slayer) carries alongside Jayce (3× B.F. Sword). The board runs 6 Heavyweight, 2 Wraith and 1 Mentor.",
  board: [
    { apiName: "TFT15_Kobuko", hex: 2 },
    { apiName: "TFT15_Zac", hex: 3 },
    { apiName: "TFT15_Aatrox", hex: 4 },
    { apiName: "TFT15_Poppy", hex: 5, items: ["TFT_Item_SpectralGauntlet", "TFT_Item_Redemption"] },
    {
      apiName: "TFT15_Darius",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction", "TFT_Item_MadredsBloodrazor"],
    },
    {
      apiName: "TFT15_Jayce",
      hex: 13,
      star: 3,
      carry: true,
      items: ["TFT_Item_BFSword", "TFT_Item_BFSword", "TFT_Item_BFSword"],
    },
    { apiName: "TFT15_Malzahar", hex: 27, items: ["TFT_Item_BlueBuff", "TFT_Item_RabadonsDeathcap"] },
  ],
  early: [
    { apiName: "TFT15_Darius", hex: 1, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction"] },
    { apiName: "TFT15_Zac", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Kobuko", hex: 4 },
  ],
  augments: [
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_Lineup",
    "TFT_Augment_Replication",
    "TFT_Augment_ShojinSpirit",
    "TFT_Augment_GuardbreakerSpirit",
    "TFT_Augment_SwordOverflow",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, B.F. Sword, Sparring Gloves and Tear of the Goddess.",
    "At level 9, add Zyra to the board.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-fusion-ha",
  },
} satisfies Comp;
