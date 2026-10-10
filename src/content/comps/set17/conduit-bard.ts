import type { Comp } from "../../types";

export default {
  slug: "set17-conduit-bard",
  name: "Conduit Bard",
  set: 17,
  tier: "C",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Bard. Bard (Rabadon's Deathcap, Jeweled Gauntlet and Giant Slayer) carries alongside Sona (Blue Buff, Morellonomicon and Void Staff). The board runs 4 Vanguard, 3 Conduit and 3 Shepherd.",
  board: [
    { apiName: "TFT17_Mordekaiser", hex: 0 },
    { apiName: "TFT17_IvernMinion", hex: 1 },
    { apiName: "TFT17_Morgana", hex: 2 },
    { apiName: "TFT17_Blitzcrank", hex: 3, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT17_Nunu", hex: 4, items: ["TFT_Item_AdaptiveHelm", "TFT_Item_FrozenHeart", "TFT_Item_FrozenHeart"] },
    { apiName: "TFT17_Illaoi", hex: 5 },
    { apiName: "TFT17_Karma", hex: 21 },
    {
      apiName: "TFT17_Bard",
      hex: 26,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet", "TFT_Item_MadredsBloodrazor"],
    },
    {
      apiName: "TFT17_Sona",
      hex: 27,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_Morellonomicon", "TFT_Item_StatikkShiv"],
    },
  ],
  early: [
    { apiName: "TFT17_Mordekaiser", hex: 2 },
    { apiName: "TFT17_Leona", hex: 3 },
    {
      apiName: "TFT17_Zoe",
      hex: 23,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT17_Teemo", hex: 24 },
  ],
  augments: [
    "TFT_Augment_LateGameScaling",
    "TFT_Augment_ComponentQuestRod",
    "TFT_Augment_MagicRoll",
    "TFT6_Augment_Electrocharge1",
    "TFT_Augment_GroupHug1",
    "TFT_Augment_DuoQueue",
  ],
  tips: [
    "On carousels and early slams, look for Needlessly Large Rod, Tear of the Goddess, Chain Vest and Negatron Cloak.",
    "At level 8, add Nami to the board.",
    "At level 9, add Leona, Morgana and Vex to the board.",
    "Bard can also hold Blighting Jewel and Ahri's Aura.",
    "Sona can also hold Dawncore, Lich Bane and Eternal Pact.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-vex-9-5",
  },
} satisfies Comp;
