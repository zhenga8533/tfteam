import type { Comp } from "../../types";

export default {
  slug: "set15-protector-neeko",
  name: "Protector Neeko",
  set: 15,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Hard",
  summary:
    "A 3-cost reroll comp built around three-star Neeko. Neeko (Jeweled Gauntlet, Edge of Night and Titan's Resolve) carries alongside Ahri (Blue Buff, Void Staff and Rabadon's Deathcap). The board runs 6 Protector, 2 Sorcerer and 2 Star Guardian.",
  board: [
    { apiName: "TFT15_Malphite", hex: 0 },
    { apiName: "TFT15_Kennen", hex: 2 },
    { apiName: "TFT15_KSante", hex: 3, items: ["TFT_Item_DragonsClaw", "TFT_Item_BrambleVest", "TFT_Item_RedBuff"] },
    {
      apiName: "TFT15_Neeko",
      hex: 4,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_GuardianAngel", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT15_Rakan", hex: 6 },
    { apiName: "TFT15_Ryze", hex: 21 },
    {
      apiName: "TFT15_Ahri",
      hex: 24,
      star: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_StatikkShiv", "TFT_Item_RabadonsDeathcap"],
    },
    { apiName: "TFT15_Janna", hex: 27 },
  ],
  early: [
    { apiName: "TFT15_Kennen", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Neeko", hex: 4, carry: true, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_GuardianAngel"] },
    { apiName: "TFT15_Lucian", hex: 24 },
  ],
  augments: [
    "TFT15_Augment_NeekoCarry",
    "TFT_Augment_LastSecondSave",
    "TFT_Augment_CrownguardSpirit",
    "TFT11_Augment_RadiantRefactor",
    "TFT_Augment_WaterLotus1",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_WandOverflow",
  ],
  tips: [
    "On carousels and early slams, look for Jeweled Gauntlet, Titan's Resolve, Edge of Night and Tear of the Goddess.",
    "At level 9, add Seraphine to the board.",
    "Neeko can also hold Jeweled Gauntlet, Archangel's Staff and Titan's Resolve.",
    "Neeko can also hold 2× Archangel's Staff and Zhonya's Paradox.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-starfall-neeko",
  },
} satisfies Comp;
