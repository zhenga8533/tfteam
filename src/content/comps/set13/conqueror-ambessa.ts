import type { Comp } from "../../types";

export default {
  slug: "set13-conqueror-ambessa",
  name: "Conqueror Ambessa",
  set: 13,
  tier: "B",
  playstyle: "Fast 9",
  difficulty: "Medium",
  summary:
    "A level 9 comp that caps its board around Ambessa. Ambessa (Thief's Gloves) carries alongside Mordekaiser (Quicksilver, Edge of Night and Nashor's Tooth). The board runs 7 Conqueror, 4 Form Swapper and 2 Scrap.",
  board: [
    {
      apiName: "TFT13_Mordekaiser",
      hex: 1,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_GuardianAngel", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT13_Rell", hex: 2 },
    { apiName: "TFT13_Rumble", hex: 3, items: ["TFT13_Item_WarbandEmblemItem"] },
    { apiName: "TFT13_Elise", hex: 4 },
    { apiName: "TFT13_Darius", hex: 5 },
    { apiName: "TFT13_Ambessa", hex: 7, carry: true, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT13_Jayce",
      hex: 21,
      carry: true,
      items: ["TFT13_Item_WarbandEmblemItem", "TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "TFT13_Gangplank", hex: 23 },
    { apiName: "TFT13_Swain", hex: 25 },
  ],
  early: [
    { apiName: "TFT13_Amumu", hex: 1 },
    { apiName: "TFT13_Darius", hex: 2 },
    {
      apiName: "TFT13_Gangplank",
      hex: 3,
      items: ["TFT13_Item_WarbandEmblemItem", "TFT_Item_GuardianAngel", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT13_Rell", hex: 4 },
    { apiName: "TFT13_Draven", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_PortableForge",
    "TFT13_Augment_ConquerorCrown",
    "TFT13_Augment_ConquerorCrest",
    "TFT13_Augment_Conqueror",
    "TFT11_Augment_Prizefighter",
    "TFT_Augment_ClimbTheLadder2",
    "TFT_Augment_ItemCollector1",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Recurve Bow and Tear of the Goddess.",
    "Ambessa can also hold Suspicious Trench Coat, Mittens and Spectral Cutlass.",
    "Mordekaiser can also hold Rapid Firecannon, Zhonya's Paradox and Sniper's Focus.",
    "Favor economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-command-and-conquer",
  },
} satisfies Comp;
