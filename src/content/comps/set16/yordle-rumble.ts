import type { Comp } from "../../types";

export default {
  slug: "set16-yordle-rumble",
  name: "Yordle Rumble",
  set: 16,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Rumble. Rumble (2× Guinsoo's Rageblade and Archangel's Staff) carries alongside Ziggs  (Guinsoo's Rageblade, Jeweled Gauntlet and Void Staff). The board runs 8 Yordle, 2 Defender and 2 Longshot.",
  board: [
    { apiName: "TFT16_Kobuko", hex: 1, star: 3 },
    { apiName: "TFT16_Fizz", hex: 2, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Poppy", hex: 3 },
    {
      apiName: "TFT16_Kennen",
      hex: 5,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT16_Teemo", hex: 21 },
    { apiName: "TFT16_Lulu", hex: 23 },
    {
      apiName: "TFT16_Ziggs",
      hex: 25,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_JeweledGauntlet", "TFT_Item_StatikkShiv"],
    },
    {
      apiName: "TFT16_Rumble",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_ArchangelsStaff", "TFT_Item_GuinsoosRageblade"],
    },
  ],
  early: [
    { apiName: "TFT16_Rumble", hex: 3, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_ArchangelsStaff"] },
    { apiName: "TFT16_Teemo", hex: 23 },
    { apiName: "TFT16_Lulu", hex: 24 },
    { apiName: "TFT16_Tristana", hex: 25 },
  ],
  augments: [
    "TFT16_Augment_RumbleCarry",
    "TFT9_Augment_JeweledLotus",
    "TFT9_Augment_BigGrabBag",
    "TFT6_Augment_GachaAddict",
    "TFT_Augment_SeraphimsStaff",
    "TFT9_Augment_MissedConnections",
    "TFT16_Augment_WaterAxiom",
    "TFT9_Augment_Commander_Ascension",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Archangel's Staff, Needlessly Large Rod and Recurve Bow.",
    "At level 9, add Shyvana, Volibear , Zilean and Taric to the board.",
    "Rumble can also hold Guinsoo's Rageblade, Rabadon's Deathcap and Jeweled Gauntlet.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-artillery-barrage-rumble",
  },
} satisfies Comp;
