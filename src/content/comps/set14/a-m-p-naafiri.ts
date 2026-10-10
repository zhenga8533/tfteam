import type { Comp } from "../../types";

export default {
  slug: "set14-a-m-p-naafiri",
  name: "A.M.P. Naafiri",
  set: 14,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Naafiri. Naafiri (Edge of Night and Hand Of Justice) carries. The board runs 5 A.M.P., 3 Strategist and 3 Exotech.",
  board: [
    { apiName: "TFT14_Sejuani", hex: 1 },
    { apiName: "TFT14_Ekko", hex: 2 },
    { apiName: "TFT14_Jax", hex: 3 },
    { apiName: "TFT14_Neeko", hex: 4, items: ["TFT_Item_WarmogsArmor", "TFT_Item_RedBuff"] },
    { apiName: "TFT14_NidaleeCougar", hex: 5 },
    {
      apiName: "TFT14_Naafiri",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT14_Annie", hex: 21 },
    { apiName: "TFT14_Samira", hex: 24, items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper"] },
    { apiName: "TFT14_Yuumi", hex: 27, star: 3, items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet"] },
  ],
  early: [
    { apiName: "TFT14_Shyvana", hex: 2 },
    { apiName: "TFT14_NidaleeCougar", hex: 3 },
    { apiName: "TFT14_Naafiri", hex: 4, carry: true, items: ["TFT_Item_UnstableConcoction"] },
    { apiName: "TFT14_Kindred", hex: 24 },
  ],
  augments: [
    "TFT9_Augment_Commander_RollingForDays",
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_LivingForge",
    "TFT9_Augment_LongTimeCrafting",
    "TFT9_Augment_BardPlaybook1",
  ],
  tips: [
    "On carousels and early slams, look for Sparring Gloves, Tear of the Goddess, B.F. Sword and Giant's Belt.",
    "Naafiri can also hold Spectral Cutlass, Hand Of Justice and Infinity Edge.",
    "Naafiri can also hold Suspicious Trench Coat, Sterak's Gage and Edge of Night.",
    "Favor economy, combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-amp-naafiri",
  },
} satisfies Comp;
