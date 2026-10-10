import type { Comp } from "../../types";

export default {
  slug: "set18-rival-kha-zix-rengar",
  name: "Rival Kha'Zix & Rengar",
  set: 18,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Hard",
  summary:
    "A 3-cost reroll comp built around three-star Kha'Zix. Kha'Zix (Hand Of Justice, Rabadon's Deathcap and Edge of Night) carries alongside Rengar (Edge of Night, Titan's Resolve and Guinsoo's Rageblade). The board runs 2 Rival, 3 Elderwood and 2 Lunar.",
  board: [
    {
      apiName: "DA_18_Hecarim",
      hex: 3,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption"],
    },
    {
      apiName: "DA_18_Rengar",
      hex: 14,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_TitansResolve", "TFT_Item_GuinsoosRageblade"],
    },
    {
      apiName: "DA_18_KhaZix",
      hex: 15,
      star: 3,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_RabadonsDeathcap", "TFT_Item_GuardianAngel"],
    },
    { apiName: "DA_18_Aphelios", hex: 21, items: ["TFT_Item_LastWhisper", "TFT_Item_RapidFireCannon"] },
    { apiName: "DA_18_Ezreal", hex: 22 },
    { apiName: "DA_18_Diana", hex: 26 },
    { apiName: "DA_18_LeBlanc", hex: 27 },
  ],
  early: [
    { apiName: "DA_18_Rengar", hex: 1, carry: true },
    { apiName: "DA_18_RekSai", hex: 2 },
    { apiName: "DA_18_Kobuko", hex: 3 },
    { apiName: "DA_18_KhaZix", hex: 4, carry: true },
  ],
  augments: ["DA_18_RivalsAugment", "DA_Swordsmith", "DA_SmallGrabBag"],
  tips: [
    "On carousels and early slams, look for Edge of Night, B.F. Sword, Chain Vest and Needlessly Large Rod.",
    "At level 9, add Ahri, Soraka and Kennen to the board.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-unrivaled-reroll",
  },
} satisfies Comp;
