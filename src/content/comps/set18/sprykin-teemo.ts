import type { Comp } from "../../types";

export default {
  slug: "set18-sprykin-teemo",
  name: "Sprykin Teemo",
  set: 18,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Teemo. Teemo (Void Staff, Morellonomicon and Spear of Shojin) carries alongside LeBlanc (Spear of Shojin, Jeweled Gauntlet and Striker's Flail). The board runs 3 Elderwood, 3 Sprykin and 2 Brawler.",
  board: [
    {
      apiName: "DA_18_Alistar",
      hex: 4,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "DA_18_Kobuko", hex: 15 },
    { apiName: "DA_18_Hecarim", hex: 17 },
    { apiName: "DA_Sentinel18", hex: 18 },
    { apiName: "DA_18_Veigar", hex: 21 },
    {
      apiName: "DA_18_LeBlanc",
      hex: 26,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
    {
      apiName: "DA_18_Teemo",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon", "TFT_Item_SpearOfShojin"],
    },
  ],
  early: [
    { apiName: "DA_18_RekSai", hex: 2 },
    { apiName: "DA_18_Kobuko", hex: 3 },
    { apiName: "DA_18_Teemo", hex: 23, carry: true },
    { apiName: "DA_18_Veigar", hex: 24 },
  ],
  augments: ["DA_DeadlierCaps", "DA_18_SprykinAugment", "DA_SoloPlate", "DA_PandorasBench"],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Gargoyle Stoneplate, Void Staff and Needlessly Large Rod.",
    "At level 9, add Kog'Maw, Morgana and Gnar to the board.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-sprykin-teemo-copy",
  },
} satisfies Comp;
