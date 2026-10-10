import type { Comp } from "../../types";

export default {
  slug: "set14-bruiser-gragas",
  name: "Bruiser Gragas",
  set: 14,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Gragas. Gragas (Bloodthirster, Titan's Resolve and Quicksilver) carries alongside Fiddlesticks (2× Archangel's Staff and Jeweled Gauntlet). The board runs 6 Bruiser, 2 Divinicorp and 2 Bastion.",
  board: [
    { apiName: "TFT14_Alistar", hex: 0 },
    { apiName: "TFT14_Renekton", hex: 2 },
    { apiName: "TFT14_Kobuko", hex: 3 },
    { apiName: "TFT14_Chogath", hex: 4 },
    {
      apiName: "TFT14_Mordekaiser",
      hex: 5,
      star: 3,
      items: ["TFT_Item_IonicSpark", "TFT_Item_RedBuff", "TFT_Item_Redemption"],
    },
    { apiName: "TFT14_Darius", hex: 9 },
    {
      apiName: "TFT14_Gragas",
      hex: 13,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_Quicksilver"],
    },
    {
      apiName: "TFT14_Fiddlesticks",
      hex: 20,
      star: 3,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_ArchangelsStaff", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT14_Poppy", hex: 27 },
  ],
  early: [
    { apiName: "TFT14_DrMundo", hex: 1 },
    { apiName: "TFT14_Alistar", hex: 2 },
    { apiName: "TFT14_Gragas", hex: 3, carry: true, items: ["TFT_Item_TitansResolve", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT14_Darius", hex: 4 },
  ],
  augments: [
    "TFT14_Augment_GragasCarry",
    "TFT_Augment_RiggedShopPlus",
    "TFT_Augment_Trifecta2",
    "TFT7_Augment_BigFriend2",
    "TFT14_Augment_BlackMarketGargantuanResolve",
    "TFT9_Augment_Commander_Ascension",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Titan's Resolve, Needlessly Large Rod and Recurve Bow.",
    "Gragas can also hold Talisman Of Ascension.",
    "Fiddlesticks can also hold Sniper's Focus and Blighting Jewel.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-chug-bug-gragas",
  },
} satisfies Comp;
