import type { Comp } from "../../types";

export default {
  slug: "set15-crystal-gambit-swain",
  name: "Crystal Gambit Swain",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Hard",
  summary:
    "A 3-cost reroll comp built around three-star Swain. Swain (Warmog's Armor, Bramble Vest and Dragon's Claw) carries alongside Malzahar (Blue Buff, Rabadon's Deathcap and Jeweled Gauntlet). The board runs 5 Crystal Gambit, 2 Prodigy and 2 Protector.",
  board: [
    { apiName: "TFT15_KSante", hex: 2 },
    { apiName: "TFT15_JarvanIV", hex: 3 },
    {
      apiName: "TFT15_Swain",
      hex: 4,
      star: 3,
      carry: true,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT15_Vi", hex: 5 },
    { apiName: "TFT15_Zyra", hex: 21, items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet"] },
    { apiName: "TFT15_Janna", hex: 23 },
    { apiName: "TFT15_Syndra", hex: 25 },
    {
      apiName: "TFT15_Malzahar",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT15_Swain", hex: 2, carry: true },
    { apiName: "TFT15_Vi", hex: 3 },
    { apiName: "TFT15_Malzahar", hex: 23, carry: true, items: ["TFT_Item_BlueBuff"] },
    { apiName: "TFT15_Syndra", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_CalculatedLoss",
    "TFT_Augment_DeadlierCaps",
    "TFT10_Augment_HeroicGrabBag",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_WandOverflow",
    "TFT15_Augment_CrystalRoseCrest",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Needlessly Large Rod, Sparring Gloves and Giant's Belt.",
    "At level 9, add Braum and Lee Sin to the board.",
    "Favor combat and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-crystal-visions",
  },
} satisfies Comp;
