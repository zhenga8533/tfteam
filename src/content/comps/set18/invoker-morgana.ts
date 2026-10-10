import type { Comp } from "../../types";

export default {
  slug: "set18-invoker-morgana",
  name: "Invoker Morgana",
  set: 18,
  tier: "C",
  playstyle: "Flex",
  difficulty: "Hard",
  summary:
    "Lose streaks through the early game, then stabilizes around Morgana. Morgana (Morellonomicon, Rabadon's Deathcap and Void Staff) carries alongside Brambleback (Edge of Night, Giant Slayer and Quicksilver). The board runs 5 Invoker, 4 Vanguard and 3 Riftbeast.",
  board: [
    { apiName: "DA_18_Hecarim", hex: 1 },
    { apiName: "DA_Taric18", hex: 2 },
    { apiName: "DA_18_Diana", hex: 3 },
    {
      apiName: "DA_Sentinel18",
      hex: 4,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_WarmogsArmor", "TFT_Item_AdaptiveHelm"],
    },
    {
      apiName: "DA_18_Morgana",
      hex: 18,
      carry: true,
      items: ["TFT_Item_Morellonomicon", "TFT_Item_RabadonsDeathcap", "TFT_Item_StatikkShiv"],
    },
    {
      apiName: "DA_Brambleback18",
      hex: 19,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_MadredsBloodrazor", "TFT_Item_Quicksilver"],
    },
    { apiName: "DA_18_Sentry", hex: 23 },
    { apiName: "DA_18_Alune", hex: 25, items: ["DA_18_EmblemInvoker"] },
    { apiName: "DA_KogMaw18_AD", hex: 26 },
  ],
  early: [
    { apiName: "DA_18_Rammus", hex: 2 },
    { apiName: "DA_18_Kobuko", hex: 3 },
    { apiName: "DA_18_Teemo", hex: 23, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    { apiName: "DA_18_Sentry", hex: 24 },
  ],
  augments: [
    "DA_18_CovenTraitAugment_LootToAP",
    "DA_18_CovenTraitAugment",
    "DA_WandOverflow",
    "DA_SeraphimsStaff",
    "DA_Staffsmith",
    "DA_DeadlierCaps",
    "DA_BoosterPack",
    "DA_18_OnesTwosThree",
  ],
  tips: [
    "On carousels and early slams, look for Morellonomicon, Void Staff, Needlessly Large Rod and Tear of the Goddess.",
    "At level 9, add Ivern to the board.",
    "Morgana can also hold Blighting Jewel.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-cashout-morgana",
  },
} satisfies Comp;
