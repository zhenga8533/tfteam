import type { Comp } from "../../types";

export default {
  slug: "set18-adaptor-nidalee",
  name: "Adaptor Nidalee",
  set: 18,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Nidalee. Nidalee (Jeweled Gauntlet, Guinsoo's Rageblade and Striker's Flail) carries alongside Morgana (Morellonomicon, Archangel's Staff and Adaptive Helm). The board runs 4 Invoker, 3 Riftbeast and 2 Adaptor.",
  board: [
    { apiName: "DA_Taric18", hex: 2 },
    {
      apiName: "DA_Sentinel18",
      hex: 3,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_WarmogsArmor", "TFT_Item_AdaptiveHelm"],
    },
    { apiName: "DA_Scuttlecrab18", hex: 4 },
    { apiName: "DA_Vi18", hex: 5 },
    {
      apiName: "DA_18_Morgana",
      hex: 9,
      carry: true,
      items: ["TFT_Item_Morellonomicon", "TFT_Item_ArchangelsStaff", "TFT_Item_AdaptiveHelm"],
    },
    {
      apiName: "DA_Nidalee18_AP",
      hex: 21,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_GuinsoosRageblade", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "DA_KogMaw18_AD", hex: 22 },
    { apiName: "DA_18_Sentry", hex: 27 },
  ],
  early: [
    { apiName: "DA_Scuttlecrab18", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Kayle", hex: 23, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_GuinsoosRageblade"] },
    { apiName: "DA_18_Xayah", hex: 24 },
  ],
  augments: ["DA_WandOverflow", "DA_SpeedyDoubleKill", "DA_Staffsmith", "DA_BuriedTreasuresIII", "DA_TimeSkip"],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Jeweled Gauntlet, Morellonomicon and Giant's Belt.",
    "At level 9, add Rakan and Hecarim to the board.",
    "Morgana can also hold Blighting Jewel.",
    "Nidalee can also hold Flickerblades and Statikk Shiv.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-adaptor-nidalee",
  },
} satisfies Comp;
