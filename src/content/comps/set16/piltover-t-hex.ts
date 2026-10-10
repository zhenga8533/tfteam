import type { Comp } from "../../types";

export default {
  slug: "set16-piltover-t-hex",
  name: "Piltover T-Hex",
  set: 16,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for T-Hex. T-Hex (Infinity Edge, Blue Buff and Striker's Flail) carries. The board runs 4 Piltover, 2 Disruptor and 2 Gunslinger.",
  board: [
    { apiName: "TFT16_Nasus", hex: 2 },
    { apiName: "TFT16_Loris", hex: 4 },
    {
      apiName: "TFT16_Braum",
      hex: 5,
      items: ["TFT_Item_Redemption", "TFT_Item_NightHarvester", "TFT_Item_BrambleVest"],
    },
    {
      apiName: "TFT16_THex",
      hex: 13,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_BlueBuff", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT16_Orianna", hex: 20 },
    { apiName: "TFT16_Seraphine", hex: 21 },
    { apiName: "TFT16_Azir", hex: 23 },
    { apiName: "TFT16_Zilean", hex: 25 },
    { apiName: "TFT16_Lucian", hex: 27, items: ["TFT_Item_LastWhisper", "TFT_Item_RapidFireCannon"] },
  ],
  early: [
    { apiName: "TFT16_Vi", hex: 2 },
    { apiName: "TFT16_JarvanIV", hex: 3 },
    { apiName: "TFT16_Bard", hex: 23 },
    { apiName: "TFT16_Caitlyn", hex: 24, items: ["TFT_Item_InfinityEdge", "TFT_Item_BlueBuff"] },
  ],
  augments: [
    "TFT11_Augment_Calltochaos",
    "TFT9_Augment_StarsAreBorn",
    "TFT11_Augment_Epoch",
    "TFT7_Augment_ClutteredMind",
    "TFT_Augment_GuardbreakerSpirit",
    "TFT_Augment_ShojinSpirit",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_FiresalePlus",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Giant's Belt and Tear of the Goddess.",
    "At level 9, add Skarner , Fiddlesticks, Ornn and T-Hex to the board.",
    "T-Hex can also hold Silvermere Dawn, Gold Collector and Mittens.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-t-hex-pilot",
  },
} satisfies Comp;
