import type { Comp } from "../../types";

export default {
  slug: "set18-riftbeast-elder-dragon",
  name: "Riftbeast Elder Dragon",
  set: 18,
  tier: "B",
  playstyle: "Fast 9",
  difficulty: "Medium",
  summary:
    "A level 9 comp that caps its board around Elder Dragon. Elder Dragon (Infinity Edge, Striker's Flail and Deathblade) carries alongside Brambleback (Edge of Night, Quicksilver and Giant Slayer). The board runs 9 Riftbeast, 2 Brawler and 2 Invoker.",
  board: [
    { apiName: "DA_Krug18", hex: 0 },
    { apiName: "DA_Scuttlecrab18", hex: 1 },
    {
      apiName: "DA_Brambleback18",
      hex: 2,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_Quicksilver", "TFT_Item_MadredsBloodrazor"],
    },
    {
      apiName: "DA_Sentinel18",
      hex: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart", "TFT_Item_Crownguard"],
    },
    { apiName: "DA_Taric18", hex: 4 },
    { apiName: "DA_18_GnarSmall", hex: 16, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "DA_18_ElderDragon",
      hex: 17,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet", "TFT_Item_Deathblade"],
    },
    { apiName: "DA_Gromp18_AP", hex: 21 },
    { apiName: "DA_18_Sentry", hex: 23 },
    { apiName: "DA_CrimsonRaptor18", hex: 25 },
    { apiName: "DA_Murkwolf18", hex: 27 },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_Scuttlecrab18", hex: 3 },
    { apiName: "DA_18_Sentry", hex: 23 },
    { apiName: "DA_Cinderling18", hex: 24, items: ["TFT_Item_InfinityEdge"] },
  ],
  augments: [
    "DA_18_RiftbeastTraitAugment",
    "DA_Coronation",
    "DA_LevelUp",
    "DA_LateGameSpecialist",
    "DA_Swordsmith",
    "DA_ExplosiveGrowthPlus",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, B.F. Sword, Sparring Gloves and Giant's Belt.",
    "At level 10, add Lux, Ivern and Draven to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-10-riftbeast",
  },
} satisfies Comp;
