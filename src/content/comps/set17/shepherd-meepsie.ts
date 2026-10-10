import type { Comp } from "../../types";

export default {
  slug: "set17-shepherd-meepsie",
  name: "Shepherd Meepsie",
  set: 17,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Meepsie. Meepsie (Jeweled Gauntlet, Hand Of Justice and Edge of Night) carries alongside Pyke (Edge of Night and Infinity Edge). The board runs 3 Shepherd, 2 Conduit and 2 Dark Star.",
  board: [
    { apiName: "TFT17_Illaoi", hex: 0 },
    { apiName: "TFT17_Mordekaiser", hex: 6, star: 3, items: ["TFT_Item_IonicSpark", "TFT_Item_RedBuff"] },
    {
      apiName: "TFT17_IvernMinion",
      hex: 13,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT17_Rhaast", hex: 20 },
    { apiName: "TFT17_Nami", hex: 21 },
    { apiName: "TFT17_Lissandra", hex: 22 },
    {
      apiName: "TFT17_Pyke",
      hex: 23,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_InfinityEdge"],
    },
    { apiName: "TFT17_Viktor", hex: 27 },
  ],
  early: [
    { apiName: "TFT17_Pyke", hex: 2, carry: true },
    { apiName: "TFT17_Poppy", hex: 3 },
    {
      apiName: "TFT17_IvernMinion",
      hex: 4,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT17_Veigar", hex: 24 },
  ],
  augments: [
    "TFT9_Augment_ArmyBuilding",
    "TFT_Augment_HomeCooking",
    "TFT_Augment_ExclusiveCustomization",
    "TFT6_Augment_ThriftShop",
    "TFT6_Augment_ForceOfNature",
    "TFT7_Augment_CursedCrown",
  ],
  tips: [
    "On carousels and early slams, look for Jeweled Gauntlet, Hand Of Justice, Edge of Night and Needlessly Large Rod.",
    "At level 8, add Rhaast and Nami to the board.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-the-big-bang-meepsie",
  },
} satisfies Comp;
