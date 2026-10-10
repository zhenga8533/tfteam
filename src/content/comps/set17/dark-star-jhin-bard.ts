import type { Comp } from "../../types";

export default {
  slug: "set17-dark-star-jhin-bard",
  name: "Dark Star Jhin & Bard",
  set: 17,
  tier: "C",
  playstyle: "Fast 9",
  difficulty: "Medium",
  summary:
    "A level 9 comp that caps its board around Jhin. Jhin (Last Whisper, Infinity Edge and Deathblade) carries alongside Bard (Morellonomicon and Spear of Shojin). The board runs 3 Conduit, 3 Meeple and 2 Bastion.",
  board: [
    { apiName: "TFT17_Mordekaiser", hex: 1 },
    { apiName: "TFT17_Blitzcrank", hex: 3 },
    {
      apiName: "TFT17_Rammus",
      hex: 4,
      items: ["TFT_Item_AdaptiveHelm", "TFT_Item_FrozenHeart", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT17_Shen", hex: 9, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT17_Graves", hex: 17, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT17_Morgana", hex: 18, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT17_Gnar", hex: 21 },
    { apiName: "TFT17_Bard", hex: 24, carry: true, items: ["TFT_Item_Morellonomicon", "TFT_Item_SpearOfShojin"] },
    {
      apiName: "TFT17_Jhin",
      hex: 27,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT_Item_Deathblade"],
    },
  ],
  early: [
    { apiName: "TFT17_Pantheon", hex: 2 },
    { apiName: "TFT17_Chogath", hex: 3 },
    { apiName: "TFT17_Gnar", hex: 23 },
    { apiName: "TFT17_Ezreal", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge"] },
  ],
  augments: [
    "TFT6_Augment_MaxLevel10",
    "TFT_Augment_ShimmerscaleEssence",
    "TFT_Augment_UpwardMobility",
    "TFT9_Augment_LearningFromExperience2",
    "TFT7_Augment_LategameSpecialist",
    "TFT_Augment_LateGameScaling",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Giant's Belt and Needlessly Large Rod.",
    "At level 9, add Fiora, Sona, Vex and Zed to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-fast-9-jhin-meeple-version",
  },
} satisfies Comp;
