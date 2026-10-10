import type { Comp } from "../../types";

export default {
  slug: "set17-bastion-vex",
  name: "Bastion Vex",
  set: 17,
  tier: "C",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Vex. Vex (Guinsoo's Rageblade, Rabadon's Deathcap and Red Buff) carries alongside Graves (Quicksilver, Giant Slayer and Deathblade). The board runs 2 Bastion, 2 Marauder and 2 N.O.V.A..",
  board: [
    { apiName: "TFT17_Aatrox", hex: 0 },
    { apiName: "TFT17_Akali", hex: 1 },
    { apiName: "TFT17_Rhaast", hex: 2 },
    { apiName: "TFT17_Shen", hex: 4 },
    { apiName: "TFT17_Nunu", hex: 5, items: ["TFT_Item_FrozenHeart", "TFT_Item_FrozenHeart", "TFT_Item_AdaptiveHelm"] },
    { apiName: "TFT17_Blitzcrank", hex: 10, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT17_Fiora", hex: 12, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT17_Graves",
      hex: 19,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_MadredsBloodrazor", "TFT_Item_Deathblade"],
    },
    {
      apiName: "TFT17_Vex",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RabadonsDeathcap", "TFT_Item_RapidFireCannon"],
    },
  ],
  early: [
    { apiName: "TFT17_Mordekaiser", hex: 2 },
    { apiName: "TFT17_Leona", hex: 3 },
    { apiName: "TFT17_Zoe", hex: 23 },
    {
      apiName: "TFT17_Teemo",
      hex: 24,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_MadredsBloodrazor", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  augments: [
    "TFT_Augment_AuraFarming",
    "TFT_Augment_DuoQueue",
    "TFT_Augment_LateGameScaling",
    "TFT11_Augment_Calltochaos",
    "TFT7_Augment_LategameSpecialist",
    "TFT_Augment_ShimmerscaleEssence",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Recurve Bow, B.F. Sword and Needlessly Large Rod.",
    "At level 9, add Morgana and Jhin to the board.",
    "Graves can also hold Quicksilver, Sterak's Gage and Giant Slayer.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-graves-vex-9-5",
  },
} satisfies Comp;
