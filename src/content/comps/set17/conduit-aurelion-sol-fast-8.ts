import type { Comp } from "../../types";

export default {
  slug: "set17-conduit-aurelion-sol-fast-8",
  name: "Conduit Aurelion Sol (Fast 8)",
  set: 17,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Aurelion Sol. Aurelion Sol (Jeweled Gauntlet, Striker's Flail and Rabadon's Deathcap) carries. The board runs 3 Conduit, 3 Shepherd and 2 Dark Star.",
  board: [
    { apiName: "TFT17_IvernMinion", hex: 0 },
    { apiName: "TFT17_Mordekaiser", hex: 2 },
    { apiName: "TFT17_Illaoi", hex: 3 },
    {
      apiName: "TFT17_Morgana",
      hex: 4,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_NightHarvester", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT17_Sona", hex: 21 },
    { apiName: "TFT17_Karma", hex: 25, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    {
      apiName: "TFT17_AurelionSol",
      hex: 27,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  early: [
    { apiName: "TFT17_Mordekaiser", hex: 2 },
    { apiName: "TFT17_Leona", hex: 3 },
    {
      apiName: "TFT17_Zoe",
      hex: 23,
      items: ["TFT_Item_Morellonomicon", "TFT_Item_JeweledGauntlet", "TFT_Item_StatikkShiv"],
    },
    { apiName: "TFT17_Lissandra", hex: 24 },
  ],
  augments: [
    "TFT9_Augment_JeweledLotus",
    "TFT9_Augment_LearningFromExperience2",
    "TFT_Augment_MagicRoll",
    "TFT_Augment_HomeCooking",
    "TFT6_Augment_SecondWind1",
    "TFT_Augment_ComponentQuestRod",
    "TFT_Augment_WandOverflow",
  ],
  tips: [
    "On carousels and early slams, look for Needlessly Large Rod, Sparring Gloves, Tear of the Goddess and Giant's Belt.",
    "At level 8, add Viktor to the board.",
    "At level 9, add Leona, Zoe and Bard to the board.",
    "Aurelion Sol can also hold Voyager Emblem.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-vanguard-asol-flex",
  },
} satisfies Comp;
