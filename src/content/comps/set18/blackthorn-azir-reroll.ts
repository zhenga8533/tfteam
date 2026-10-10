import type { Comp } from "../../types";

export default {
  slug: "set18-blackthorn-azir-reroll",
  name: "Blackthorn Azir (Reroll)",
  set: 18,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Azir. Azir (Archangel's Staff, Hextech Gunblade and Jeweled Gauntlet) carries. The board runs 3 Blossom, 2 Blackthorn and 2 Brawler.",
  board: [
    {
      apiName: "DA_Vi18",
      hex: 3,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "DA_18_Sett", hex: 16 },
    { apiName: "DA_18_KhaZix", hex: 17, star: 3 },
    { apiName: "DA_18_Yorick", hex: 18 },
    { apiName: "DA_18_RekSai", hex: 19 },
    {
      apiName: "DA_18_Azir",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_HextechGunblade", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "DA_18_Yunara", hex: 22, items: ["TFT_Item_StatikkShiv"] },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 3 },
    { apiName: "DA_Karma18", hex: 23 },
    { apiName: "DA_18_Yunara", hex: 24 },
    { apiName: "DA_18_Azir", hex: 25, carry: true },
  ],
  augments: [
    "DA_ChampDelivery",
    "DA_PandorasBench",
    "DA_LegionOfThrees",
    "DA_PrismaticTicket",
    "DA_BlackthornTraitAugment",
    "DA_ArcaneViktory",
  ],
  tips: [
    "On carousels and early slams, look for Hextech Gunblade, Gargoyle Stoneplate, Archangel's Staff and Needlessly Large Rod.",
    "Azir can also hold Seeker's Armguard, Flickerblades and Eternal Pact.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-azir-reroll",
  },
} satisfies Comp;
