import type { Comp } from "../../types";

export default {
  slug: "set13-academy-jayce",
  name: "Academy Jayce",
  set: 13,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Jayce. Jayce (Infinity Edge, Spear of Shojin and Giant Slayer) carries alongside Rumble (Academy Emblem, Rabadon's Deathcap and Needlessly Large Rod). The board runs 6 Sentinel, 5 Academy and 3 Rebel.",
  board: [
    { apiName: "TFT13_Leona", hex: 1 },
    { apiName: "TFT13_Rell", hex: 2 },
    { apiName: "TFT13_Irelia", hex: 3 },
    {
      apiName: "TFT13_Rumble",
      hex: 4,
      carry: true,
      items: ["TFT13_Item_AcademyEmblemItem", "TFT_Item_RabadonsDeathcap", "TFT_Item_NeedlesslyLargeRod"],
    },
    { apiName: "TFT13_Illaoi", hex: 5, items: ["TFT_Item_RedBuff", "TFT_Item_Redemption", "TFT_Item_WarmogsArmor"] },
    {
      apiName: "TFT13_Heimerdinger",
      hex: 21,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_ArchangelsStaff", "TFT_Item_HextechGunblade"],
    },
    { apiName: "TFT13_Ezreal", hex: 23, items: ["TFT13_Item_TitanEmblemItem"] },
    {
      apiName: "TFT13_Corki",
      hex: 25,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT_Item_Deathblade"],
    },
    {
      apiName: "TFT13_Jayce",
      hex: 27,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT13_Rell", hex: 2 },
    { apiName: "TFT13_Leona", hex: 3, items: ["TFT_Item_WarmogsArmor"] },
    { apiName: "TFT13_Ezreal", hex: 23, items: ["TFT_Item_InfinityEdge", "TFT_Item_RunaansHurricane"] },
    { apiName: "TFT13_Lux", hex: 24, items: ["TFT_Item_BlueBuff", "TFT_Item_ArchangelsStaff"] },
  ],
  augments: [
    "TFT13_Augment_AcademyCrown",
    "TFT13_Augment_AcademyCrest",
    "TFT13_Augment_Academy",
    "TFT13_Augment_SentinelCrown",
    "TFT10_Augment_LittleBuddies",
    "TFT13_Augment_Sentinel",
    "TFT_Augment_GlassCannonII",
  ],
  tips: [
    "On carousels and early slams, look for Giant's Belt, B.F. Sword, Sparring Gloves and Tear of the Goddess.",
    "Illaoi can also hold Lightshield Crest.",
    "Corki can also hold Gold Collector.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-sentinel-heimer",
  },
} satisfies Comp;
