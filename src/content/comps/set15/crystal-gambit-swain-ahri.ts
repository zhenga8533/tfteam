import type { Comp } from "../../types";

export default {
  slug: "set15-crystal-gambit-swain-ahri",
  name: "Crystal Gambit Swain & Ahri",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Hard",
  summary:
    "A 3-cost reroll comp built around three-star Swain. Swain (Warmog's Armor, Bramble Vest and Dragon's Claw) carries alongside Ahri (Jeweled Gauntlet, Giant Slayer and Blue Buff). The board runs 5 Crystal Gambit, 3 Star Guardian and 2 Protector.",
  board: [
    { apiName: "TFT15_JarvanIV", hex: 2 },
    { apiName: "TFT15_Neeko", hex: 3, star: 3, items: ["TFT_Item_IonicSpark", "TFT_Item_RedBuff"] },
    {
      apiName: "TFT15_Swain",
      hex: 4,
      star: 3,
      carry: true,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT15_Vi", hex: 5 },
    { apiName: "TFT15_Zyra", hex: 21 },
    { apiName: "TFT15_Janna", hex: 23 },
    { apiName: "TFT15_Syndra", hex: 25 },
    {
      apiName: "TFT15_Ahri",
      hex: 27,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_MadredsBloodrazor", "TFT_Item_BlueBuff"],
    },
  ],
  early: [
    { apiName: "TFT15_Swain", hex: 2, carry: true },
    { apiName: "TFT15_Vi", hex: 3 },
    { apiName: "TFT15_Ahri", hex: 23, carry: true, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_BlueBuff"] },
    { apiName: "TFT15_Syndra", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_CalculatedLoss",
    "TFT_Augment_DeadlierCaps",
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_UnlimitedPower",
    "TFT15_Augment_StarGuardian_TinyTeam",
    "TFT15_Augment_CrystalRoseCrest",
  ],
  tips: [
    "On carousels and early slams, look for Needlessly Large Rod, Sparring Gloves, Tear of the Goddess and Giant's Belt.",
    "At level 9, add Braum and Lee Sin to the board.",
    "Ahri can also hold Manazane, Blue Buff and Jeweled Gauntlet.",
    "Favor combat and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-crystal-ahri",
  },
} satisfies Comp;
