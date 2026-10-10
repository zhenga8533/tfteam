import type { Comp } from "../../types";

export default {
  slug: "set14-slayer-shaco",
  name: "Slayer Shaco",
  set: 14,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 1-cost reroll comp built around three-star Shaco. Shaco (Guinsoo's Rageblade, Giant Slayer and Quicksilver) carries. The board runs 6 Slayer, 3 Syndicate and 2 Bruiser.",
  board: [
    { apiName: "TFT14_DrMundo", hex: 0 },
    { apiName: "TFT14_Darius", hex: 1 },
    { apiName: "TFT14_Zed", hex: 2, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT14_Jarvan", hex: 3 },
    {
      apiName: "TFT14_Braum",
      hex: 4,
      star: 3,
      items: ["TFT_Item_DragonsClaw", "TFT_Item_Redemption", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT14_Vayne", hex: 21 },
    { apiName: "TFT14_Senna", hex: 26, star: 3, items: ["TFT_Item_LastWhisper"] },
    {
      apiName: "TFT14_Shaco",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_MadredsBloodrazor", "TFT_Item_Quicksilver"],
    },
  ],
  early: [
    { apiName: "TFT14_Darius", hex: 2 },
    { apiName: "TFT14_Shaco", hex: 3, carry: true, items: ["TFT_Item_GuinsoosRageblade"] },
    { apiName: "TFT14_DrMundo", hex: 4 },
    { apiName: "TFT14_TwistedFate", hex: 24 },
  ],
  augments: [
    "TFT14_Augment_BlackMarket_ScopedWeapons",
    "TFT6_Augment_PortableForge",
    "TFT14_Augment_Strong_Vertical",
    "TFT_Augment_GuardbreakerSpirit",
    "TFT_Augment_GlassCannonI",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, B.F. Sword, Sparring Gloves and Needlessly Large Rod.",
    "Shaco can also hold Infinity Edge and Sniper's Focus.",
    "Favor item, combat and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-shaco-ped-weapons",
  },
} satisfies Comp;
