import type { Comp } from "../../types";

export default {
  slug: "set15-supreme-cells-kai-sa",
  name: "Supreme Cells Kai'Sa",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Kai'Sa. Kai'Sa (Infinity Edge, Last Whisper and Blue Buff) carries alongside Darius (Sterak's Gage, Infinity Edge and Hand Of Justice). The board runs 4 Supreme Cells, 2 Duelist and 2 Heavyweight.",
  board: [
    { apiName: "TFT15_Aatrox", hex: 1 },
    { apiName: "TFT15_Udyr", hex: 2 },
    { apiName: "TFT15_Kennen", hex: 3 },
    { apiName: "TFT15_Akali", hex: 4 },
    {
      apiName: "TFT15_Darius",
      hex: 5,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction"],
    },
    {
      apiName: "TFT15_Rammus",
      hex: 6,
      star: 3,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_Redemption", "TFT_Item_RedBuff"],
    },
    {
      apiName: "TFT15_KaiSa",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper", "TFT_Item_BlueBuff"],
    },
  ],
  early: [
    { apiName: "TFT15_Kennen", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Udyr", hex: 4 },
    { apiName: "TFT15_KaiSa", hex: 24, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_BlueBuff"] },
  ],
  augments: [
    "TFT6_Augment_GachaAddict",
    "TFT_Augment_TragicalBlade",
    "TFT_Augment_GuardbreakerSpirit",
    "TFT10_Augment_HeroicGrabBag",
    "TFT7_Augment_LivingForge",
    "TFT9_Augment_BardPlaybook3",
    "TFT9_Augment_StarsAreBorn",
    "TFT6_Augment_PortableForge",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, B.F. Sword, Tear of the Goddess and Sparring Gloves.",
    "At level 9, add K'Sante and Zyra to the board.",
    "Kai'Sa can also hold Fishbones, Manazane and Sniper's Focus.",
    "Kai'Sa can also hold Guinsoo's Rageblade, Infinity Edge and Striker's Flail.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-jujutsu-kaisa-ok",
  },
} satisfies Comp;
