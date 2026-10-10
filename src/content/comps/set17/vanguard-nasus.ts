import type { Comp } from "../../types";

export default {
  slug: "set17-vanguard-nasus",
  name: "Vanguard Nasus",
  set: 17,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Nasus. Nasus (Bloodthirster, Guinsoo's Rageblade and Edge of Night) carries alongside Teemo (Guinsoo's Rageblade, Hextech Gunblade and Void Staff). The board runs 6 Vanguard, 3 Space Groove and 3 Shepherd.",
  board: [
    { apiName: "TFT17_Blitzcrank", hex: 0 },
    { apiName: "TFT17_Mordekaiser", hex: 2 },
    { apiName: "TFT17_Nunu", hex: 3 },
    { apiName: "TFT17_Illaoi", hex: 4 },
    {
      apiName: "TFT17_Leona",
      hex: 5,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"],
    },
    {
      apiName: "TFT17_Nasus",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_GuinsoosRageblade", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT17_Leblanc", hex: 24 },
    {
      apiName: "TFT17_Teemo",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade", "TFT_Item_StatikkShiv"],
    },
  ],
  early: [
    { apiName: "TFT17_Nasus", hex: 2, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT17_Leona", hex: 3 },
    { apiName: "TFT17_Mordekaiser", hex: 4 },
    { apiName: "TFT17_Zoe", hex: 24 },
  ],
  augments: [
    "TFT17_Augment_NasusCarry",
    "TFT9_Augment_MissedConnections",
    "TFT17_Augment_ApotheoticForge",
    "TFT6_Augment_PortableForge",
    "TFT_Augment_GroupHug1",
    "TFT_Augment_Lineup",
    "TFT9_Augment_Commander_Ascension",
    "TFT9_Augment_JeweledLotus",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Bloodthirster, Chain Vest and B.F. Sword.",
    "Nasus can also hold Rapid Firecannon, Guinsoo's Rageblade and Bloodthirster.",
    "Nasus can also hold Evelynn's Instinct, Titan's Resolve and Guinsoo's Rageblade.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-bonk-nasus",
  },
} satisfies Comp;
