import type { Comp } from "../../types";

export default {
  slug: "set15-supreme-cells-kai-sa-darius",
  name: "Supreme Cells Kai'Sa & Darius",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Kai'Sa. Kai'Sa (Infinity Edge, Last Whisper and Blue Buff) carries alongside Darius (Infinity Edge, Sterak's Gage and Hand Of Justice). The board runs 4 Mentor, 4 Supreme Cells and 2 Duelist.",
  board: [
    { apiName: "TFT15_Kennen", hex: 1 },
    { apiName: "TFT15_Yasuo", hex: 2 },
    { apiName: "TFT15_Udyr", hex: 3 },
    { apiName: "TFT15_Akali", hex: 4 },
    {
      apiName: "TFT15_Darius",
      hex: 5,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_SteraksGage", "TFT_Item_UnstableConcoction"],
    },
    {
      apiName: "TFT15_Kobuko",
      hex: 6,
      star: 3,
      items: ["TFT_Item_BrambleVest", "TFT_Item_FrozenHeart", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT15_Ryze", hex: 21 },
    {
      apiName: "TFT15_KaiSa",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper", "TFT_Item_BlueBuff"],
    },
  ],
  early: [
    { apiName: "TFT15_Kobuko", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_KaiSa", hex: 23, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_BlueBuff"] },
    { apiName: "TFT15_Kayle", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_GachaAddict",
    "TFT_Augment_TragicalBlade",
    "TFT_Augment_GuardbreakerSpirit",
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_AnExaltedAdventure",
    "TFT7_Augment_LivingForge",
    "TFT15_Augment_Mentor_TeachersCouncil",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, Sparring Gloves, Giant's Belt and Tear of the Goddess.",
    "At level 9, add Yasuo and Jarvan IV to the board.",
    "Kai'Sa can also hold Fishbones, Manazane and Sniper's Focus.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-jujutsu-kaisa-mentor",
  },
} satisfies Comp;
