import type { Comp } from "../../types";

export default {
  slug: "set18-blackthorn-azir",
  name: "Blackthorn Azir",
  set: 18,
  tier: "S",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Azir. Azir (Guinsoo's Rageblade, Rabadon's Deathcap and Hextech Gunblade) carries. The board runs 2 Flora Fatalis, 3 Sprykin and 2 Blackthorn.",
  board: [
    {
      apiName: "DA_18_Rammus",
      hex: 3,
      star: 3,
      items: ["TFT_Item_Crownguard", "TFT_Item_GargoyleStoneplate", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "DA_18_Teemo", hex: 17, star: 3 },
    { apiName: "DA_Fiddlesticks18", hex: 18 },
    {
      apiName: "DA_18_Azir",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RabadonsDeathcap", "TFT_Item_HextechGunblade"],
    },
    { apiName: "DA_18_Zyra", hex: 23, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    { apiName: "DA_18_Soraka", hex: 25 },
    { apiName: "DA_18_Veigar", hex: 27 },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 3 },
    { apiName: "DA_18_Yunara", hex: 23 },
    { apiName: "DA_Karma18", hex: 24 },
    { apiName: "DA_18_Azir", hex: 25, carry: true, items: ["TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "DA_WandOverflow",
    "DA_DeadlierCaps",
    "DA_LegionOfThrees",
    "DA_PrismaticTicket",
    "DA_BlackthornTraitAugment",
    "DA_PandorasItemsIII",
    "DA_SoloPlate",
    "DA_CyberneticUplink_Gold",
  ],
  tips: [
    "On carousels and early slams, look for Gargoyle Stoneplate, Needlessly Large Rod, Recurve Bow and B.F. Sword.",
    "At level 8, add Kennen to the board.",
    "At level 9, add Lux to the board.",
    "Azir can also hold Flickerblades.",
    "Rammus can also hold Lightshield Crest.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-azir-rammus",
  },
} satisfies Comp;
