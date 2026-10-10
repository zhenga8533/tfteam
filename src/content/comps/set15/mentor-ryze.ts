import type { Comp } from "../../types";

export default {
  slug: "set15-mentor-ryze",
  name: "Mentor Ryze",
  set: 15,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Ryze. Ryze (Archangel's Staff, Void Staff and Giant Slayer) carries alongside Volibear (Kraken's Fury, Giant Slayer and Edge of Night). The board runs 4 Mentor, 3 Mighty Mech and 2 Edgelord.",
  board: [
    { apiName: "TFT15_Aatrox", hex: 1 },
    { apiName: "TFT15_JarvanIV", hex: 2, items: ["TFT_Item_FrozenHeart"] },
    { apiName: "TFT15_Yasuo", hex: 3 },
    { apiName: "TFT15_Kobuko", hex: 4 },
    { apiName: "TFT15_Udyr", hex: 5 },
    {
      apiName: "TFT15_Volibear",
      hex: 7,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor", "TFT_Item_GuardianAngel"],
    },
    {
      apiName: "TFT15_Ryze",
      hex: 21,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_StatikkShiv", "TFT_Item_MadredsBloodrazor"],
    },
    { apiName: "TFT15_Senna", hex: 23 },
  ],
  early: [
    { apiName: "TFT15_Gangplank", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Kobuko", hex: 4 },
    {
      apiName: "TFT15_Lucian",
      hex: 24,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_StatikkShiv", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  augments: [
    "TFT9_Augment_HighEndSector",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT_Augment_LastSecondSave",
    "TFT_Augment_WaterLotus1",
    "TFT11_Augment_RadiantRefactor",
    "TFT9_Augment_BigGrabBag",
  ],
  tips: [
    "On carousels and early slams, look for Archangel's Staff, Recurve Bow, Tear of the Goddess and B.F. Sword.",
    "At level 9, add Lee Sin and Yone to the board.",
    "Ryze can also hold Fishbones.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-mentor-mecha-fast-9",
  },
} satisfies Comp;
