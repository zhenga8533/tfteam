import type { Comp } from "../../types";

export default {
  slug: "set15-strategist-janna",
  name: "Strategist Janna",
  set: 15,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Janna. Janna (Jeweled Gauntlet, Blue Buff and Rabadon's Deathcap) carries. The board runs 3 Mentor, 3 Strategist and 3 Mighty Mech.",
  board: [
    { apiName: "TFT15_Aatrox", hex: 1 },
    { apiName: "TFT15_KSante", hex: 2 },
    { apiName: "TFT15_Udyr", hex: 3 },
    { apiName: "TFT15_JarvanIV", hex: 4, items: ["TFT_Item_FrozenHeart"] },
    {
      apiName: "TFT15_Kobuko",
      hex: 5,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_SteraksGage", "TFT_Item_FrozenHeart"],
    },
    { apiName: "TFT15_Senna", hex: 21 },
    { apiName: "TFT15_Ryze", hex: 24, items: ["TFT_Item_StatikkShiv"] },
    {
      apiName: "TFT15_Janna",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_BlueBuff", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  early: [
    { apiName: "TFT15_Udyr", hex: 2 },
    { apiName: "TFT15_Kobuko", hex: 3 },
    { apiName: "TFT15_Yasuo", hex: 4 },
    { apiName: "TFT15_Janna", hex: 24, carry: true, items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT_Augment_TwoMuchValue",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT9_Augment_BardPlaybook1",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT_Augment_DeadlierCaps",
    "TFT15_Augment_Strategist_GamePlan",
    "TFT_Augment_CookingPot",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Needlessly Large Rod, Sparring Gloves and Giant's Belt.",
    "At level 9, add Lee Sin to the board.",
    "Janna can also hold Manazane, Blue Buff and Jeweled Gauntlet.",
    "Janna can also hold Jeweled Gauntlet, Nashor's Tooth and Rabadon's Deathcap.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-rerolling-of-the-shield-hero",
  },
} satisfies Comp;
