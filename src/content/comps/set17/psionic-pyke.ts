import type { Comp } from "../../types";

export default {
  slug: "set17-psionic-pyke",
  name: "Psionic Pyke",
  set: 17,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Pyke. Pyke (Infinity Edge and Edge of Night) carries alongside Karma (Archangel's Staff, Void Staff and Spear of Shojin). The board runs 4 Psionic, 3 Voyager and 3 Shepherd.",
  board: [
    { apiName: "TFT17_IvernMinion", hex: 1 },
    { apiName: "TFT17_TahmKench", hex: 3 },
    { apiName: "TFT17_MasterYi", hex: 4 },
    {
      apiName: "TFT17_Gragas",
      hex: 5,
      star: 3,
      items: ["TFT_Item_Crownguard", "TFT_Item_SpectralGauntlet", "TFT_Item_RedBuff"],
    },
    { apiName: "TFT17_Pyke", hex: 6, star: 3, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_GuardianAngel"] },
    { apiName: "TFT17_Sona", hex: 21 },
    { apiName: "TFT17_Lissandra", hex: 24 },
    {
      apiName: "TFT17_Karma",
      hex: 27,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_StatikkShiv", "TFT_Item_SpearOfShojin"],
    },
  ],
  early: [
    { apiName: "TFT17_Pyke", hex: 1, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_GuardianAngel"] },
    { apiName: "TFT17_Gragas", hex: 2 },
    { apiName: "TFT17_Chogath", hex: 3 },
    { apiName: "TFT17_IvernMinion", hex: 4 },
  ],
  augments: [
    "TFT17_Augment_PykeCarry",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_HomeCooking",
    "TFT9_Augment_HealingOrbsII",
    "TFT_Augment_ExclusiveCustomization",
    "TFT_Augment_ForgeSword",
    "TFT_Augment_AwakenedSoul",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, Edge of Night, Giant's Belt and Tear of the Goddess.",
    "At level 9, add The Mighty Mech to the board.",
    "Pyke can also hold Edge of Night, Infinity Edge and Striker's Flail.",
    "Pyke can also hold Edge of Night, Infinity Edge and Hand Of Justice.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-contract-killer-pyke",
  },
} satisfies Comp;
