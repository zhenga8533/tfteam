import type { Comp } from "../../types";

export default {
  slug: "set16-shadow-isles-kalista",
  name: "Shadow Isles Kalista",
  set: 16,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Kalista . Kalista  (Blue Buff, Last Whisper and Striker's Flail) carries alongside Thresh  (Ionic Spark, Morellonomicon and Edge of Night). The board runs 5 Warden, 4 Shadow Isles and 2 Disruptor.",
  board: [
    {
      apiName: "TFT16_Ornn",
      hex: 1,
      items: [
        "TFT_Item_Artifact_LightshieldCrest",
        "TFT_Item_Artifact_TheIndomitable",
        "TFT_Item_Artifact_AegisOfDawn",
      ],
    },
    { apiName: "TFT16_Yorick", hex: 2 },
    {
      apiName: "TFT16_Thresh",
      hex: 3,
      carry: true,
      items: ["TFT_Item_IonicSpark", "TFT_Item_Morellonomicon", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT16_Loris", hex: 4 },
    {
      apiName: "TFT16_Braum",
      hex: 5,
      items: ["TFT_Item_NightHarvester", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT16_Fiddlesticks", hex: 10 },
    { apiName: "TFT16_Gwen", hex: 15 },
    { apiName: "TFT16_Seraphine", hex: 21 },
    {
      apiName: "TFT16_Kalista",
      hex: 27,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_LastWhisper", "TFT_Item_PowerGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT16_Yorick", hex: 2, items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"] },
    { apiName: "TFT16_Viego", hex: 3, items: ["TFT_Item_LastWhisper", "TFT_Item_GuardianAngel"] },
    { apiName: "TFT16_Nautilus", hex: 4 },
    { apiName: "TFT16_TwistedFate", hex: 24 },
  ],
  augments: [
    "TFT_Augment_AwakenedSoul",
    "TFT9_Augment_JeweledLotus",
    "TFT9_Augment_LearningFromExperience2",
    "TFT9_Augment_StarsAreBorn",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_MirroredMonetization",
    "TFT_Augment_MagicRollMinus",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Recurve Bow, B.F. Sword and Sparring Gloves.",
    "At level 9, add Ambessa, Azir, Mel  and Shyvana to the board.",
    "Kalista  can also hold Gold Collector, Fishbones and Sniper's Focus.",
    "Thresh  can also hold Seeker's Armguard, Wit's End and Vanquisher Emblem.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-kalista-flex",
  },
} satisfies Comp;
