import type { Comp } from "../../types";

export default {
  slug: "set17-challenger-jinx-pyke",
  name: "Challenger Jinx & Pyke",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Jinx. Jinx (Deathblade, Spear of Shojin and Red Buff) carries alongside Pyke (Infinity Edge and Edge of Night). The board runs 2 Brawler, 2 Challenger and 2 N.O.V.A..",
  board: [
    { apiName: "TFT17_Galio", hex: 0 },
    {
      apiName: "TFT17_Gragas",
      hex: 6,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption"],
    },
    { apiName: "TFT17_Rhaast", hex: 7 },
    { apiName: "TFT17_Maokai", hex: 13 },
    { apiName: "TFT17_Kindred", hex: 20, items: ["TFT_Item_LastWhisper"] },
    {
      apiName: "TFT17_Pyke",
      hex: 25,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_GuardianAngel"],
    },
    {
      apiName: "TFT17_Jinx",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_Deathblade", "TFT_Item_SpearOfShojin", "TFT_Item_RapidFireCannon"],
    },
  ],
  early: [
    { apiName: "TFT17_Pyke", hex: 1, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_GuardianAngel"] },
    { apiName: "TFT17_Gragas", hex: 2 },
    { apiName: "TFT17_RekSai", hex: 3 },
    { apiName: "TFT17_IvernMinion", hex: 4 },
  ],
  augments: [
    "TFT_Augment_Unforgotten",
    "TFT_Augment_MagicRoll",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT_Augment_TwinGuardians",
    "TFT_Augment_HomeCooking",
    "TFT_Augment_TreasureHunt",
    "TFT_Augment_AnExaltedAdventure",
    "TFT_Augment_Waverider",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Tear of the Goddess, Sparring Gloves and Chain Vest.",
    "At level 9, add Meepsie to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-jinx-pyke",
  },
} satisfies Comp;
