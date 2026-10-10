import type { Comp } from "../../types";

export default {
  slug: "set13-conqueror-ambessa-mordekaiser",
  name: "Conqueror Ambessa & Mordekaiser",
  set: 13,
  tier: "C",
  playstyle: "Fast 9",
  difficulty: "Medium",
  summary:
    "A level 9 comp that caps its board around Ambessa. Ambessa (Hand Of Justice, Giant Slayer and Edge of Night) carries alongside Mordekaiser (Quicksilver, Edge of Night and Nashor's Tooth). The board runs 6 Conqueror, 4 Form Swapper and 2 Pit Fighter.",
  board: [
    {
      apiName: "TFT13_Mordekaiser",
      hex: 1,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_GuardianAngel", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT13_Rumble", hex: 2 },
    {
      apiName: "TFT13_Swain",
      hex: 3,
      star: 3,
      items: ["TFT_Item_BrambleVest", "TFT_Item_Crownguard", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT13_Elise", hex: 5 },
    { apiName: "TFT13_Rell", hex: 6 },
    {
      apiName: "TFT13_Ambessa",
      hex: 14,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_MadredsBloodrazor", "TFT_Item_GuardianAngel"],
    },
    {
      apiName: "TFT13_Gangplank",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_GuinsoosRageblade", "TFT13_Item_WarbandEmblemItem"],
    },
    { apiName: "TFT13_Jayce", hex: 23 },
    { apiName: "TFT13_Draven", hex: 27 },
  ],
  early: [
    { apiName: "TFT13_Amumu", hex: 1 },
    { apiName: "TFT13_Darius", hex: 2 },
    {
      apiName: "TFT13_Gangplank",
      hex: 3,
      carry: true,
      items: ["TFT13_Item_WarbandEmblemItem", "TFT_Item_LastWhisper", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT13_Rell", hex: 4 },
    { apiName: "TFT13_Draven", hex: 24 },
  ],
  augments: [
    "TFT13_Augment_ConquerorCrown",
    "TFT13_Augment_ConquerorCrest",
    "TFT13_Augment_Conqueror",
    "TFT11_Augment_Prizefighter",
    "TFT_Augment_ThornPlatedArmor",
    "TFT_Augment_ItemCollector1",
    "TFT_Augment_Trifecta2",
  ],
  tips: ["On carousels and early slams, look for B.F. Sword, Sparring Gloves, Recurve Bow and Tear of the Goddess."],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-3-cost-conqueror-reroll",
  },
} satisfies Comp;
