import type { Comp } from "../../types";

export default {
  slug: "set18-executioner-ezreal",
  name: "Executioner Ezreal",
  set: 18,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Ezreal. Ezreal (Spear of Shojin, Last Whisper and Deathblade) carries alongside Ahri (Executioner Emblem, Morellonomicon and Spear of Shojin). The board runs 4 Executioner, 2 Flora Fatalis and 3 Blossom.",
  board: [
    { apiName: "DA_18_Ornn", hex: 1 },
    { apiName: "DA_18_Alistar", hex: 2 },
    { apiName: "DA_Fiddlesticks18", hex: 3 },
    {
      apiName: "DA_18_Sett",
      hex: 4,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "DA_18_Yunara", hex: 21 },
    { apiName: "DA_18_Soraka", hex: 23 },
    {
      apiName: "DA_18_Ahri",
      hex: 25,
      carry: true,
      items: ["DA_18_EmblemExecutioner", "TFT_Item_Morellonomicon", "TFT_Item_SpearOfShojin"],
    },
    {
      apiName: "DA_18_Ezreal",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_LastWhisper", "TFT_Item_Deathblade"],
    },
  ],
  early: [
    { apiName: "DA_18_Shen", hex: 2 },
    { apiName: "DA_18_Ornn", hex: 3 },
    { apiName: "DA_18_LeBlanc", hex: 23, items: ["TFT_Item_SpearOfShojin"] },
    { apiName: "DA_18_Xayah", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_LastWhisper"] },
  ],
  augments: [
    "DA_18_ElderwoodTraitAugment",
    "DA_BodyguardTraining",
    "DA_18_LuxAugmentII",
    "DA_SwordOverflow",
    "DA_Swordsmith",
    "DA_Staffsmith",
    "DA_WandOverflow",
    "DA_CommerceCore",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, B.F. Sword, Sparring Gloves and Recurve Bow.",
    "At level 9, add LeBlanc, Kennen and Lux to the board.",
    "Ezreal can also hold Gold Collector and Dawncore.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-woodblossom",
  },
} satisfies Comp;
