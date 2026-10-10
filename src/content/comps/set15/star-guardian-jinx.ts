import type { Comp } from "../../types";

export default {
  slug: "set15-star-guardian-jinx",
  name: "Star Guardian Jinx",
  set: 15,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Jinx. Jinx (Infinity Edge, Spear of Shojin and Giant Slayer) carries. The board runs 6 Star Guardian, 2 Heavyweight and 2 Protector.",
  board: [
    { apiName: "TFT15_Kobuko", hex: 0 },
    {
      apiName: "TFT15_Poppy",
      hex: 2,
      items: ["TFT_Item_NightHarvester", "TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption"],
    },
    { apiName: "TFT15_KSante", hex: 3, items: ["TFT_Item_SpectralGauntlet"] },
    { apiName: "TFT15_Neeko", hex: 4 },
    { apiName: "TFT15_Rell", hex: 6 },
    {
      apiName: "TFT15_Jinx",
      hex: 21,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin", "TFT_Item_MadredsBloodrazor"],
    },
    { apiName: "TFT15_Seraphine", hex: 23, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT15_Xayah", hex: 25 },
    { apiName: "TFT15_Varus", hex: 27 },
  ],
  early: [
    { apiName: "TFT15_Shen", hex: 2 },
    { apiName: "TFT15_Rell", hex: 3, items: ["TFT_Item_Redemption", "TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT15_Xayah", hex: 23 },
    { apiName: "TFT15_Syndra", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_MadredsBloodrazor"] },
  ],
  augments: [
    "TFT15_Augment_StarGuardianCrest",
    "TFT_Augment_ClimbTheLadder2",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT_Augment_QualityOverQuantity",
    "TFT6_Augment_Keepers2",
    "TFT11_Augment_Reinfourcement",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, B.F. Sword, Sparring Gloves and Negatron Cloak.",
    "At level 9, add Braum and Varus to the board.",
    "Jinx can also hold Kraken's Fury, Giant Slayer and Infinity Edge.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-star-guardians",
  },
} satisfies Comp;
