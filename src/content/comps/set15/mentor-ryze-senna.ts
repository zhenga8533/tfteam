import type { Comp } from "../../types";

export default {
  slug: "set15-mentor-ryze-senna",
  name: "Mentor Ryze & Senna",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Ryze. Ryze (Archangel's Staff and Void Staff) carries alongside Senna (Last Whisper, Spear of Shojin and Deathblade). The board runs 4 Mentor, 3 Mighty Mech and 2 Executioner.",
  board: [
    {
      apiName: "TFT15_Yasuo",
      hex: 0,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT15_JarvanIV", hex: 1, items: ["TFT_Item_FrozenHeart"] },
    { apiName: "TFT15_Kobuko", hex: 2 },
    { apiName: "TFT15_Udyr", hex: 3 },
    { apiName: "TFT15_Aatrox", hex: 5 },
    {
      apiName: "TFT15_Senna",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_SpearOfShojin", "TFT_Item_Deathblade"],
    },
    { apiName: "TFT15_Ryze", hex: 27, carry: true, items: ["TFT_Item_ArchangelsStaff", "TFT_Item_StatikkShiv"] },
  ],
  early: [
    { apiName: "TFT15_Kobuko", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Senna", hex: 23, carry: true, items: ["TFT_Item_LastWhisper", "TFT_Item_SpearOfShojin"] },
    { apiName: "TFT15_Lucian", hex: 24 },
  ],
  augments: [
    "TFT_Augment_WaterLotus1",
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT9_Augment_HighEndSector",
    "TFT11_Augment_Calltochaos",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Sparring Gloves, Recurve Bow and B.F. Sword.",
    "At level 9, add Yone and Lee Sin to the board.",
    "Senna can also hold Manazane and Gold Collector.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-mentor-senna-yasuo",
  },
} satisfies Comp;
