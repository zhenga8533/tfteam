import type { Comp } from "../../types";

export default {
  slug: "set15-the-crew-malphite",
  name: "The Crew Malphite",
  set: 15,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Malphite. Malphite (Bloodthirster, Titan's Resolve and Spear of Shojin) carries alongside Ziggs (Guinsoo's Rageblade, Archangel's Staff and Void Staff). The board runs 4 Strategist, 5 The Crew and 2 Protector.",
  board: [
    { apiName: "TFT15_JarvanIV", hex: 2 },
    {
      apiName: "TFT15_Malphite",
      hex: 3,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_SpearOfShojin"],
    },
    {
      apiName: "TFT15_Shen",
      hex: 4,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_RedBuff", "TFT_Item_Redemption"],
    },
    { apiName: "TFT15_Sivir", hex: 21, star: 3 },
    { apiName: "TFT15_Ryze", hex: 23 },
    {
      apiName: "TFT15_Ziggs",
      hex: 24,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_ArchangelsStaff", "TFT_Item_StatikkShiv"],
    },
    { apiName: "TFT15_Janna", hex: 25 },
    { apiName: "TFT15_TwistedFate", hex: 27 },
  ],
  early: [
    { apiName: "TFT15_Malphite", hex: 2, carry: true, items: ["TFT_Item_TitansResolve", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT15_Kennen", hex: 3 },
    { apiName: "TFT15_Sivir", hex: 23 },
    { apiName: "TFT15_Gnar", hex: 24 },
  ],
  augments: [
    "TFT15_Augment_MalphiteCarry",
    "TFT6_Augment_Keepers2",
    "TFT6_Augment_Keepers1",
    "TFT9_Augment_MissedConnections",
    "TFT_Augment_LastSecondSave",
    "TFT15_Augment_ProtectorCrest",
    "TFT6_Augment_GachaAddict",
    "TFT9_Augment_BigGrabBag",
  ],
  tips: [
    "On carousels and early slams, look for Titan's Resolve, Bloodthirster, Tear of the Goddess and Sparring Gloves.",
    "At level 9, add Braum to the board.",
    "Malphite can also hold Wit's End and Zhonya's Paradox.",
    "Malphite can also hold Jeweled Gauntlet, Hand Of Justice and Nashor's Tooth.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-tectonic-titan",
  },
} satisfies Comp;
