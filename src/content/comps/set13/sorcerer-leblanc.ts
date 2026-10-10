import type { Comp } from "../../types";

export default {
  slug: "set13-sorcerer-leblanc",
  name: "Sorcerer LeBlanc",
  set: 13,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for LeBlanc. LeBlanc (Void Staff and Red Buff) carries alongside Zoe (Spear of Shojin, Jeweled Gauntlet and Striker's Flail). The board runs 6 Sorcerer, 3 Black Rose and 3 Rebel.",
  board: [
    { apiName: "TFT13_Swain", hex: 1 },
    { apiName: "TFT13_Vladimir", hex: 2 },
    {
      apiName: "TFT13_Illaoi",
      hex: 3,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT13_Irelia", hex: 4 },
    { apiName: "TFT13_Nami", hex: 21 },
    { apiName: "TFT13_LeBlanc", hex: 23, carry: true, items: ["TFT_Item_StatikkShiv", "TFT_Item_RapidFireCannon"] },
    {
      apiName: "TFT13_Zoe",
      hex: 25,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT13_Elise", hex: 27, items: ["TFT13_Item_SorcererEmblemItem", "TFT_Item_SpearOfShojin"] },
  ],
  early: [
    { apiName: "TFT13_Vladimir", hex: 2 },
    { apiName: "TFT13_Darius", hex: 3 },
    { apiName: "TFT13_Swain", hex: 4 },
    { apiName: "TFT13_Lux", hex: 23 },
    { apiName: "TFT13_Zyra", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT11_Augment_RainingGold",
    "TFT_Augment_BlazingSoul2",
    "TFT_Augment_GlassCannonII",
    "TFT_Augment_QualityOverQuantity",
    "TFT_Augment_FiresalePlus",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Jeweled Gauntlet, Needlessly Large Rod and Giant's Belt.",
    "Zoe can also hold Manazane.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-emissary-flex-ap",
  },
} satisfies Comp;
