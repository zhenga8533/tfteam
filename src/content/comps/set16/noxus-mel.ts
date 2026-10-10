import type { Comp } from "../../types";

export default {
  slug: "set16-noxus-mel",
  name: "Noxus Mel",
  set: 16,
  tier: "A",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Mel . Mel  (2× Nashor's Tooth and Jeweled Gauntlet) carries. The board runs 1 Targon, 3 Noxus and 2 Arcanist.",
  board: [
    { apiName: "TFT16_Sylas", hex: 0, items: ["TFT_Item_GuardianAngel", "TFT_Item_JeweledGauntlet"] },
    { apiName: "TFT16_Swain", hex: 1, items: ["TFT_Item_DragonsClaw", "TFT_Item_FrozenHeart", "TFT_Item_BrambleVest"] },
    { apiName: "TFT16_Shyvana", hex: 3 },
    { apiName: "TFT16_Taric", hex: 4 },
    { apiName: "TFT16_Darius", hex: 5 },
    { apiName: "TFT16_Ryze", hex: 21, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    {
      apiName: "TFT16_Mel",
      hex: 23,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT16_Azir", hex: 25 },
    { apiName: "TFT16_Xerath", hex: 27 },
  ],
  early: [
    { apiName: "TFT16_Illaoi", hex: 2 },
    { apiName: "TFT16_Briar", hex: 3 },
    { apiName: "TFT16_Sion", hex: 4 },
    { apiName: "TFT16_Leblanc", hex: 24, items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT_Augment_LateGameScaling",
    "TFT9_Augment_JeweledLotus",
    "TFT16_Augment_WaterAxiom",
    "TFT_Augment_DuoQueue",
    "TFT6_Augment_MaxLevel10",
    "TFT16_Augment_Shurima_SecretsOfTheSands",
    "TFT9_Augment_LearningFromExperience2",
  ],
  tips: [
    "On carousels and early slams, look for Nashor's Tooth, Needlessly Large Rod, Sparring Gloves and Tear of the Goddess.",
    "At level 9, add Neeko, Renekton , Taric and Fiddlesticks to the board.",
    "Mel  can also hold Vanquisher Emblem and Invoker Emblem.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-mel-flex",
  },
} satisfies Comp;
