import type { Comp } from "../../types";

export default {
  slug: "set16-arcanist-annie",
  name: "Arcanist Annie",
  set: 16,
  tier: "A",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Annie. Annie (Blue Buff, Spear of Shojin and Void Staff) carries alongside Lucian & Senna (Last Whisper, Infinity Edge and Spear of Shojin). The board runs 3 Ionia, 2 Arcanist and 2 Bruiser.",
  board: [
    { apiName: "TFT16_Kobuko", hex: 0 },
    { apiName: "TFT16_Kennen", hex: 1 },
    {
      apiName: "TFT16_Sylas",
      hex: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_TitansResolve", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT16_Wukong", hex: 4, items: ["TFT_Item_WarmogsArmor"] },
    {
      apiName: "TFT16_Sett",
      hex: 6,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction", "TFT_Item_UnstableConcoction"],
    },
    {
      apiName: "TFT16_Lucian",
      hex: 21,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "TFT16_Zilean", hex: 24, items: ["TFT_Item_AdaptiveHelm", "TFT_Item_SpearOfShojin"] },
    {
      apiName: "TFT16_Annie",
      hex: 27,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv"],
    },
  ],
  early: [
    { apiName: "TFT16_Poppy", hex: 2 },
    { apiName: "TFT16_Rumble", hex: 3 },
    { apiName: "TFT16_Teemo", hex: 23, items: ["TFT_Item_StatikkShiv", "TFT_Item_AdaptiveHelm"] },
    { apiName: "TFT16_Lulu", hex: 24 },
  ],
  augments: [
    "TFT_Augment_LateGameScaling",
    "TFT6_Augment_MaxLevel10",
    "TFT6_Augment_HyperRoll",
    "TFT10_Augment_GoingLong",
    "TFT9_Augment_HedgeFund",
    "TFT10_Augment_GoodForSomethingSilver",
    "TFT7_Augment_LategameSpecialist",
    "TFT_Augment_Replication",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Blue Buff, Adaptive Helm and Spear of Shojin.",
    "At level 9, add Swain, Fiddlesticks and Shyvana to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-yordle-fast-9",
  },
} satisfies Comp;
