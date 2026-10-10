import type { Comp } from "../../types";

export default {
  slug: "set13-mordekaiser",
  name: "Mordekaiser",
  set: 13,
  tier: "X",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Mordekaiser. Mordekaiser (Edge of Night, Quicksilver and Nashor's Tooth) carries.",
  board: [
    { apiName: "TFT13_Jayce", hex: 2 },
    {
      apiName: "TFT13_Mordekaiser",
      hex: 3,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_Quicksilver", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT13_Vi", hex: 4, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT13_Illaoi",
      hex: 5,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_IonicSpark", "TFT_Item_Redemption"],
    },
    { apiName: "TFT13_LeBlanc", hex: 21, items: ["TFT_Item_ArchangelsStaff", "TFT_Item_GuinsoosRageblade"] },
    { apiName: "TFT13_Corki", hex: 25, items: ["TFT_Item_InfinityEdge", "TFT_Item_MadredsBloodrazor"] },
    { apiName: "TFT13_Twitch", hex: 27, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RapidFireCannon"] },
  ],
  early: [
    { apiName: "TFT13_Amumu", hex: 2 },
    { apiName: "TFT13_Singed", hex: 3, items: ["TFT_Item_IonicSpark", "TFT_Item_SpectralGauntlet"] },
    { apiName: "TFT13_Chainsaw", hex: 4 },
    { apiName: "TFT13_Zyra", hex: 23, items: ["TFT_Item_ArchangelsStaff", "TFT_Item_SpearOfShojin"] },
    { apiName: "TFT13_Zeri", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RapidFireCannon"] },
  ],
  augments: ["TFT_Augment_SwordOverflow", "TFT9_Augment_Commander_RollingForDays", "TFT_Augment_QualityOverQuantity"],
  tips: [
    "On carousels and early slams, look for Recurve Bow, B.F. Sword, Giant's Belt and Sparring Gloves.",
    "Mordekaiser can also hold Rapid Firecannon, Sniper's Focus and Zhonya's Paradox.",
    "Favor combat, item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-built-different",
  },
} satisfies Comp;
