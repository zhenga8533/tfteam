import type { Comp } from "../../types";

export default {
  slug: "set18-blossom-yunara",
  name: "Blossom Yunara",
  set: 18,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Yunara. Yunara (Deathblade, Spear of Shojin and Last Whisper) carries alongside Karma (Spear of Shojin, Void Staff and Jeweled Gauntlet). The board runs 3 Solar, 3 Blossom and 2 Executioner.",
  board: [
    {
      apiName: "DA_18_Sejuani",
      hex: 3,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "DA_18_Yorick", hex: 17, star: 3 },
    { apiName: "DA_18_Leona", hex: 21, star: 3 },
    { apiName: "DA_18_Azir", hex: 22 },
    { apiName: "DA_18_Kayle", hex: 23 },
    { apiName: "DA_18_LeBlanc", hex: 25 },
    {
      apiName: "DA_Karma18",
      hex: 26,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv", "TFT_Item_JeweledGauntlet"],
    },
    {
      apiName: "DA_18_Yunara",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_Deathblade", "TFT_Item_SpearOfShojin", "TFT_Item_LastWhisper"],
    },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 3 },
    { apiName: "DA_18_LeBlanc", hex: 23 },
    { apiName: "DA_Karma18", hex: 24, carry: true },
    { apiName: "DA_18_Yunara", hex: 25, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_LastWhisper"] },
  ],
  augments: [
    "DA_Swordsmith",
    "DA_SwordOverflow",
    "DA_SoloPlate",
    "DA_PandorasBench",
    "DA_PrismaticTicket",
    "DA_KickStart",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Gargoyle Stoneplate, Last Whisper and B.F. Sword.",
    "At level 9, add Fiddlesticks and Soraka to the board.",
    "Yunara can also hold Dawncore, Spear of Shojin and Deathblade.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-solara-yunara",
  },
} satisfies Comp;
