import type { Comp } from "../../types";

export default {
  slug: "set17-meeple-veigar",
  name: "Meeple Veigar",
  set: 17,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Veigar. Veigar (2× Nashor's Tooth and Jeweled Gauntlet) carries. The board runs 5 Meeple, 3 Shepherd and 2 Bastion.",
  board: [
    { apiName: "TFT17_IvernMinion", hex: 0 },
    { apiName: "TFT17_Mordekaiser", hex: 1 },
    { apiName: "TFT17_Illaoi", hex: 2 },
    { apiName: "TFT17_Poppy", hex: 4, star: 3 },
    {
      apiName: "TFT17_Rammus",
      hex: 5,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_Crownguard", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT17_Bard", hex: 21 },
    { apiName: "TFT17_Lissandra", hex: 25, star: 3, items: ["TFT_Item_Morellonomicon", "TFT_Item_StatikkShiv"] },
    {
      apiName: "TFT17_Veigar",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT17_IvernMinion", hex: 2 },
    { apiName: "TFT17_Poppy", hex: 3, items: ["TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT17_Veigar", hex: 23, carry: true, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan"] },
    { apiName: "TFT17_Lissandra", hex: 24 },
  ],
  augments: [
    "TFT_Augment_EarlyLearning",
    "TFT9_Augment_MissedConnections",
    "TFT9_Augment_PandorasRadiantBox",
    "TFT6_Augment_PandorasItems",
    "TFT_Augment_Waverider",
    "TFT_Augment_TreasureHunt",
    "TFT_Augment_WandOverflow",
    "TFT_Augment_DeadlierCaps",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Giant's Belt, Chain Vest and Tear of the Goddess.",
    "At level 9, add Rhaast to the board.",
    "Veigar can also hold Blue Buff, Rabadon's Deathcap and Giant Slayer.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-veigar-printer",
  },
} satisfies Comp;
