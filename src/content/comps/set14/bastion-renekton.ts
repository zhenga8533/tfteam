import type { Comp } from "../../types";

export default {
  slug: "set14-bastion-renekton",
  name: "Bastion Renekton",
  set: 14,
  tier: "X",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Renekton. Renekton (Rapidfire Emblem, Kraken's Fury and Quicksilver) carries alongside Zeri (Hextech Gunblade and Kraken's Fury). The board runs 6 Rapidfire, 4 Bastion and 3 Exotech.",
  board: [
    { apiName: "TFT14_Galio", hex: 2 },
    { apiName: "TFT14_Jax", hex: 3 },
    {
      apiName: "TFT14_Sejuani",
      hex: 4,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_Redemption", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT14_TwistedFate", hex: 14 },
    { apiName: "TFT14_KogMaw", hex: 15 },
    {
      apiName: "TFT14_Renekton",
      hex: 20,
      carry: true,
      items: ["TFT14_Item_SwiftEmblemItem", "TFT_Item_RunaansHurricane", "TFT_Item_Quicksilver"],
    },
    { apiName: "TFT14_Kindred", hex: 21 },
    { apiName: "TFT14_Zeri", hex: 26, carry: true, items: ["TFT_Item_HextechGunblade", "TFT_Item_RunaansHurricane"] },
    { apiName: "TFT14_Draven", hex: 27, star: 3, items: ["TFT_Item_LastWhisper", "TFT_Item_Morellonomicon"] },
  ],
  early: [
    { apiName: "TFT14_Galio", hex: 2 },
    { apiName: "TFT14_Vi", hex: 3 },
    { apiName: "TFT14_Draven", hex: 23 },
    { apiName: "TFT14_LeBlanc", hex: 24 },
  ],
  augments: [
    "TFT_Augment_CookingPot",
    "TFT14_Augment_DuelistCrest",
    "TFT_Augment_Golemify",
    "TFT_Augment_Dummify",
    "TFT_Augment_Overheal",
    "TFT_Augment_BeltOverflow",
    "TFT6_Augment_PandorasItems",
  ],
  tips: [
    "On carousels and early slams, look for Rapidfire Emblem, B.F. Sword, Sparring Gloves and Giant's Belt.",
    "Sejuani can also hold Lightshield Crest.",
    "Favor combat, item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-long-crocodile",
  },
} satisfies Comp;
