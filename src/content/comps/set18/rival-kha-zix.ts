import type { Comp } from "../../types";

export default {
  slug: "set18-rival-kha-zix",
  name: "Rival Kha'Zix",
  set: 18,
  tier: "S",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Kha'Zix. Kha'Zix (2× Hand Of Justice and Rabadon's Deathcap) carries alongside Diana (Jeweled Gauntlet, Hand Of Justice and Ionic Spark). The board runs 2 Flora Fatalis, 3 Elderwood and 2 Defender.",
  board: [
    {
      apiName: "DA_18_KhaZix",
      hex: 1,
      star: 3,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_UnstableConcoction", "TFT_Item_RabadonsDeathcap"],
    },
    {
      apiName: "DA_18_Hecarim",
      hex: 2,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption"],
    },
    {
      apiName: "DA_18_Diana",
      hex: 8,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction", "TFT_Item_IonicSpark"],
    },
    { apiName: "DA_18_Ornn", hex: 16 },
    { apiName: "DA_Fiddlesticks18", hex: 17 },
    {
      apiName: "DA_18_Ezreal",
      hex: 21,
      carry: true,
      items: ["TFT_Item_RapidFireCannon", "TFT_Item_SpearOfShojin", "TFT_Item_Deathblade"],
    },
    { apiName: "DA_18_Alune", hex: 22 },
    { apiName: "DA_18_Soraka", hex: 23 },
  ],
  early: [
    { apiName: "DA_18_Alistar", hex: 2 },
    { apiName: "DA_18_Ornn", hex: 3 },
    { apiName: "DA_18_KhaZix", hex: 4, carry: true, items: ["TFT_Item_UnstableConcoction", "TFT_Item_IonicSpark"] },
    { apiName: "DA_18_LeBlanc", hex: 24 },
  ],
  augments: ["DA_ChampDelivery", "DA_PandorasBench", "DA_LegionOfThrees", "DA_PrismaticTicket"],
  tips: [
    "On carousels and early slams, look for Hand Of Justice, Giant's Belt, Tear of the Goddess and Sparring Gloves.",
    "At level 8, add Taric to the board.",
    "At level 9, add Sentinel and Gnar to the board.",
    "Kha'Zix can also hold Lich Bane, Wit's End and Seeker's Armguard.",
    "Kha'Zix can also hold Luden's Tempest, Dawncore and Zhonya's Paradox.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-lunarwood-khazix",
  },
} satisfies Comp;
