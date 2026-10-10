import type { Comp } from "../../types";

export default {
  slug: "set16-yordle-veigar",
  name: "Yordle Veigar",
  set: 16,
  tier: "S",
  playstyle: "Fast 9",
  difficulty: "Easy",
  summary:
    "A level 9 comp that caps its board around Veigar. Veigar (Spear of Shojin, Rabadon's Deathcap and Hextech Gunblade) carries alongside Ziggs  (Guinsoo's Rageblade, Void Staff and Jeweled Gauntlet). The board runs 8 Yordle, 2 Arcanist and 2 Bruiser.",
  board: [
    { apiName: "TFT16_Wukong", hex: 1 },
    { apiName: "TFT16_Kobuko", hex: 2, star: 3 },
    { apiName: "TFT16_Rumble", hex: 3 },
    {
      apiName: "TFT16_Kennen",
      hex: 5,
      star: 3,
      items: ["TFT_Item_BrambleVest", "TFT_Item_RedBuff", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT16_Fizz", hex: 6 },
    {
      apiName: "TFT16_Ziggs",
      hex: 21,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_StatikkShiv", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT16_Teemo", hex: 23 },
    { apiName: "TFT16_Lulu", hex: 25 },
    {
      apiName: "TFT16_Veigar",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap", "TFT_Item_HextechGunblade"],
    },
  ],
  early: [
    { apiName: "TFT16_Rumble", hex: 3 },
    { apiName: "TFT16_Teemo", hex: 23 },
    { apiName: "TFT16_Lulu", hex: 24, items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_SpearOfShojin"] },
    { apiName: "TFT16_Tristana", hex: 25 },
  ],
  augments: [
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_DeadlierCaps",
    "TFT_Augment_WandOverflow",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_OneBuffTwoBuff",
    "TFT16_Augment_WaterAxiom",
    "TFT_Augment_MagicRoll",
    "TFT6_Augment_TradeSector",
  ],
  tips: [
    "On carousels and early slams, look for Needlessly Large Rod, Tear of the Goddess, B.F. Sword and Recurve Bow.",
    "At level 9, add Braum, Ornn, Sett and Zilean to the board.",
    "Veigar can also hold 2× Nashor's Tooth and Rabadon's Deathcap.",
    "Veigar can also hold Spear of Shojin, Rabadon's Deathcap and Hextech Gunblade.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-i-am-evil",
  },
} satisfies Comp;
