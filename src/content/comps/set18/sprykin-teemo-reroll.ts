import type { Comp } from "../../types";

export default {
  slug: "set18-sprykin-teemo-reroll",
  name: "Sprykin Teemo (Reroll)",
  set: 18,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Teemo. Teemo (Spear of Shojin, Rabadon's Deathcap and Jeweled Gauntlet) carries. The board runs 5 Sprykin, 2 Blackthorn and 2 Brawler.",
  board: [
    {
      apiName: "DA_18_RekSai",
      hex: 3,
      star: 3,
      items: ["DA_18_EmblemSprykin", "TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "DA_Fiddlesticks18", hex: 16 },
    { apiName: "DA_18_Kobuko", hex: 17, star: 3 },
    { apiName: "DA_18_Rammus", hex: 18 },
    { apiName: "DA_18_Veigar", hex: 25 },
    { apiName: "DA_KogMaw18_AD", hex: 26, items: ["TFT_Item_Morellonomicon"] },
    {
      apiName: "DA_18_Teemo",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "DA_18_RekSai", hex: 2 },
    { apiName: "DA_18_Kobuko", hex: 3 },
    { apiName: "DA_18_Teemo", hex: 23, carry: true },
    { apiName: "DA_18_Veigar", hex: 24 },
  ],
  augments: ["DA_DeadlierCaps", "DA_18_SprykinAugment", "DA_SoloPlate", "DA_URF", "DA_UrfsGrabBag"],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Rabadon's Deathcap, Gargoyle Stoneplate and Needlessly Large Rod.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-sprykin-teemo",
  },
} satisfies Comp;
