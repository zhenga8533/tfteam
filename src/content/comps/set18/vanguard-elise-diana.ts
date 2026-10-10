import type { Comp } from "../../types";

export default {
  slug: "set18-vanguard-elise-diana",
  name: "Vanguard Elise & Diana",
  set: 18,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Elise. Elise (Titan's Resolve, Guinsoo's Rageblade and Archangel's Staff) carries alongside Diana (Jeweled Gauntlet, Striker's Flail and Hand Of Justice). The board runs 4 Ravager, 4 Vanguard and 3 Coven.",
  board: [
    {
      apiName: "DA_Sentinel18",
      hex: 1,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "DA_18_Hecarim", hex: 5 },
    {
      apiName: "DA_18_Elise",
      hex: 7,
      star: 3,
      carry: true,
      items: ["TFT_Item_TitansResolve", "TFT_Item_GuinsoosRageblade", "TFT_Item_ArchangelsStaff"],
    },
    {
      apiName: "DA_18_Diana",
      hex: 8,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "DA_18_Morgana", hex: 15, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    { apiName: "DA_Murkwolf18", hex: 16, star: 3, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "DA_18_Camille", hex: 26 },
    { apiName: "DA_Brambleback18", hex: 27 },
  ],
  early: [
    { apiName: "DA_18_Elise", hex: 2, carry: true },
    { apiName: "DA_18_Camille", hex: 3 },
    { apiName: "DA_18_Diana", hex: 4, carry: true },
    { apiName: "DA_18_Caitlyn", hex: 24 },
  ],
  augments: ["DA_18_CovenTraitAugment_LootToAP", "DA_18_CovenTraitAugment", "DA_SoloPlate", "DA_Staffsmith"],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Titan's Resolve, Negatron Cloak and Chain Vest.",
    "Elise can also hold Ravager Emblem, Guinsoo's Rageblade and Titan's Resolve.",
    "Elise can also hold Gargoyle Stoneplate, Guinsoo's Rageblade and Titan's Resolve.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-infinite-elise",
  },
} satisfies Comp;
