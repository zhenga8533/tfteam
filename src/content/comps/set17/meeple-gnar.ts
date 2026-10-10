import type { Comp } from "../../types";

export default {
  slug: "set17-meeple-gnar",
  name: "Meeple Gnar",
  set: 17,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Gnar. Gnar (Guinsoo's Rageblade, Deathblade and Infinity Edge) carries alongside Jhin (Last Whisper, Infinity Edge and Red Buff). The board runs 5 Meeple, 2 Bastion and 2 Conduit.",
  board: [
    { apiName: "TFT17_Morgana", hex: 1 },
    { apiName: "TFT17_Poppy", hex: 2 },
    { apiName: "TFT17_IvernMinion", hex: 3 },
    {
      apiName: "TFT17_Rammus",
      hex: 4,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_FrozenHeart", "TFT_Item_Crownguard"],
    },
    { apiName: "TFT17_Bard", hex: 21 },
    { apiName: "TFT17_Karma", hex: 23 },
    {
      apiName: "TFT17_Jhin",
      hex: 26,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT_Item_RapidFireCannon"],
    },
    {
      apiName: "TFT17_Gnar",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Deathblade", "TFT_Item_InfinityEdge"],
    },
  ],
  early: [
    { apiName: "TFT17_Poppy", hex: 2, items: ["TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT17_Aatrox", hex: 3 },
    { apiName: "TFT17_IvernMinion", hex: 4 },
    { apiName: "TFT17_Gnar", hex: 24, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Deathblade"] },
  ],
  augments: [
    "TFT_Augment_TragicalBlade",
    "TFT_Augment_MagicRollMinus",
    "TFT_Augment_KickStart",
    "TFT_Augment_ComponentQuestBow",
    "TFT_Augment_HeavyIsTheCrown",
    "TFT6_Augment_CyberneticImplants2",
    "TFT_Augment_ForgeSword",
    "TFT10_Augment_HeroicGrabBag",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Deathblade, B.F. Sword and Chain Vest.",
    "At level 9, add Rhaast, Shen and Tahm Kench to the board.",
    "Gnar can also hold Guinsoo's Rageblade and Deathblade.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-gnar-printer",
  },
} satisfies Comp;
