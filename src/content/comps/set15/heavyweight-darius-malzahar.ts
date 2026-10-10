import type { Comp } from "../../types";

export default {
  slug: "set15-heavyweight-darius-malzahar",
  name: "Heavyweight Darius & Malzahar",
  set: 15,
  tier: "A",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Darius. Darius (Sterak's Gage, Bloodthirster and Titan's Resolve) carries alongside Malzahar (Rabadon's Deathcap, Blue Buff and Jeweled Gauntlet). The board runs 6 Heavyweight, 2 Prodigy and 2 Star Guardian.",
  board: [
    { apiName: "TFT15_Aatrox", hex: 1 },
    { apiName: "TFT15_Zac", hex: 2 },
    { apiName: "TFT15_Jayce", hex: 3 },
    { apiName: "TFT15_Kobuko", hex: 4 },
    {
      apiName: "TFT15_Poppy",
      hex: 5,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_NightHarvester", "TFT_Item_BrambleVest"],
    },
    {
      apiName: "TFT15_Darius",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT15_Seraphine", hex: 21 },
    {
      apiName: "TFT15_Malzahar",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT15_Zac", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Naafiri", hex: 4, items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"] },
    { apiName: "TFT15_Malzahar", hex: 24, carry: true, items: ["TFT_Item_BlueBuff"] },
  ],
  augments: [
    "TFT10_Augment_HeroicGrabBag",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_CryMeARiver",
    "TFT15_Augment_Heavyweight_RingTheBell",
    "TFT_Augment_BeltOverflow",
    "TFT15_Augment_HeavyweightCirclet",
    "TFT_Augment_WandOverflow",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Needlessly Large Rod, Sparring Gloves and B.F. Sword.",
    "At level 9, add Seraphine to the board.",
    "Malzahar can also hold Blighting Jewel and Manazane.",
    "Seraphine can also hold Heavyweight Emblem.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-heavy-malzahar",
  },
} satisfies Comp;
