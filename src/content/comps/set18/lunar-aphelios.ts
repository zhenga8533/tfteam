import type { Comp } from "../../types";

export default {
  slug: "set18-lunar-aphelios",
  name: "Lunar Aphelios",
  set: 18,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Aphelios. Aphelios (Infinity Edge, Guinsoo's Rageblade and Kraken's Fury) carries alongside Nidalee (Spear of Shojin, Sterak's Gage and Infinity Edge). The board runs 2 Adaptor, 2 Inferno and 2 Invoker.",
  board: [
    { apiName: "DA_Amumu18", hex: 2 },
    {
      apiName: "DA_Sentinel18",
      hex: 3,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_FrozenHeart", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "DA_18_Diana", hex: 9 },
    { apiName: "DA_Vi18", hex: 10 },
    {
      apiName: "DA_Nidalee18_AP",
      hex: 14,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_SteraksGage", "TFT_Item_InfinityEdge"],
    },
    {
      apiName: "DA_18_Aphelios",
      hex: 21,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"],
    },
    { apiName: "DA_KogMaw18_AD", hex: 22 },
    { apiName: "DA_18_Varus", hex: 27 },
  ],
  early: [
    { apiName: "DA_18_Shen", hex: 1 },
    { apiName: "DA_18_Camille", hex: 2 },
    {
      apiName: "DA_18_Akali_AD",
      hex: 3,
      items: ["TFT_Item_SteraksGage", "TFT_Item_InfinityEdge", "TFT_Item_GuinsoosRageblade"],
    },
    { apiName: "DA_18_Leona", hex: 4 },
  ],
  augments: [
    "DA_Swordsmith",
    "DA_SwordOverflow",
    "DA_BlackthornTraitAugment",
    "DA_BuriedTreasuresIII",
    "DA_18_FOURcing",
    "DA_OneBuffTwoBuff",
    "DA_EpicRolldown",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Chain Vest and Recurve Bow.",
    "At level 9, add Scuttlecrab and Brambleback to the board.",
    "Aphelios can also hold Infinity Edge and Gold Collector.",
    "Nidalee can also hold Silvermere Dawn, Blue Buff and Sterak's Gage.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-aphelios-nidalee",
  },
} satisfies Comp;
