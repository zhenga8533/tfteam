import type { Comp } from "../../types";

export default {
  slug: "set17-challenger-jinx",
  name: "Challenger Jinx",
  set: 17,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Jinx. Jinx (Red Buff, Deathblade and Last Whisper) carries alongside Bel'Veth (Kraken's Fury and Quicksilver). The board runs 3 Primordian, 3 Challenger and 3 N.O.V.A..",
  board: [
    { apiName: "TFT17_Akali", hex: 0, star: 3, items: ["TFT_Item_SteraksGage"] },
    {
      apiName: "TFT17_RekSai",
      hex: 1,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart"],
    },
    { apiName: "TFT17_Rhaast", hex: 5 },
    { apiName: "TFT17_Maokai", hex: 6 },
    {
      apiName: "TFT17_Belveth",
      hex: 7,
      star: 3,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_Quicksilver"],
    },
    { apiName: "TFT17_Briar", hex: 14 },
    {
      apiName: "TFT17_Jinx",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_RapidFireCannon", "TFT_Item_Deathblade", "TFT_Item_LastWhisper"],
    },
    { apiName: "TFT17_Kindred", hex: 22 },
  ],
  early: [
    { apiName: "TFT17_RekSai", hex: 2, items: ["TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT17_Briar", hex: 3 },
    { apiName: "TFT17_Belveth", hex: 10, carry: true },
    { apiName: "TFT17_Jinx", hex: 24, carry: true, items: ["TFT_Item_Deathblade"] },
  ],
  augments: [
    "TFT_Augment_TreasureHunt",
    "TFT6_Augment_PortableForge",
    "TFT_Augment_ForgeSword",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_MagicRoll",
    "TFT_Augment_NoScoutNoPivot",
    "TFT_Augment_TragicalBlade",
    "TFT_Augment_ComponentQuestSword",
  ],
  tips: [
    "On carousels and early slams, look for Deathblade, Recurve Bow, Negatron Cloak and B.F. Sword.",
    "At level 8, add Miss Fortune to the board.",
    "At level 9, add Aatrox, Gragas and Jax to the board.",
    "Akali can also hold Challenger Emblem.",
    "Jinx can also hold Gold Collector, Radiant Deathblade and Fishbones.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-jainx",
  },
} satisfies Comp;
