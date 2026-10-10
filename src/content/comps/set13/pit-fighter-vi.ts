import type { Comp } from "../../types";

export default {
  slug: "set13-pit-fighter-vi",
  name: "Pit Fighter Vi",
  set: 13,
  tier: "S",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Vi. Vi (Edge of Night, Bloodthirster and Titan's Resolve) carries alongside Gangplank (Infinity Edge, Deathblade and Spear of Shojin). The board runs 8 Pit Fighter, 2 Bruiser and 2 Form Swapper.",
  board: [
    { apiName: "TFT13_Red", hex: 1 },
    { apiName: "TFT13_Elise", hex: 2 },
    { apiName: "TFT13_Lieutenant", hex: 3 },
    { apiName: "TFT13_Rumble", hex: 4, items: ["TFT_Item_NeedlesslyLargeRod", "TFT13_Item_PitFighterEmblemItem"] },
    {
      apiName: "TFT13_Vi",
      hex: 5,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT13_Sett", hex: 6 },
    { apiName: "TFT13_Urgot", hex: 11 },
    { apiName: "TFT13_Draven", hex: 21 },
    {
      apiName: "TFT13_Gangplank",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_Deathblade", "TFT_Item_SpearOfShojin"],
    },
  ],
  early: [
    { apiName: "TFT13_Red", hex: 2 },
    {
      apiName: "TFT13_Darius",
      hex: 3,
      items: ["TFT13_Item_PitFighterEmblemItem", "TFT_Item_GuardianAngel", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT13_Amumu", hex: 4 },
    { apiName: "TFT13_Urgot", hex: 10 },
    { apiName: "TFT13_Draven", hex: 24, items: ["TFT_Item_LastWhisper"] },
  ],
  augments: [
    "TFT_Augment_TacticiansKitchen",
    "TFT_Augment_HardCommit",
    "TFT13_Augment_PitFighter",
    "TFT13_Augment_PitFighterCrown",
    "TFT13_Augment_PitFighterCrest",
    "TFT_Augment_ShojinSpirit",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Recurve Bow and Negatron Cloak.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-mosh-pit-flex",
  },
} satisfies Comp;
