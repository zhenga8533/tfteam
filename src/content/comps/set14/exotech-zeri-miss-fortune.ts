import type { Comp } from "../../types";

export default {
  slug: "set14-exotech-zeri-miss-fortune",
  name: "Exotech Zeri & Miss Fortune",
  set: 14,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Zeri. Zeri (Guinsoo's Rageblade and Kraken's Fury) carries alongside Miss Fortune (Infinity Edge, Striker's Flail and Marksman Emblem). The board runs 5 Exotech, 3 Syndicate and 2 Bastion.",
  board: [
    { apiName: "TFT14_Sejuani", hex: 1, items: ["TFT_Item_Redemption", "TFT_Item_FrozenHeart"] },
    { apiName: "TFT14_Mordekaiser", hex: 2, items: ["TFT_Item_Crownguard", "TFT_Item_SpectralGauntlet"] },
    { apiName: "TFT14_Darius", hex: 3 },
    { apiName: "TFT14_Jax", hex: 5 },
    { apiName: "TFT14_Zeri", hex: 14, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"] },
    { apiName: "TFT14_TwistedFate", hex: 19 },
    { apiName: "TFT14_Jhin", hex: 21 },
    {
      apiName: "TFT14_MissFortune",
      hex: 23,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet", "TFT14_Item_MarksmanEmblemItem"],
    },
  ],
  early: [
    { apiName: "TFT14_Naafiri", hex: 2 },
    { apiName: "TFT14_Jax", hex: 3 },
    { apiName: "TFT14_Shyvana", hex: 4 },
    { apiName: "TFT14_Jhin", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"] },
  ],
  augments: [
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT6_Augment_BinaryAirdrop",
    "TFT10_Augment_LittleBuddies",
    "TFT_Augment_SpiritLink1",
    "TFT_Augment_ItemCollector1",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Infinity Edge, Tear of the Goddess and Giant's Belt.",
    "Zeri can also hold Flickerblades and Kraken's Fury.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-bullet-time",
  },
} satisfies Comp;
