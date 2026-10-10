import type { Comp } from "../../types";

export default {
  slug: "set18-riftbeast-pebbles",
  name: "Riftbeast Pebbles",
  set: 18,
  tier: "A",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Pebbles. Pebbles (Blue Buff, Rabadon's Deathcap and Jeweled Gauntlet) carries alongside Cinderling (Infinity Edge, Blue Buff and Last Whisper). The board runs 7 Riftbeast, 2 Brawler and 2 Invoker.",
  board: [
    {
      apiName: "DA_Krug18",
      hex: 4,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption"],
    },
    { apiName: "DA_Sentinel18", hex: 16 },
    { apiName: "DA_Murkwolf18", hex: 17 },
    { apiName: "DA_Scuttlecrab18", hex: 18, star: 3 },
    { apiName: "DA_18_GnarSmall", hex: 19 },
    { apiName: "DA_Brambleback18", hex: 20, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "DA_18_Sentry",
      hex: 26,
      star: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet"],
    },
    {
      apiName: "DA_Cinderling18",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_BlueBuff", "TFT_Item_LastWhisper"],
    },
  ],
  early: [
    { apiName: "DA_Scuttlecrab18", hex: 2 },
    { apiName: "DA_18_Yorick", hex: 3 },
    { apiName: "DA_18_Sentry", hex: 23, carry: true },
    { apiName: "DA_Cinderling18", hex: 24, carry: true },
  ],
  augments: ["DA_18_RiftbeastTraitAugment", "DA_JeweledLotus_I", "DA_GlassCannon_Silver"],
  tips: [
    "On carousels and early slams, look for Last Whisper, B.F. Sword, Tear of the Goddess and Giant's Belt.",
    "At level 9, add Gromp and Elder Dragon to the board.",
    "Pebbles can also hold Eternal Pact.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-riftbeast-reroll",
  },
} satisfies Comp;
