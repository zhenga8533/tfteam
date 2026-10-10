import type { Comp } from "../../types";

export default {
  slug: "set18-executioner-yunara",
  name: "Executioner Yunara",
  set: 18,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Yunara. Yunara (Spear of Shojin, Blackthorn Emblem and Last Whisper) carries alongside Warwick (Sterak's Gage, Titan's Resolve and Spear of Shojin). The board runs 4 Blackthorn, 3 Executioner and 2 Brawler.",
  board: [
    {
      apiName: "DA_18_Alistar",
      hex: 3,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption", "TFT_Item_WarmogsArmor"],
    },
    {
      apiName: "DA_18_Warwick",
      hex: 14,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_TitansResolve", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "DA_Murkwolf18", hex: 17, star: 3 },
    { apiName: "DA_18_RekSai", hex: 19 },
    {
      apiName: "DA_18_Yunara",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "DA_18_EmblemBlackthorn", "TFT_Item_LastWhisper"],
    },
    { apiName: "DA_18_Ezreal", hex: 23 },
    { apiName: "DA_18_Azir", hex: 24 },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 3 },
    {
      apiName: "DA_18_Yunara",
      hex: 23,
      carry: true,
      items: ["DA_18_EmblemBlackthorn", "TFT_Item_SpearOfShojin", "TFT_Item_LastWhisper"],
    },
    { apiName: "DA_Karma18", hex: 24 },
    { apiName: "DA_18_Azir", hex: 25 },
  ],
  augments: ["DA_Swordsmith", "DA_GlassCannon_Silver", "DA_SwordOverflow", "DA_SoloPlate", "DA_URF", "DA_UrfsGrabBag"],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Gargoyle Stoneplate, Recurve Bow and Sparring Gloves.",
    "At level 8, add Kennen to the board.",
    "Yunara can also hold Dawncore, Spear of Shojin and Last Whisper.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-moo-nara",
  },
} satisfies Comp;
