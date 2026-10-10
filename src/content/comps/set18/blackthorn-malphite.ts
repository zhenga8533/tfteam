import type { Comp } from "../../types";

export default {
  slug: "set18-blackthorn-malphite",
  name: "Blackthorn Malphite",
  set: 18,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Malphite. Malphite (Gargoyle Stoneplate, Warmog's Armor and Crownguard) carries alongside Soraka (Rabadon's Deathcap, Adaptive Helm and Jeweled Gauntlet). The board runs 3 Summoner, 2 Flora Fatalis and 3 Executioner.",
  board: [
    {
      apiName: "DA_18_Malphite",
      hex: 3,
      carry: true,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor", "TFT_Item_Crownguard"],
    },
    { apiName: "DA_Amumu18", hex: 16 },
    { apiName: "DA_Fiddlesticks18", hex: 17 },
    { apiName: "DA_18_Yorick", hex: 20 },
    {
      apiName: "DA_18_Zyra",
      hex: 21,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv", "TFT_Item_ArchangelsStaff"],
    },
    {
      apiName: "DA_18_Soraka",
      hex: 22,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_AdaptiveHelm", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "DA_18_Kennen", hex: 23 },
    { apiName: "DA_18_Azir", hex: 27 },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Yunara", hex: 23 },
    { apiName: "DA_Karma18", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv"] },
  ],
  augments: [
    "DA_BlackthornTraitAugment",
    "DA_SoloPlate",
    "DA_SmallGrabBag",
    "DA_CyberneticUplink_Gold",
    "DA_BuriedTreasuresIII",
    "DA_CommerceCore",
  ],
  tips: [
    "On carousels and early slams, look for Gargoyle Stoneplate, Tear of the Goddess, Needlessly Large Rod and Recurve Bow.",
    "At level 9, add Lillia, Ahri, Ezreal and Maokai to the board.",
    "Zyra can also hold Executioner Emblem, Spear of Shojin and Void Staff.",
    "Soraka can also hold Dawncore, Lich Bane and Eternal Pact.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-soraka-flex",
  },
} satisfies Comp;
