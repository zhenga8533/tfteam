import type { Comp } from "../../types";

export default {
  slug: "set17-rogue-kai-sa",
  name: "Rogue Kai'Sa",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Kai'Sa. Kai'Sa (Spear of Shojin, Striker's Flail and Infinity Edge) carries alongside Fizz (Jeweled Gauntlet, Hand Of Justice and Nashor's Tooth). The board runs 4 Rogue, 3 Meeple and 2 Bastion.",
  board: [
    { apiName: "TFT17_Rammus", hex: 1 },
    { apiName: "TFT17_IvernMinion", hex: 2 },
    { apiName: "TFT17_Rhaast", hex: 3, star: 3, items: ["TFT17_Item_AssassinTraitEmblemItem"] },
    { apiName: "TFT17_Riven", hex: 4, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT17_Ornn",
      hex: 5,
      star: 3,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_Redemption", "TFT_Item_NightHarvester"],
    },
    {
      apiName: "TFT17_Fizz",
      hex: 20,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT17_Karma", hex: 21 },
    {
      apiName: "TFT17_Kaisa",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_PowerGauntlet", "TFT_Item_InfinityEdge"],
    },
  ],
  early: [
    { apiName: "TFT17_Pantheon", hex: 2 },
    { apiName: "TFT17_Chogath", hex: 3 },
    { apiName: "TFT17_Kaisa", hex: 23, carry: true },
    { apiName: "TFT17_Ezreal", hex: 24 },
  ],
  augments: [
    "TFT10_Augment_HeroicGrabBag",
    "TFT6_Augment_TradeSector",
    "TFT6_Augment_GachaAddict",
    "TFT6_Augment_CalculatedLoss",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT_Augment_LegionOfThrees",
    "TFT_Augment_BacklineBlueprint",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, B.F. Sword, Sparring Gloves and Giant's Belt.",
    "Fizz can also hold Dawncore, Lich Bane and Wit's End.",
    "Kai'Sa can also hold Blue Buff, Last Whisper and Infinity Edge.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-rogue-reroll",
  },
} satisfies Comp;
