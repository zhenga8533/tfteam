import type { Comp } from "../../types";

export default {
  slug: "set16-noxus-darius-ahri",
  name: "Noxus Darius & Ahri",
  set: 16,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Darius. Darius (Sterak's Gage, Titan's Resolve and Adaptive Helm) carries alongside Ahri (Spear of Shojin, Void Staff and Morellonomicon). The board runs 3 Ionia, 3 Noxus and 2 Arcanist.",
  board: [
    {
      apiName: "TFT16_Darius",
      hex: 3,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_TitansResolve", "TFT_Item_AdaptiveHelm"],
    },
    { apiName: "TFT16_Kennen", hex: 16, star: 3 },
    { apiName: "TFT16_Kobuko", hex: 17 },
    { apiName: "TFT16_Swain", hex: 18, items: ["TFT_Item_FrozenHeart"] },
    { apiName: "TFT16_Wukong", hex: 19 },
    {
      apiName: "TFT16_Leblanc",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan", "TFT_Item_Leviathan"],
    },
    {
      apiName: "TFT16_Ahri",
      hex: 23,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"],
    },
  ],
  early: [
    { apiName: "TFT16_Briar", hex: 2 },
    { apiName: "TFT16_Illaoi", hex: 3 },
    { apiName: "TFT16_Sion", hex: 4, items: ["TFT_Item_TitansResolve", "TFT_Item_SteraksGage"] },
    { apiName: "TFT16_Leblanc", hex: 24, carry: true, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan"] },
  ],
  augments: [
    "TFT16_Augment_NoxianInvasion",
    "TFT9_Augment_BigGrabBag",
    "TFT6_Augment_GachaAddict",
    "TFT_Augment_FindYourCenter",
    "TFT_Augment_Waverider",
    "TFT16_Augment_WaterAxiom",
    "TFT_Augment_BronzeForLife2",
  ],
  tips: [
    "On carousels and early slams, look for Sterak's Gage, Titan's Resolve, Recurve Bow and Tear of the Goddess.",
    "At level 8, add Taric and Shyvana to the board.",
    "Ahri can also hold Dawncore.",
    "Darius can also hold Silvermere Dawn.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-leblanc-ahri",
  },
} satisfies Comp;
