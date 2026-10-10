import type { Comp } from "../../types";

export default {
  slug: "set17-arbiter-diana",
  name: "Arbiter Diana",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Hard",
  summary:
    "A 3-cost reroll comp built around three-star Diana. Diana (Guinsoo's Rageblade, Titan's Resolve and Vanguard Emblem) carries alongside Aurora (Spear of Shojin, Morellonomicon and Rabadon's Deathcap). The board runs 3 Arbiter, 4 Vanguard and 3 Anima.",
  board: [
    {
      apiName: "TFT17_Diana",
      hex: 0,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_TitansResolve", "TFT17_Item_ShieldTankEmblemItem"],
    },
    {
      apiName: "TFT17_Illaoi",
      hex: 1,
      star: 3,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_BrambleVest", "TFT_Item_IonicSpark"],
    },
    { apiName: "TFT17_Nunu", hex: 2 },
    { apiName: "TFT17_IvernMinion", hex: 4 },
    { apiName: "TFT17_Leona", hex: 5 },
    {
      apiName: "TFT17_Aurora",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_Morellonomicon", "TFT_Item_RabadonsDeathcap"],
    },
    { apiName: "TFT17_Leblanc", hex: 25 },
    { apiName: "TFT17_Jinx", hex: 27 },
  ],
  early: [
    { apiName: "TFT17_Mordekaiser", hex: 2 },
    { apiName: "TFT17_Leona", hex: 3 },
    { apiName: "TFT17_Diana", hex: 4, carry: true },
    { apiName: "TFT17_Zoe", hex: 24 },
  ],
  augments: [
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_MagicRoll",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT_Augment_BoxingLessons",
    "TFT_Augment_TreasureHunt",
    "TFT_Augment_TraitTree",
    "TFT_Augment_MagicRollMinus",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Titan's Resolve, Needlessly Large Rod and Giant's Belt.",
    "At level 9, add Zoe, Miss Fortune and Blitzcrank to the board.",
    "Diana can also hold Guinsoo's Rageblade, Bloodthirster and Titan's Resolve.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-anima-reroll",
  },
} satisfies Comp;
