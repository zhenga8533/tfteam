import type { Comp } from "../../types";

export default {
  slug: "set18-elderwood-ezreal",
  name: "Elderwood Ezreal",
  set: 18,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Ezreal. Ezreal (Spear of Shojin, Last Whisper and Deathblade) carries alongside Soraka (Spear of Shojin, Rabadon's Deathcap and Elderwood Emblem). The board runs 2 Flora Fatalis, 5 Elderwood and 3 Executioner.",
  board: [
    { apiName: "DA_18_Ornn", hex: 1 },
    { apiName: "DA_Taric18", hex: 2 },
    { apiName: "DA_18_Hecarim", hex: 3, items: ["TFT_Item_DragonsClaw", "TFT_Item_BrambleVest", "TFT_Item_RedBuff"] },
    { apiName: "DA_18_Kennen", hex: 4 },
    { apiName: "DA_Fiddlesticks18", hex: 5 },
    { apiName: "DA_18_GnarSmall", hex: 10, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "DA_Lux18_Base", hex: 21, items: ["TFT_Item_SpearOfShojin"] },
    {
      apiName: "DA_18_Soraka",
      hex: 25,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap", "DA_18_EmblemElderwood"],
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
    "At level 9, add LeBlanc and Ivern to the board.",
    "Ezreal can also hold Dawncore and Gold Collector.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-elderwood-executioners",
  },
} satisfies Comp;
