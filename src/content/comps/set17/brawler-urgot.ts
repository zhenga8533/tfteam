import type { Comp } from "../../types";

export default {
  slug: "set17-brawler-urgot",
  name: "Brawler Urgot",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Urgot. Urgot (Quicksilver, Giant Slayer and Deathblade) carries alongside Aurora (Morellonomicon, Spear of Shojin and Rabadon's Deathcap). The board runs 2 Brawler, 2 Marauder and 2 N.O.V.A..",
  board: [
    {
      apiName: "TFT17_Urgot",
      hex: 0,
      star: 3,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_MadredsBloodrazor", "TFT_Item_Deathblade"],
    },
    {
      apiName: "TFT17_Maokai",
      hex: 1,
      star: 3,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart"],
    },
    { apiName: "TFT17_Galio", hex: 5 },
    { apiName: "TFT17_Rhaast", hex: 6, star: 3 },
    { apiName: "TFT17_Akali", hex: 20 },
    {
      apiName: "TFT17_Aurora",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_Morellonomicon", "TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  early: [
    { apiName: "TFT17_Pantheon", hex: 3 },
    { apiName: "TFT17_Urgot", hex: 9, carry: true },
    { apiName: "TFT17_Belveth", hex: 10 },
    { apiName: "TFT17_Milio", hex: 24 },
  ],
  augments: [
    "TFT_Augment_LegionOfThrees",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT9_Augment_ArmyBuilding",
    "TFT9_Augment_LongTimeCrafting",
    "TFT6_Augment_CalculatedLoss",
    "TFT6_Augment_PortableForge",
    "TFT_Augment_ForgedInStrength",
    "TFT6_Augment_GachaAddict",
  ],
  tips: [
    "On carousels and early slams, look for Quicksilver, Evenshroud, Giant Slayer and B.F. Sword.",
    "Urgot can also hold Prowler's Claw, Quicksilver and Giant Slayer.",
    "Urgot can also hold Rapid Firecannon, Fishbones and Death's Defiance.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-voyager-crab",
  },
} satisfies Comp;
