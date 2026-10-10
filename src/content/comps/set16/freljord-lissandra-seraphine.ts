import type { Comp } from "../../types";

export default {
  slug: "set16-freljord-lissandra-seraphine",
  name: "Freljord Lissandra & Seraphine",
  set: 16,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Lissandra. Lissandra (Spear of Shojin, Void Staff and Archangel's Staff) carries alongside Seraphine (2× Nashor's Tooth and Jeweled Gauntlet). The board runs 4 Piltover, 3 Freljord and 2 Defender.",
  board: [
    { apiName: "TFT16_Sejuani", hex: 3 },
    { apiName: "TFT16_Braum", hex: 4, items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor", "TFT_Item_NightHarvester"] },
    { apiName: "TFT16_Loris", hex: 9 },
    { apiName: "TFT16_Vi", hex: 17 },
    { apiName: "TFT16_Renekton", hex: 18, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Azir", hex: 21 },
    { apiName: "TFT16_Orianna", hex: 23 },
    {
      apiName: "TFT16_Lissandra",
      hex: 25,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv", "TFT_Item_ArchangelsStaff"],
    },
    {
      apiName: "TFT16_Seraphine",
      hex: 27,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT16_Sejuani", hex: 2 },
    { apiName: "TFT16_Vi", hex: 3 },
    { apiName: "TFT16_Orianna", hex: 23, items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"] },
    { apiName: "TFT16_Anivia", hex: 24 },
  ],
  augments: [
    "TFT9_Augment_JeweledLotus",
    "TFT11_Augment_Reinfourcement",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT_Augment_HoldTheLine",
    "TFT_Augment_HomeCooking",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_SeraphimsStaff",
  ],
  tips: [
    "On carousels and early slams, look for Nashor's Tooth, Jeweled Gauntlet, Giant's Belt and Tear of the Goddess.",
    "At level 9, add Nasus , Taric, Fiddlesticks and Ryze  to the board.",
    "Lissandra can also hold Disruptor Emblem.",
    "Seraphine can also hold Lich Bane and Dawncore.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-freljord-shurima",
  },
} satisfies Comp;
