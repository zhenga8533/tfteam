import type { Comp } from "../../types";

export default {
  slug: "set18-hunter-sivir-nidalee",
  name: "Hunter Sivir & Nidalee",
  set: 18,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Sivir. Sivir (Infinity Edge, Red Buff and Striker's Flail) carries alongside Nidalee (Infinity Edge, Sterak's Gage and Spear of Shojin). The board runs 3 Riftbeast, 2 Adaptor and 2 Hunter.",
  board: [
    {
      apiName: "DA_Amumu18",
      hex: 2,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_BrambleVest"],
    },
    { apiName: "DA_Sentinel18", hex: 3, items: ["TFT_Item_FrozenHeart"] },
    { apiName: "DA_Scuttlecrab18", hex: 4 },
    { apiName: "DA_Taric18", hex: 5 },
    {
      apiName: "DA_Nidalee18_AP",
      hex: 14,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_SteraksGage", "TFT_Item_SpearOfShojin"],
    },
    {
      apiName: "DA_18_Sivir",
      hex: 21,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_RapidFireCannon", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "DA_KogMaw18_AD", hex: 22 },
    { apiName: "DA_Cinderling18", hex: 27 },
  ],
  early: [
    { apiName: "DA_Scuttlecrab18", hex: 2 },
    { apiName: "DA_18_Yorick", hex: 3 },
    { apiName: "DA_Gromp18_AP", hex: 23 },
    { apiName: "DA_Cinderling18", hex: 24, items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"] },
  ],
  augments: ["DA_Swordsmith", "DA_18_FOURcing", "DA_DeadlierBlades"],
  tips: [
    "On carousels and early slams, look for Infinity Edge, B.F. Sword, Sparring Gloves and Giant's Belt.",
    "At level 9, add Hecarim, Ashe, Kennen and Maokai to the board.",
    "Nidalee can also hold Spear of Shojin, Hunter Emblem and Sterak's Gage.",
    "Nidalee can also hold Blue Buff, Silvermere Dawn and Sterak's Gage.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-primal-jungle-copy",
  },
} satisfies Comp;
