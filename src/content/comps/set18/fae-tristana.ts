import type { Comp } from "../../types";

export default {
  slug: "set18-fae-tristana",
  name: "Fae Tristana",
  set: 18,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Tristana. Tristana (Guinsoo's Rageblade, Hextech Gunblade and Giant Slayer) carries alongside Sivir (Fae Emblem, Last Whisper and Red Buff). The board runs 4 Fae, 3 Sprykin and 2 Defender.",
  board: [
    {
      apiName: "DA_18_Rammus",
      hex: 4,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "DA_Vi18", hex: 10, star: 3 },
    { apiName: "DA_18_Kobuko", hex: 15 },
    { apiName: "DA_18_Lillia", hex: 16 },
    { apiName: "DA_18_Rakan", hex: 17 },
    {
      apiName: "DA_18_Sivir",
      hex: 26,
      carry: true,
      items: ["DA_18_EmblemFae", "TFT_Item_LastWhisper", "TFT_Item_RapidFireCannon"],
    },
    {
      apiName: "DA_18_Tristana",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "DA_18_Hecarim", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Xayah", hex: 23 },
    { apiName: "DA_18_Varus", hex: 24 },
  ],
  augments: ["DA_URF", "DA_UrfsGrabBag", "DA_Swordsmith"],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Hextech Gunblade, B.F. Sword and Recurve Bow.",
    "At level 9, add Ashe to the board.",
    "Tristana can also hold Flickerblades.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-sprykin-trist",
  },
} satisfies Comp;
