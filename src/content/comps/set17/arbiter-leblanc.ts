import type { Comp } from "../../types";

export default {
  slug: "set17-arbiter-leblanc",
  name: "Arbiter LeBlanc",
  set: 17,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for LeBlanc. LeBlanc (Guinsoo's Rageblade, Giant Slayer and Jeweled Gauntlet) carries alongside Zoe (Void Staff, Spear of Shojin and Morellonomicon). The board runs 3 Arbiter, 4 Vanguard and 3 Shepherd.",
  board: [
    { apiName: "TFT17_IvernMinion", hex: 0 },
    { apiName: "TFT17_Leona", hex: 2 },
    { apiName: "TFT17_Mordekaiser", hex: 3 },
    { apiName: "TFT17_Nunu", hex: 4, items: ["TFT_Item_FrozenHeart", "TFT_Item_IonicSpark", "TFT_Item_FrozenHeart"] },
    { apiName: "TFT17_Illaoi", hex: 5 },
    { apiName: "TFT17_Karma", hex: 21 },
    {
      apiName: "TFT17_Zoe",
      hex: 25,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_SpearOfShojin", "TFT_Item_Morellonomicon"],
    },
    {
      apiName: "TFT17_Leblanc",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_MadredsBloodrazor", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT17_Mordekaiser", hex: 2 },
    { apiName: "TFT17_Leona", hex: 3 },
    { apiName: "TFT17_Zoe", hex: 23, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_MadredsBloodrazor"] },
    { apiName: "TFT17_Lissandra", hex: 24 },
  ],
  augments: [
    "TFT9_Augment_JeweledLotus",
    "TFT9_Augment_LearningFromExperience2",
    "TFT_Augment_SliceOfLife",
    "TFT_Augment_MagicRoll",
    "TFT_Augment_HomeCooking",
    "TFT6_Augment_SecondWind1",
    "TFT_Augment_ShimmerscaleEssence",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Giant Slayer, Needlessly Large Rod and Giant's Belt.",
    "At level 9, add Bard, Sona and Vex to the board.",
    "LeBlanc can also hold Statikk Shiv and Flickerblades.",
    "LeBlanc can also hold Wit's End, Zhonya's Paradox and Varus's Obsession.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-karma-lb-duo",
  },
} satisfies Comp;
