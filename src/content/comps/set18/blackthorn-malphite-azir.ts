import type { Comp } from "../../types";

export default {
  slug: "set18-blackthorn-malphite-azir",
  name: "Blackthorn Malphite & Azir",
  set: 18,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Malphite. Malphite (Gargoyle Stoneplate, Warmog's Armor and Crownguard) carries alongside Azir (Guinsoo's Rageblade, Archangel's Staff and Hextech Gunblade). The board runs 3 Summoner, 4 Blackthorn and 3 Executioner.",
  board: [
    {
      apiName: "DA_18_Malphite",
      hex: 3,
      carry: true,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor", "TFT_Item_Crownguard"],
    },
    { apiName: "DA_Amumu18", hex: 16 },
    { apiName: "DA_18_Soraka", hex: 17 },
    { apiName: "DA_18_Kennen", hex: 18 },
    { apiName: "DA_18_Yorick", hex: 19 },
    {
      apiName: "DA_18_Azir",
      hex: 21,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_ArchangelsStaff", "TFT_Item_HextechGunblade"],
    },
    {
      apiName: "DA_18_Zyra",
      hex: 23,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "DA_18_EmblemBlackthorn", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "DA_18_Veigar", hex: 25 },
    { apiName: "DA_Lux18_Base", hex: 27 },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Yunara", hex: 23 },
    {
      apiName: "DA_Karma18",
      hex: 24,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_ArchangelsStaff", "TFT_Item_GuinsoosRageblade"],
    },
  ],
  augments: [
    "DA_BlackthornTraitAugment",
    "DA_SoloPlate",
    "DA_SmallGrabBag",
    "DA_CyberneticUplink_Gold",
    "DA_UrfsGrabBag",
    "DA_URF",
  ],
  tips: [
    "On carousels and early slams, look for Gargoyle Stoneplate, Tear of the Goddess, Needlessly Large Rod and Recurve Bow.",
    "At level 8, add Fiddlesticks to the board.",
    "At level 9, add Alune to the board.",
    "Malphite can also hold Mogul's Mail, Lightshield Crest and The Indomitable.",
    "Zyra can also hold Executioner Emblem, Spear of Shojin and Void Staff.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-blackthorn-malphite",
  },
} satisfies Comp;
