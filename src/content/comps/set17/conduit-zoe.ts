import type { Comp } from "../../types";

export default {
  slug: "set17-conduit-zoe",
  name: "Conduit Zoe",
  set: 17,
  tier: "A",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Zoe. Zoe (Archangel's Staff, Rabadon's Deathcap and Morellonomicon) carries alongside Viktor (Void Staff, Rabadon's Deathcap and Jeweled Gauntlet). The board runs 5 Conduit, 4 Vanguard and 2 Arbiter.",
  board: [
    { apiName: "TFT17_Mordekaiser", hex: 0, star: 3 },
    { apiName: "TFT17_Illaoi", hex: 1 },
    { apiName: "TFT17_Nunu", hex: 2 },
    { apiName: "TFT17_Morgana", hex: 3 },
    {
      apiName: "TFT17_Leona",
      hex: 4,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT17_AurelionSol", hex: 25 },
    {
      apiName: "TFT17_Viktor",
      hex: 26,
      star: 3,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet"],
    },
    {
      apiName: "TFT17_Zoe",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_RabadonsDeathcap", "TFT_Item_Morellonomicon"],
    },
  ],
  early: [
    { apiName: "TFT17_Mordekaiser", hex: 2 },
    { apiName: "TFT17_Leona", hex: 3, items: ["TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT17_Zoe", hex: 23, carry: true, items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_StatikkShiv"] },
    { apiName: "TFT17_Lissandra", hex: 24 },
  ],
  augments: [
    "TFT_Augment_TreasureHunt",
    "TFT17_Augment_Concentration",
    "TFT_Augment_HomeCooking",
    "TFT_Augment_ComponentQuestRod",
    "TFT_Augment_WandOverflow",
    "TFT_Augment_KickStart",
    "TFT_Augment_WorthTheWaitPrismatic",
    "TFT9_Augment_BardPlaybook1",
  ],
  tips: [
    "On carousels and early slams, look for Gargoyle Stoneplate, Rabadon's Deathcap, Void Staff and Needlessly Large Rod.",
    "At level 8, add Pyke and Karma to the board.",
    "At level 9, add Miss Fortune to the board.",
    "Zoe can also hold Blighting Jewel.",
    "Favor item, combat and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-vanguard-zoe",
  },
} satisfies Comp;
