import type { Comp } from "../../types";

export default {
  slug: "set18-blossom-ashe",
  name: "Blossom Ashe",
  set: 18,
  tier: "C",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Ashe. Ashe (Spear of Shojin, Red Buff and Last Whisper) carries alongside Elder Dragon (Infinity Edge, Sterak's Gage and Striker's Flail). The board runs 3 Blossom, 2 Brawler and 2 Hunter.",
  board: [
    {
      apiName: "DA_18_Sett",
      hex: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_Redemption", "TFT_Item_NightHarvester"],
    },
    { apiName: "DA_Amumu18", hex: 10 },
    { apiName: "DA_18_Yorick", hex: 14 },
    { apiName: "DA_18_GnarSmall", hex: 17 },
    { apiName: "DA_18_Kennen", hex: 18 },
    {
      apiName: "DA_18_ElderDragon",
      hex: 19,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_SteraksGage", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "DA_Cinderling18", hex: 21 },
    {
      apiName: "DA_18_Ashe",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RapidFireCannon", "TFT_Item_LastWhisper"],
    },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Yunara", hex: 23 },
    { apiName: "DA_Karma18", hex: 24 },
  ],
  augments: [
    "DA_LevelUp",
    "DA_LuxurySubscription",
    "DA_LateGameSpecialist",
    "DA_PatientStudy",
    "DA_Swordsmith",
    "DA_SwordOverflow",
  ],
  tips: [
    "On carousels and early slams, look for Last Whisper, Spear of Shojin, Red Buff and Giant's Belt.",
    "At level 9, add Ivern to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-blossom-fast-9",
  },
} satisfies Comp;
