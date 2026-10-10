import type { Comp } from "../../types";

export default {
  slug: "set14-anima-squad-leona",
  name: "Anima Squad Leona",
  set: 14,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Leona. Leona (Warmog's Armor, Dragon's Claw and Bramble Vest) carries alongside Xayah (Last Whisper, Infinity Edge and Striker's Flail). The board runs 7 Anima Squad, 2 Bastion and 2 Dynamo.",
  board: [
    {
      apiName: "TFT14_Leona",
      hex: 2,
      carry: true,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT14_Renekton", hex: 3, items: ["TFT14_Item_DarkWebEmblemItem"] },
    { apiName: "TFT14_Illaoi", hex: 5 },
    { apiName: "TFT14_Sylas", hex: 10 },
    { apiName: "TFT14_Viego", hex: 13 },
    {
      apiName: "TFT14_Xayah",
      hex: 21,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT14_Vayne", hex: 23 },
    { apiName: "TFT14_Jhin", hex: 25 },
    {
      apiName: "TFT14_Aurora",
      hex: 27,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  early: [
    { apiName: "TFT14_Illaoi", hex: 2 },
    { apiName: "TFT14_Sylas", hex: 3 },
    { apiName: "TFT14_Vi", hex: 4 },
    {
      apiName: "TFT14_Seraphine",
      hex: 24,
      items: ["TFT_Item_Morellonomicon", "TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet"],
    },
  ],
  augments: [
    "TFT7_Augment_ClutteredMind",
    "TFT14_Augment_AnimaSquad_SupportSpire",
    "TFT10_Augment_LittleBuddies",
    "TFT14_Augment_AnimaSquad_PowerUp",
    "TFT14_Augment_AnimaSquadCirclet",
    "TFT_Augment_CloningFacility",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Giant's Belt and Needlessly Large Rod.",
    "Xayah can also hold Manazane and Fishbones.",
    "Leona can also hold Lightshield Crest.",
    "Favor economy, combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-anima-squad",
  },
} satisfies Comp;
