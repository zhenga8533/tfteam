import type { Comp } from "../../types";

export default {
  slug: "set15-heavyweight-zac",
  name: "Heavyweight Zac",
  set: 15,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Zac. Zac (Jeweled Gauntlet, Striker's Flail and Edge of Night) carries alongside Malzahar (Blue Buff, Jeweled Gauntlet and Giant Slayer). The board runs 6 Heavyweight, 2 Wraith and 1 Mentor.",
  board: [
    { apiName: "TFT15_Aatrox", hex: 1 },
    { apiName: "TFT15_Kobuko", hex: 2 },
    { apiName: "TFT15_Jayce", hex: 3 },
    { apiName: "TFT15_Darius", hex: 4 },
    {
      apiName: "TFT15_Poppy",
      hex: 5,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"],
    },
    {
      apiName: "TFT15_Zac",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet", "TFT_Item_GuardianAngel"],
    },
    {
      apiName: "TFT15_Malzahar",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT15_Zac", hex: 2, carry: true, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"] },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Gangplank", hex: 4 },
    { apiName: "TFT15_Kayle", hex: 24 },
  ],
  augments: [
    "TFT_Augment_Protagonist",
    "TFT15_Augment_ZacCarry",
    "TFT9_Augment_MissedConnections",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_CrownguardSpirit",
    "TFT_Augment_WandOverflow",
    "TFT15_Augment_Heavyweight_RingTheBell",
    "TFT15_Augment_HeavyweightCirclet",
  ],
  tips: [
    "On carousels and early slams, look for Jeweled Gauntlet, Sparring Gloves, Giant's Belt and Chain Vest.",
    "At level 9, add Lee Sin and Zyra to the board.",
    "Zac can also hold Zhonya's Paradox.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-perfect-form-zac",
  },
} satisfies Comp;
