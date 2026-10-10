import type { Comp } from "../../types";

export default {
  slug: "set16-demacia-vayne",
  name: "Demacia Vayne",
  set: 16,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Vayne. Vayne (2× Kraken's Fury and Hextech Gunblade) carries alongside Kai'Sa  (Spear of Shojin, Infinity Edge and Last Whisper). The board runs 1 Targon, 5 Demacia and 3 Longshot.",
  board: [
    { apiName: "TFT16_Taric", hex: 0 },
    { apiName: "TFT16_Swain", hex: 2 },
    { apiName: "TFT16_JarvanIV", hex: 3 },
    { apiName: "TFT16_Garen", hex: 4, items: ["TFT_Item_RedBuff", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"] },
    { apiName: "TFT16_Poppy", hex: 6 },
    { apiName: "TFT16_Galio", hex: 17 },
    { apiName: "TFT16_KogMaw", hex: 23 },
    {
      apiName: "TFT16_Vayne",
      hex: 25,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_HextechGunblade", "TFT_Item_RunaansHurricane"],
    },
    {
      apiName: "TFT16_Kaisa",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge", "TFT_Item_LastWhisper"],
    },
  ],
  early: [
    { apiName: "TFT16_Rumble", hex: 2 },
    { apiName: "TFT16_JarvanIV", hex: 3 },
    { apiName: "TFT16_Poppy", hex: 4, items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"] },
    {
      apiName: "TFT16_Vayne",
      hex: 24,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_InfinityEdge", "TFT_Item_LastWhisper"],
    },
  ],
  augments: [
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT_Augment_HeavyIsTheCrown",
    "TFT11_Augment_Epoch",
    "TFT_Augment_FoodfightTactics",
    "TFT9_Augment_Commander_RollingForDays",
    "TFT_Augment_GlassCannonII",
    "TFT16_Augment_AirAxiom",
    "TFT_Augment_GlassCannonI",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Sparring Gloves, B.F. Sword and Negatron Cloak.",
    "At level 9, add Ryze , Shyvana and Ziggs  to the board.",
    "Vayne can also hold Gold Collector and Flickerblades.",
    "Kai'Sa  can also hold Guinsoo's Rageblade, Hextech Gunblade and Jeweled Gauntlet.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-longshot-cap",
  },
} satisfies Comp;
