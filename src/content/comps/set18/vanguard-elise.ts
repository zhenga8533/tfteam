import type { Comp } from "../../types";

export default {
  slug: "set18-vanguard-elise",
  name: "Vanguard Elise",
  set: 18,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Elise. Elise (Titan's Resolve, Guinsoo's Rageblade and Gargoyle Stoneplate) carries alongside Morgana (Void Staff, Morellonomicon and Jeweled Gauntlet). The board runs 4 Vanguard, 3 Coven and 2 Invoker.",
  board: [
    {
      apiName: "DA_18_Elise",
      hex: 4,
      star: 3,
      carry: true,
      items: ["TFT_Item_TitansResolve", "TFT_Item_GuinsoosRageblade", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "DA_18_Diana", hex: 10 },
    { apiName: "DA_Sentinel18", hex: 11 },
    { apiName: "DA_18_Hecarim", hex: 17 },
    {
      apiName: "DA_18_Morgana",
      hex: 18,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "DA_18_Alune", hex: 26 },
    {
      apiName: "DA_18_Cassiopeia",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_HextechGunblade", "TFT_Item_ArchangelsStaff"],
    },
  ],
  early: [
    {
      apiName: "DA_18_Elise",
      hex: 2,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_TitansResolve", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "DA_18_Camille", hex: 3 },
    { apiName: "DA_18_Diana", hex: 4 },
    { apiName: "DA_18_Caitlyn", hex: 24 },
  ],
  augments: ["DA_18_CovenTraitAugment_LootToAP", "DA_18_CovenTraitAugment", "DA_SoloPlate", "DA_Staffsmith"],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Titan's Resolve, Negatron Cloak and Chain Vest.",
    "At level 9, add Morgana to the board.",
    "Elise can also hold Ravager Emblem, Guinsoo's Rageblade and Titan's Resolve.",
    "Elise can also hold Gargoyle Stoneplate, Guinsoo's Rageblade and Titan's Resolve.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-coven-elise",
  },
} satisfies Comp;
