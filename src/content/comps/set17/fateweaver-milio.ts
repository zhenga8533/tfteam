import type { Comp } from "../../types";

export default {
  slug: "set17-fateweaver-milio",
  name: "Fateweaver Milio",
  set: 17,
  tier: "S",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Milio. Milio (Rabadon's Deathcap, Morellonomicon and Spear of Shojin) carries alongside Lulu (2× Nashor's Tooth and Jeweled Gauntlet). The board runs 3 Stargazer, 2 Bastion and 2 Brawler.",
  board: [
    {
      apiName: "TFT17_Pantheon",
      hex: 2,
      star: 3,
      items: ["TFT_Item_Crownguard", "TFT_Item_FrozenHeart", "TFT_Item_AdaptiveHelm"],
    },
    { apiName: "TFT17_Jax", hex: 3, star: 3 },
    { apiName: "TFT17_Maokai", hex: 4, star: 3 },
    { apiName: "TFT17_Aatrox", hex: 5 },
    { apiName: "TFT17_Rhaast", hex: 12 },
    {
      apiName: "TFT17_Lulu",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"],
    },
    {
      apiName: "TFT17_Milio",
      hex: 22,
      star: 3,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_Morellonomicon", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "TFT17_TwistedFate", hex: 26 },
  ],
  early: [
    { apiName: "TFT17_Pantheon", hex: 2 },
    { apiName: "TFT17_RekSai", hex: 3 },
    { apiName: "TFT17_Lulu", hex: 23, carry: true },
    { apiName: "TFT17_Milio", hex: 24, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap"] },
  ],
  augments: [
    "TFT6_Augment_ThriftShop",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT6_Augment_CalculatedLoss",
    "TFT10_Augment_HeroicGrabBag",
    "TFT9_Augment_ArmyBuilding",
    "TFT_Augment_ForgeRod",
    "TFT_Augment_GlassCannonII",
    "TFT_Augment_ShimmerscaleEssence",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Rabadon's Deathcap, Chain Vest and Recurve Bow.",
    "At level 9, add Blitzcrank, Jhin and Vex to the board.",
    "Milio can also hold Lich Bane.",
    "Lulu can also hold Dawncore, Sniper's Focus and Eternal Pact.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-fountain-lulu",
  },
} satisfies Comp;
