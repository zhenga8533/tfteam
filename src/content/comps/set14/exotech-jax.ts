import type { Comp } from "../../types";

export default {
  slug: "set14-exotech-jax",
  name: "Exotech Jax",
  set: 14,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Jax. Jax (Quicksilver and Bloodthirster) carries alongside Zeri (Guinsoo's Rageblade and Kraken's Fury). The board runs 7 Exotech, 2 Bastion and 2 Marksman.",
  board: [
    { apiName: "TFT14_Mordekaiser", hex: 1, items: ["TFT_Item_SpectralGauntlet", "TFT_Item_RedBuff"] },
    { apiName: "TFT14_Jax", hex: 2, star: 3, carry: true, items: ["TFT_Item_Quicksilver", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT14_Sejuani", hex: 3, items: ["TFT_Item_FrozenHeart", "TFT_Item_Redemption"] },
    { apiName: "TFT14_Naafiri", hex: 5 },
    { apiName: "TFT14_Zeri", hex: 14, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"] },
    { apiName: "TFT14_Kindred", hex: 20 },
    { apiName: "TFT14_Jhin", hex: 21 },
    { apiName: "TFT14_Varus", hex: 27 },
  ],
  early: [
    { apiName: "TFT14_Naafiri", hex: 2 },
    { apiName: "TFT14_Jax", hex: 3, carry: true, items: ["TFT_Item_Bloodthirster"] },
    { apiName: "TFT14_Poppy", hex: 4 },
    { apiName: "TFT14_Jhin", hex: 24 },
  ],
  augments: [
    "TFT14_Augment_JaxCarry",
    "TFT7_Augment_BigFriend",
    "TFT_Augment_Overheal",
    "TFT14_Augment_BlackMarketGargantuanResolve",
    "TFT14_Augment_BlackMarket_ScopedWeapons",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Quicksilver, Recurve Bow and Negatron Cloak.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-adaptive-strikes-jax",
  },
} satisfies Comp;
