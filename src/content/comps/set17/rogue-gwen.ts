import type { Comp } from "../../types";

export default {
  slug: "set17-rogue-gwen",
  name: "Rogue Gwen",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Gwen. Gwen (Rabadon's Deathcap, Hextech Gunblade and Jeweled Gauntlet) carries alongside Pyke (Infinity Edge and Edge of Night). The board runs 2 Brawler, 2 Psionic and 2 Replicator.",
  board: [
    { apiName: "TFT17_Gragas", hex: 0, star: 3 },
    {
      apiName: "TFT17_Pantheon",
      hex: 6,
      star: 3,
      items: ["TFT_Item_BrambleVest", "TFT_Item_WarmogsArmor", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT17_Rhaast", hex: 7 },
    {
      apiName: "TFT17_Gwen",
      hex: 13,
      star: 3,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_HextechGunblade", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT17_IvernMinion", hex: 14 },
    { apiName: "TFT17_Riven", hex: 20 },
    {
      apiName: "TFT17_Pyke",
      hex: 23,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_GuardianAngel"],
    },
    {
      apiName: "TFT17_Nami",
      hex: 27,
      carry: true,
      items: ["TFT_Item_Morellonomicon", "TFT_Item_StatikkShiv", "TFT_Item_SpearOfShojin"],
    },
  ],
  early: [
    { apiName: "TFT17_Pantheon", hex: 2 },
    { apiName: "TFT17_Gragas", hex: 3 },
    { apiName: "TFT17_Pyke", hex: 4, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_GuardianAngel"] },
    { apiName: "TFT17_Gwen", hex: 10, carry: true },
  ],
  augments: [
    "TFT_Augment_Unforgotten",
    "TFT_Augment_MagicRoll",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT_Augment_TwinGuardians",
    "TFT_Augment_HomeCooking",
    "TFT_Augment_TreasureHunt",
    "TFT_Augment_Retribution",
    "TFT_Augment_AnExaltedAdventure",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Tear of the Goddess, Sparring Gloves and Chain Vest.",
    "At level 9, add Karma and The Mighty Mech to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-pyke-gwen",
  },
} satisfies Comp;
