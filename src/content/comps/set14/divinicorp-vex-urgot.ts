import type { Comp } from "../../types";

export default {
  slug: "set14-divinicorp-vex-urgot",
  name: "Divinicorp Vex & Urgot",
  set: 14,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Vex. Vex (Blue Buff, Hextech Gunblade and Rabadon's Deathcap) carries alongside Urgot (Divinicorp Emblem, Giant Slayer and Kraken's Fury). The board runs 7 Divinicorp, 2 BoomBot and 2 Bruiser.",
  board: [
    { apiName: "TFT14_Gragas", hex: 1 },
    { apiName: "TFT14_Jarvan", hex: 3 },
    {
      apiName: "TFT14_Chogath",
      hex: 4,
      items: ["TFT_Item_DragonsClaw", "TFT_Item_BrambleVest", "TFT_Item_Redemption"],
    },
    { apiName: "TFT14_Rhaast", hex: 5 },
    { apiName: "TFT14_Renekton", hex: 16, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT14_Morgana", hex: 21 },
    { apiName: "TFT14_Senna", hex: 23 },
    {
      apiName: "TFT14_Vex",
      hex: 25,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_HextechGunblade", "TFT_Item_RabadonsDeathcap"],
    },
    {
      apiName: "TFT14_Urgot",
      hex: 27,
      carry: true,
      items: ["TFT14_Item_DivinicorpEmblemItem", "TFT_Item_MadredsBloodrazor", "TFT_Item_RunaansHurricane"],
    },
  ],
  early: [
    { apiName: "TFT14_Rhaast", hex: 2 },
    { apiName: "TFT14_Vi", hex: 3 },
    { apiName: "TFT14_Jhin", hex: 23 },
    { apiName: "TFT14_Morgana", hex: 24, items: ["TFT_Item_BlueBuff", "TFT_Item_HextechGunblade"] },
  ],
  augments: [
    "TFT_Augment_FiresalePlus",
    "TFT14_Augment_BlackMarketBlueBattery",
    "TFT6_Augment_PandorasItems",
    "TFT_Augment_SpiritLink1",
    "TFT_Augment_Golemify",
    "TFT_Augment_ShareTheSpotlight",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Hextech Gunblade, Tear of the Goddess and Giant's Belt.",
    "Vex can also hold Radiant Blue Buff, Hextech Gunblade and Fishbones.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-divinivex",
  },
} satisfies Comp;
