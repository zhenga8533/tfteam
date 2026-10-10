import type { Comp } from "../../types";

export default {
  slug: "set16-ionia-ahri-milio",
  name: "Ionia Ahri & Milio",
  set: 16,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Ahri. Ahri (Nashor's Tooth, Jeweled Gauntlet and Striker's Flail) carries alongside Milio (Void Staff, Morellonomicon and Spear of Shojin). The board runs 3 Ionia, 3 Ixtal and 2 Arcanist.",
  board: [
    { apiName: "TFT16_Neeko", hex: 0 },
    { apiName: "TFT16_Wukong", hex: 2 },
    { apiName: "TFT16_Kobuko", hex: 3 },
    {
      apiName: "TFT16_Kennen",
      hex: 4,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT16_Nidalee", hex: 6, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Bard", hex: 21 },
    {
      apiName: "TFT16_Milio",
      hex: 26,
      star: 3,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon", "TFT_Item_SpearOfShojin"],
    },
    {
      apiName: "TFT16_Ahri",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT16_Rumble", hex: 2 },
    { apiName: "TFT16_Qiyana", hex: 3 },
    { apiName: "TFT16_Neeko", hex: 4 },
    { apiName: "TFT16_Milio", hex: 24, carry: true, items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT16_Augment_Ixtal_Expeditionist",
    "TFT_Augment_SmallGrabBag",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_BronzeForLifeI",
    "TFT_Augment_BronzeForLife2",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT_Augment_HomeCooking",
  ],
  tips: [
    "On carousels and early slams, look for Nashor's Tooth, Jeweled Gauntlet, Recurve Bow and Tear of the Goddess.",
    "At level 9, add Taric and Brock to the board.",
    "Ahri can also hold Dawncore.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-ahri-milio",
  },
} satisfies Comp;
