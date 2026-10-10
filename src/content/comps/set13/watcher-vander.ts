import type { Comp } from "../../types";

export default {
  slug: "set13-watcher-vander",
  name: "Watcher Vander",
  set: 13,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Vander. Vander (Bloodthirster, Infinity Edge and Hand Of Justice) carries. The board runs 6 Watcher, 4 Family and 2 Ambusher.",
  board: [
    { apiName: "TFT13_Amumu", hex: 0 },
    { apiName: "TFT13_Darius", hex: 1 },
    {
      apiName: "TFT13_Ekko",
      hex: 2,
      items: ["TFT13_Item_FamilyEmblemItem", "TFT_Item_UnstableConcoction", "TFT13_Item_WatcherEmblemItem"],
    },
    {
      apiName: "TFT13_Prime",
      hex: 3,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction"],
    },
    {
      apiName: "TFT13_Garen",
      hex: 4,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_WarmogsArmor", "TFT_Item_Redemption"],
    },
    { apiName: "TFT13_Red", hex: 5, star: 3, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT13_FlyGuy", hex: 6 },
    { apiName: "TFT13_Blue", hex: 27, star: 3 },
  ],
  early: [
    { apiName: "TFT13_Darius", hex: 1 },
    { apiName: "TFT13_Red", hex: 2 },
    {
      apiName: "TFT13_Prime",
      hex: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_Bloodthirster", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT13_Amumu", hex: 4 },
    { apiName: "TFT13_Blue", hex: 24 },
  ],
  augments: [
    "TFT13_Augment_FamilyCrown",
    "TFT13_Augment_FamilyCrest",
    "TFT_Augment_FindYourCenter",
    "TFT_Augment_ClimbTheLadder2",
    "TFT13_Augment_WatcherCrown",
    "TFT13_Augment_WatcherCrest",
    "TFT_Augment_Lineup",
  ],
  tips: [
    "On carousels and early slams, look for Hand Of Justice, Infinity Edge, Bloodthirster and Giant's Belt.",
    "Vander can also hold Luden's Tempest and Prowler's Claw.",
    "Favor combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-gloves-off",
  },
} satisfies Comp;
