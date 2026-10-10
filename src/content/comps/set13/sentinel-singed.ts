import type { Comp } from "../../types";

export default {
  slug: "set13-sentinel-singed",
  name: "Sentinel Singed",
  set: 13,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Singed. Singed (Bloodthirster, Archangel's Staff and Jeweled Gauntlet) carries. The board runs 6 Sentinel, 4 Academy and 3 Rebel.",
  board: [
    {
      apiName: "TFT13_Illaoi",
      hex: 1,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT13_Beardy", hex: 2 },
    { apiName: "TFT13_Rumble", hex: 3, items: ["TFT_Item_Bloodthirster", "TFT_Item_RabadonsDeathcap"] },
    { apiName: "TFT13_Irelia", hex: 4 },
    { apiName: "TFT13_Leona", hex: 5 },
    {
      apiName: "TFT13_Singed",
      hex: 7,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_ArchangelsStaff", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT13_Lux", hex: 21, items: ["TFT_Item_StatikkShiv"] },
    { apiName: "TFT13_Jayce", hex: 23, items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper"] },
    { apiName: "TFT13_Ezreal", hex: 27 },
  ],
  early: [
    { apiName: "TFT13_Leona", hex: 1 },
    { apiName: "TFT13_Irelia", hex: 2 },
    { apiName: "TFT13_Singed", hex: 3, carry: true, items: ["TFT_Item_Bloodthirster", "TFT_Item_JeweledGauntlet"] },
    { apiName: "TFT13_Rell", hex: 4 },
  ],
  augments: [
    "TFT13_Augment_SingedCarry",
    "TFT_Augment_SpiritLink1",
    "TFT13_Augment_SentinelCrown",
    "TFT13_Augment_SentinelCrest",
    "TFT13_Augment_Sentinel",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Needlessly Large Rod, Tear of the Goddess and Giant's Belt.",
    "Singed can also hold Blighting Jewel, Zhonya's Paradox and Archangel's Staff.",
    "Favor combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-mad-chemist",
  },
} satisfies Comp;
