import type { Comp } from "../../types";

export default {
  slug: "set17-psionic-viktor",
  name: "Psionic Viktor",
  set: 17,
  tier: "S",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Viktor. Viktor (Jeweled Gauntlet and Rabadon's Deathcap) carries alongside Miss Fortune (Infinity Edge and Giant Slayer). The board runs 2 Bastion, 2 Brawler and 2 N.O.V.A..",
  board: [
    { apiName: "TFT17_Aatrox", hex: 0 },
    { apiName: "TFT17_Gragas", hex: 1 },
    { apiName: "TFT17_Rhaast", hex: 2 },
    { apiName: "TFT17_Maokai", hex: 3, star: 3, items: ["TFT_Item_RedBuff"] },
    {
      apiName: "TFT17_Ornn",
      hex: 4,
      star: 3,
      items: ["TFT_Item_BrambleVest", "TFT_Item_WarmogsArmor", "TFT_Item_DragonsClaw"],
    },
    {
      apiName: "TFT17_Viktor",
      hex: 25,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_RabadonsDeathcap"],
    },
    {
      apiName: "TFT17_MissFortune",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT17_Gragas", hex: 2 },
    { apiName: "TFT17_Chogath", hex: 3 },
    { apiName: "TFT17_Viktor", hex: 23, carry: true, items: ["TFT_Item_RabadonsDeathcap"] },
    { apiName: "TFT17_MissFortune", hex: 24, carry: true, items: ["TFT_Item_InfinityEdge"] },
  ],
  augments: [
    "TFT7_Augment_LivingForge",
    "TFT_Augment_ForgedInStrength",
    "TFT_Augment_HomeCooking",
    "TFT9_Augment_LongTimeCrafting",
    "TFT6_Augment_GachaAddict",
    "TFT_Augment_LegionOfThrees",
    "TFT9_Augment_BigGrabBag",
    "TFT10_Augment_HeroicGrabBag",
  ],
  tips: [
    "On carousels and early slams, look for Needlessly Large Rod, B.F. Sword, Giant's Belt and Chain Vest.",
    "At level 8, add Bard and Morgana to the board.",
    "Miss Fortune can also hold Gold Collector and Sniper's Focus.",
    "Viktor can also hold Ahri's Aura and Luden's Tempest.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-conduit-mf-reroll",
  },
} satisfies Comp;
