import type { Comp } from "../../types";

export default {
  slug: "set17-brawler-gragas",
  name: "Brawler Gragas",
  set: 17,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Gragas. Gragas (Jeweled Gauntlet and Hand Of Justice) carries. The board runs 6 Brawler, 4 Psionic and 2 Marauder.",
  board: [
    { apiName: "TFT17_Pantheon", hex: 2, star: 3, items: ["TFT_Item_IonicSpark", "TFT_Item_RedBuff"] },
    {
      apiName: "TFT17_Gragas",
      hex: 3,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT17_TahmKench", hex: 4 },
    { apiName: "TFT17_Maokai", hex: 9 },
    { apiName: "TFT17_Urgot", hex: 10 },
    { apiName: "TFT17_MasterYi", hex: 14, items: ["TFT_Item_GuardianAngel", "TFT_Item_MadredsBloodrazor"] },
    { apiName: "TFT17_Chogath", hex: 17 },
    { apiName: "TFT17_Sona", hex: 23 },
    { apiName: "TFT17_Pyke", hex: 27 },
  ],
  early: [
    {
      apiName: "TFT17_Gragas",
      hex: 1,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT17_IvernMinion", hex: 2 },
    { apiName: "TFT17_RekSai", hex: 3 },
    { apiName: "TFT17_Pyke", hex: 4 },
  ],
  augments: [
    "TFT_Augment_BoxingLessons",
    "TFT_Augment_GuardbreakerSpirit",
    "TFT_Augment_GroupHug2",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_MagicRoll",
    "TFT_Augment_ChargeTransfer1",
    "TFT17_Augment_GragasCarry",
  ],
  tips: [
    "On carousels and early slams, look for Jeweled Gauntlet, Hand Of Justice and Giant's Belt.",
    "At level 9, add Rek'Sai, Viktor and Karma to the board.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-self-destruct-gragas",
  },
} satisfies Comp;
