import type { Comp } from "../../types";

export default {
  slug: "set18-inferno-akali",
  name: "Inferno Akali",
  set: 18,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Akali. Akali (Jeweled Gauntlet, Hand Of Justice and Edge of Night) carries alongside Camille (Sterak's Gage, Quicksilver and Infinity Edge). The board runs 3 Solar, 2 Defender and 2 Inferno.",
  board: [
    {
      apiName: "DA_18_Ornn",
      hex: 3,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_Crownguard", "TFT_Item_WarmogsArmor"],
    },
    {
      apiName: "DA_18_Akali_AD",
      hex: 14,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction", "TFT_Item_GuardianAngel"],
    },
    {
      apiName: "DA_18_Camille",
      hex: 15,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_Quicksilver", "TFT_Item_InfinityEdge"],
    },
    { apiName: "DA_18_Leona", hex: 17, star: 3 },
    { apiName: "DA_18_Sejuani", hex: 20 },
    {
      apiName: "DA_18_Varus",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_LastWhisper", "TFT_Item_InfinityEdge"],
    },
    { apiName: "DA_18_Kayle", hex: 27 },
  ],
  early: [
    { apiName: "DA_18_Ornn", hex: 1 },
    { apiName: "DA_18_Camille", hex: 2, carry: true },
    { apiName: "DA_18_Akali_AD", hex: 3, carry: true },
    { apiName: "DA_18_Leona", hex: 4 },
  ],
  augments: ["DA_PandorasBench", "DA_PrismaticTicket", "DA_EarlyLearnings", "DA_SoloPlate"],
  tips: [
    "On carousels and early slams, look for Infinity Edge, Gargoyle Stoneplate, Sparring Gloves and B.F. Sword.",
    "At level 9, add Rakan and Yorick to the board.",
    "Camille can also hold Silvermere Dawn, Mittens and Infinity Force.",
    "Akali can also hold Fishbones, Rapid Firecannon and Luden's Tempest.",
    "Favor combat, item and economy augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-solar-melee",
  },
} satisfies Comp;
