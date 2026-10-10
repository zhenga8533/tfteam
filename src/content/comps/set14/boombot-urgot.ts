import type { Comp } from "../../types";

export default {
  slug: "set14-boombot-urgot",
  name: "BoomBot Urgot",
  set: 14,
  tier: "S",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Urgot. Urgot (Kraken's Fury, Hextech Gunblade and Striker's Flail) carries. The board runs 4 BoomBot, 2 Bruiser and 2 Executioner.",
  board: [
    {
      apiName: "TFT14_Chogath",
      hex: 1,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_Redemption", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT14_Viego", hex: 2 },
    { apiName: "TFT14_Zac", hex: 3, items: ["TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart", "TFT_Item_AdaptiveHelm"] },
    { apiName: "TFT14_Garen", hex: 4 },
    { apiName: "TFT14_Kobuko", hex: 5 },
    { apiName: "TFT14_Fiddlesticks", hex: 13 },
    {
      apiName: "TFT14_Urgot",
      hex: 21,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_HextechGunblade", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT14_Vex", hex: 23 },
    { apiName: "TFT14_KogMaw", hex: 27 },
  ],
  early: [
    { apiName: "TFT14_Vi", hex: 2 },
    { apiName: "TFT14_Skarner", hex: 3 },
    { apiName: "TFT14_Kindred", hex: 23 },
    { apiName: "TFT14_KogMaw", hex: 24, items: ["TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "TFT_Augment_UpwardMobility",
    "TFT9_Augment_FinalReserves",
    "TFT_Augment_FiresalePlus",
    "TFT_Augment_ForwardThinking",
    "TFT6_Augment_HighEndShopping",
    "TFT6_Augment_MaxLevel10",
    "TFT14_Augment_BoomBotsCrest",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Negatron Cloak, Sparring Gloves and Giant's Belt.",
    "Urgot can also hold Blue Buff and Sniper's Focus.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-boom-got",
  },
} satisfies Comp;
