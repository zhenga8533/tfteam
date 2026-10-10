import type { Comp } from "../../types";

export default {
  slug: "set17-stargazer-xayah-vex",
  name: "Stargazer Xayah & Vex",
  set: 17,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Xayah. Xayah (2× Kraken's Fury and Red Buff) carries alongside Vex (2× Guinsoo's Rageblade and Rabadon's Deathcap). The board runs 3 Stargazer, 2 Bastion and 2 Brawler.",
  board: [
    {
      apiName: "TFT17_Nunu",
      hex: 3,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_AdaptiveHelm", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT17_Pantheon", hex: 4 },
    { apiName: "TFT17_Aatrox", hex: 5 },
    { apiName: "TFT17_Maokai", hex: 6 },
    { apiName: "TFT17_Shen", hex: 8, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT17_Blitzcrank", hex: 16 },
    {
      apiName: "TFT17_Xayah",
      hex: 21,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_RapidFireCannon", "TFT_Item_RunaansHurricane"],
    },
    {
      apiName: "TFT17_Vex",
      hex: 22,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RabadonsDeathcap", "TFT_Item_GuinsoosRageblade"],
    },
    { apiName: "TFT17_Jhin", hex: 27 },
  ],
  early: [
    {
      apiName: "TFT17_Talon",
      hex: 2,
      items: ["TFT_Item_RapidFireCannon", "TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade"],
    },
    { apiName: "TFT17_Aatrox", hex: 3 },
    { apiName: "TFT17_Jax", hex: 4, items: ["TFT_Item_FrozenHeart"] },
    { apiName: "TFT17_TwistedFate", hex: 24 },
  ],
  augments: [
    "TFT_Augment_ShimmerscaleEssence",
    "TFT9_Augment_LearningFromExperience2",
    "TFT_Augment_ComponentQuestBow",
    "TFT6_Augment_PandorasItems",
    "TFT_Augment_MayTheFoursBeWithYou",
    "TFT_Augment_ComebackStory",
    "TFT_Augment_HoldTheLine",
    "TFT_Augment_AwakenedSoul",
  ],
  tips: [
    "On carousels and early slams, look for Red Buff, Kraken's Fury, Recurve Bow and B.F. Sword.",
    "At level 9, add Jax, Mordekaiser and Tahm Kench to the board.",
    "Xayah can also hold Guinsoo's Rageblade and Infinity Edge.",
    "Xayah can also hold Titanic Hydra, Guinsoo's Rageblade and Kraken's Fury.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-xayah-stargazer-copy",
  },
} satisfies Comp;
