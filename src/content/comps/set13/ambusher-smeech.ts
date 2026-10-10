import type { Comp } from "../../types";

export default {
  slug: "set13-ambusher-smeech",
  name: "Ambusher Smeech",
  set: 13,
  tier: "A",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Smeech. Smeech (Hand Of Justice and Titan's Resolve) carries alongside Ekko (Rabadon's Deathcap, Hand Of Justice and Striker's Flail). The board runs 5 Ambusher, 3 Chem-Baron and 2 Enforcer.",
  board: [
    { apiName: "TFT13_Singed", hex: 0 },
    { apiName: "TFT13_Beardy", hex: 1 },
    { apiName: "TFT13_Camille", hex: 2 },
    { apiName: "TFT13_Blue", hex: 3 },
    { apiName: "TFT13_Chainsaw", hex: 4, star: 3, items: ["TFT_Item_SpectralGauntlet", "TFT_Item_Redemption"] },
    {
      apiName: "TFT13_Ekko",
      hex: 5,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_UnstableConcoction", "TFT_Item_PowerGauntlet"],
    },
    {
      apiName: "TFT13_Gremlin",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT13_Jinx", hex: 27 },
  ],
  early: [
    { apiName: "TFT13_Gremlin", hex: 2, carry: true },
    { apiName: "TFT13_Singed", hex: 3 },
    { apiName: "TFT13_Chainsaw", hex: 4 },
    { apiName: "TFT13_RenataGlasc", hex: 24 },
  ],
  augments: [
    "TFT13_Augment_AmbusherCrown",
    "TFT13_Augment_AmbusherCrest",
    "TFT_Augment_CookingPot",
    "TFT_Augment_TitanicTitan",
    "TFT11_Augment_RadiantRefactor",
  ],
  tips: [
    "On carousels and early slams, look for Hand Of Justice, Recurve Bow, Chain Vest and Sparring Gloves.",
    "Smeech can also hold Prowler's Claw and Death's Defiance.",
    "Smeech can also hold Radiant Hand of Justice, Radiant Bloodthirster and Radiant Titan's Resolve.",
    "Favor item, combat and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-chem-baron-ambushers",
  },
} satisfies Comp;
