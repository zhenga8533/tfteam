import type { Comp } from "../../types";

export default {
  slug: "set15-star-guardian-xayah-rakan",
  name: "Star Guardian Xayah & Rakan",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Xayah. Xayah (Guinsoo's Rageblade, Kraken's Fury and Giant Slayer) carries alongside Rakan (Archangel's Staff, Titan's Resolve and Gargoyle Stoneplate). The board runs 6 Protector and 3 Star Guardian.",
  board: [
    { apiName: "TFT15_Malphite", hex: 1 },
    { apiName: "TFT15_Kennen", hex: 2 },
    { apiName: "TFT15_Neeko", hex: 3 },
    { apiName: "TFT15_KSante", hex: 4, items: ["TFT_Item_SpectralGauntlet", "TFT_Item_RedBuff"] },
    {
      apiName: "TFT15_Rakan",
      hex: 5,
      star: 3,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_TitansResolve", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT15_Janna", hex: 21 },
    { apiName: "TFT15_Jinx", hex: 26 },
    {
      apiName: "TFT15_Xayah",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT15_Rakan", hex: 2, carry: true },
    { apiName: "TFT15_Malphite", hex: 3 },
    { apiName: "TFT15_Shen", hex: 4 },
    {
      apiName: "TFT15_Xayah",
      hex: 24,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"],
    },
  ],
  augments: [
    "TFT10_Augment_HeroicGrabBag",
    "TFT6_Augment_Keepers1",
    "TFT_Augment_TwoMuchValue",
    "TFT_Augment_AnExaltedAdventure",
    "TFT15_Augment_Protector_PreemptiveProtection",
    "TFT_Augment_PlotArmor",
    "TFT15_Augment_StarGuardian_TinyTeam",
    "TFT6_Augment_PandorasItems",
  ],
  tips: [
    "On carousels and early slams, look for Archangel's Staff, Kraken's Fury, Recurve Bow and Chain Vest.",
    "At level 9, add Yasuo and Jarvan IV to the board.",
    "Xayah can also hold Flickerblades and Fishbones.",
    "Jarvan IV can also hold Protector Emblem.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-protector-xayah",
  },
} satisfies Comp;
