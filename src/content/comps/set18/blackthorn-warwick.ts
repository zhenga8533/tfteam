import type { Comp } from "../../types";

export default {
  slug: "set18-blackthorn-warwick",
  name: "Blackthorn Warwick",
  set: 18,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Warwick. Warwick (Sterak's Gage, Titan's Resolve and Spear of Shojin) carries. The board runs 4 Blackthorn, 3 Ravager and 3 Riftbeast.",
  board: [
    {
      apiName: "DA_18_Malphite",
      hex: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_Crownguard"],
    },
    { apiName: "DA_Brambleback18", hex: 16, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "DA_Murkwolf18", hex: 17, star: 3 },
    { apiName: "DA_Krug18", hex: 18, star: 3 },
    { apiName: "DA_18_RekSai", hex: 20 },
    { apiName: "DA_18_Azir", hex: 21 },
    {
      apiName: "DA_18_Warwick",
      hex: 23,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_TitansResolve", "TFT_Item_SpearOfShojin"],
    },
  ],
  early: [
    { apiName: "DA_18_Warwick", hex: 1, carry: true },
    { apiName: "DA_18_RekSai", hex: 2 },
    { apiName: "DA_18_Kobuko", hex: 3 },
    { apiName: "DA_Murkwolf18", hex: 4 },
  ],
  augments: ["DA_LivingForge", "DA_NestingAnvils", "DA_URF", "DA_UrfsGrabBag"],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Titan's Resolve, B.F. Sword and Giant's Belt.",
    "At level 9, add Diana and Sentinel to the board.",
    "Warwick can also hold Mittens, Titan's Resolve and Sterak's Gage.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-warwick-rr",
  },
} satisfies Comp;
