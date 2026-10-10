import type { Comp } from "../../types";

export default {
  slug: "set17-bastion-aatrox",
  name: "Bastion Aatrox",
  set: 17,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Aatrox. Aatrox (Sterak's Gage, Bloodthirster and Titan's Resolve) carries alongside Caitlyn (Guinsoo's Rageblade, Striker's Flail and Deathblade). The board runs 4 Bastion, 3 Meeple and 2 Fateweaver.",
  board: [
    {
      apiName: "TFT17_Aatrox",
      hex: 0,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT17_Poppy", hex: 1, star: 3, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT17_Rammus", hex: 3 },
    { apiName: "TFT17_Rhaast", hex: 6 },
    { apiName: "TFT17_Morgana", hex: 8 },
    { apiName: "TFT17_Corki", hex: 14 },
    { apiName: "TFT17_Shen", hex: 15 },
    {
      apiName: "TFT17_Caitlyn",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_PowerGauntlet", "TFT_Item_Deathblade"],
    },
  ],
  early: [
    { apiName: "TFT17_Jax", hex: 2 },
    {
      apiName: "TFT17_Aatrox",
      hex: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_SteraksGage"],
    },
    { apiName: "TFT17_TwistedFate", hex: 23 },
    { apiName: "TFT17_Caitlyn", hex: 24, carry: true },
  ],
  augments: [
    "TFT17_Augment_AatroxCarry",
    "TFT9_Augment_MissedConnections",
    "TFT17_Augment_ApotheoticForge",
    "TFT6_Augment_PortableForge",
    "TFT6_Augment_GachaAddict",
    "TFT_Augment_Waverider",
    "TFT_Augment_HomeCooking",
    "TFT_Augment_ForgeSword",
  ],
  tips: [
    "On carousels and early slams, look for Titan's Resolve, Bloodthirster, Sterak's Gage and Recurve Bow.",
    "At level 9, add Akali, Maokai, Kindred and Bel'Veth to the board.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-stellar-combo-aatrox",
  },
} satisfies Comp;
