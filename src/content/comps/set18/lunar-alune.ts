import type { Comp } from "../../types";

export default {
  slug: "set18-lunar-alune",
  name: "Lunar Alune",
  set: 18,
  tier: "B",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Alune. Alune (Blue Buff, Archangel's Staff and Jeweled Gauntlet) carries alongside Lux (Spear of Shojin, Void Staff and Morellonomicon). The board runs 5 Vanguard, 2 Defender and 2 Fae.",
  board: [
    { apiName: "DA_Fiddlesticks18", hex: 0 },
    {
      apiName: "DA_Sentinel18",
      hex: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_Crownguard", "TFT_Item_FrozenHeart"],
    },
    { apiName: "DA_Taric18", hex: 4 },
    { apiName: "DA_18_Lillia", hex: 6 },
    { apiName: "DA_18_Hecarim", hex: 9 },
    { apiName: "DA_18_Diana", hex: 10 },
    { apiName: "DA_18_Rakan", hex: 11 },
    {
      apiName: "DA_Lux18_Base",
      hex: 26,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"],
    },
    {
      apiName: "DA_18_Alune",
      hex: 27,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_ArchangelsStaff", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Yunara", hex: 23 },
    { apiName: "DA_Karma18", hex: 24 },
  ],
  augments: [
    "DA_BirthdayReunion",
    "DA_BirthdayPresent",
    "DA_UpwardMobility",
    "DA_LevelUp",
    "DA_LuxurySubscription",
    "DA_LateGameSpecialist",
    "DA_ExplosiveGrowthPlus",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Gargoyle Stoneplate, Needlessly Large Rod and Tear of the Goddess.",
    "At level 9, add Ivern, Morgana and Lillia to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-ap-95",
  },
} satisfies Comp;
