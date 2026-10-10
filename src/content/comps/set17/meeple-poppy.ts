import type { Comp } from "../../types";

export default {
  slug: "set17-meeple-poppy",
  name: "Meeple Poppy",
  set: 17,
  tier: "X",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Poppy. Poppy (Infinity Edge, Blue Buff and Giant Slayer) carries alongside Corki (Deathblade, Last Whisper and Giant Slayer). The board runs 5 Meeple, 4 Bastion and 3 Timebreaker.",
  board: [
    { apiName: "TFT17_Ornn", hex: 3 },
    {
      apiName: "TFT17_Rammus",
      hex: 4,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_Crownguard", "TFT_Item_FrozenHeart"],
    },
    { apiName: "TFT17_Fizz", hex: 9 },
    { apiName: "TFT17_Riven", hex: 17, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT17_Shen", hex: 18 },
    { apiName: "TFT17_Milio", hex: 21 },
    {
      apiName: "TFT17_Corki",
      hex: 25,
      carry: true,
      items: ["TFT_Item_Deathblade", "TFT_Item_LastWhisper", "TFT_Item_MadredsBloodrazor"],
    },
    { apiName: "TFT17_Bard", hex: 26, items: ["TFT_Item_Morellonomicon"] },
    {
      apiName: "TFT17_Poppy",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_BlueBuff", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT17_Poppy", hex: 2, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_BlueBuff"] },
    { apiName: "TFT17_Aatrox", hex: 3 },
    { apiName: "TFT17_IvernMinion", hex: 4 },
    { apiName: "TFT17_Veigar", hex: 24 },
  ],
  augments: [
    "TFT17_Augment_PoppyCarry",
    "TFT9_Augment_MissedConnections",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_HeavyIsTheCrown",
    "TFT6_Augment_SecondWind1",
    "TFT9_Augment_Commander_Ascension",
    "TFT_Augment_ForgeAFriend",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, Blue Buff, Giant Slayer and Recurve Bow.",
    "At level 9, add Meepsie and The Mighty Mech to the board.",
    "Poppy can also hold Luden's Tempest and Varus's Obsession.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-termeepnal-velocity-poppy",
  },
} satisfies Comp;
