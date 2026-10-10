import type { Comp } from "../../types";

export default {
  slug: "set15-protector-kennen",
  name: "Protector Kennen",
  set: 15,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 1-cost reroll comp built around three-star Kennen. Kennen (Guinsoo's Rageblade, Jeweled Gauntlet and Nashor's Tooth) carries. The board runs 6 Protector and 3 Supreme Cells.",
  board: [
    {
      apiName: "TFT15_Rakan",
      hex: 1,
      star: 3,
      items: ["TFT_Item_Redemption", "TFT_Item_RedBuff", "TFT_Item_NightHarvester"],
    },
    { apiName: "TFT15_Akali", hex: 2 },
    { apiName: "TFT15_KSante", hex: 3 },
    { apiName: "TFT15_Neeko", hex: 4 },
    { apiName: "TFT15_Darius", hex: 5 },
    { apiName: "TFT15_Malphite", hex: 6 },
    {
      apiName: "TFT15_Kennen",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT15_Janna", hex: 23, star: 3, items: ["TFT_Item_StatikkShiv", "TFT_Item_ArchangelsStaff"] },
  ],
  early: [
    { apiName: "TFT15_Kennen", hex: 2, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_JeweledGauntlet"] },
    { apiName: "TFT15_Malphite", hex: 3 },
    { apiName: "TFT15_Rakan", hex: 4 },
    { apiName: "TFT15_KaiSa", hex: 24 },
  ],
  augments: [
    "TFT15_Augment_KennenCarry",
    "TFT15_Augment_Protector_PreemptiveProtection",
    "TFT15_Augment_ProtectorCrest",
    "TFT6_Augment_Keepers1",
    "TFT6_Augment_Keepers2",
    "TFT_Augment_HeavyIsTheCrown",
    "TFT_Augment_Protagonist",
    "TFT_Augment_ClimbTheLadder2",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Needlessly Large Rod, Recurve Bow and Giant's Belt.",
    "At level 9, add Kai'Sa to the board.",
    "Kennen can also hold Statikk Shiv and Flickerblades.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-nine-thousand-volts-kennen",
  },
} satisfies Comp;
