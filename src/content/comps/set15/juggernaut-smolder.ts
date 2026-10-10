import type { Comp } from "../../types";

export default {
  slug: "set15-juggernaut-smolder",
  name: "Juggernaut Smolder",
  set: 15,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Smolder. Smolder (Spear of Shojin, Infinity Edge and Giant Slayer) carries alongside Lee Sin (Giant Slayer, Sterak's Gage and Edge of Night). The board runs 5 Juggernaut, 2 Soul Fighter and 1 Mentor.",
  board: [
    { apiName: "TFT15_Naafiri", hex: 1 },
    { apiName: "TFT15_DrMundo", hex: 2 },
    { apiName: "TFT15_Vi", hex: 3 },
    {
      apiName: "TFT15_LeeSin",
      hex: 4,
      carry: true,
      items: ["TFT_Item_MadredsBloodrazor", "TFT_Item_SteraksGage", "TFT_Item_GuardianAngel"],
    },
    {
      apiName: "TFT15_Sett",
      hex: 5,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_Redemption", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT15_Udyr", hex: 6 },
    {
      apiName: "TFT15_Smolder",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT15_Naafiri", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_DrMundo", hex: 4 },
    { apiName: "TFT15_Smolder", hex: 24, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"] },
  ],
  augments: [
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_LivingForge",
    "TFT9_Augment_BardPlaybook3",
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_WaterLotus1",
    "TFT_Augment_ShojinSpirit",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, B.F. Sword, Tear of the Goddess and Recurve Bow.",
    "At level 9, add Ryze and Zyra to the board.",
    "Smolder can also hold Manazane and Flickerblades.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-train-your-dragon-juggs",
  },
} satisfies Comp;
