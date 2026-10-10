import type { Comp } from "../../types";

export default {
  slug: "set16-gunslinger-t-hex",
  name: "Gunslinger T-Hex",
  set: 16,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for T-Hex. T-Hex (Infinity Edge, Blue Buff and Striker's Flail) carries alongside Miss Fortune (Last Whisper, Infinity Edge and Spear of Shojin). The board runs 4 Gunslinger, 3 Warden and 3 Bilgewater.",
  board: [
    { apiName: "TFT16_Ornn", hex: 1 },
    { apiName: "TFT16_Shyvana", hex: 3 },
    { apiName: "TFT16_Loris", hex: 4 },
    {
      apiName: "TFT16_Nautilus",
      hex: 5,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    {
      apiName: "TFT16_THex",
      hex: 13,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_BlueBuff", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT16_Graves", hex: 20 },
    { apiName: "TFT16_Lucian", hex: 21 },
    {
      apiName: "TFT16_MissFortune",
      hex: 27,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"],
    },
  ],
  early: [
    { apiName: "TFT16_Vi", hex: 2 },
    { apiName: "TFT16_JarvanIV", hex: 3 },
    { apiName: "TFT16_Bard", hex: 23 },
    { apiName: "TFT16_Caitlyn", hex: 24, items: ["TFT_Item_InfinityEdge", "TFT_Item_BlueBuff"] },
  ],
  augments: [
    "TFT9_Augment_StarsAreBorn",
    "TFT11_Augment_Epoch",
    "TFT_Augment_GuardbreakerSpirit",
    "TFT_Augment_ShojinSpirit",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_TraitTree",
    "TFT_Augment_OneBuffTwoBuff",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Giant's Belt and Tear of the Goddess.",
    "At level 9, add Skarner , Taric, Fiddlesticks and T-Hex to the board.",
    "T-Hex can also hold Silvermere Dawn, Gold Collector and Mittens.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-warden-t-hex",
  },
} satisfies Comp;
