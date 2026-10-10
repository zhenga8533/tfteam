import type { Comp } from "../../types";

export default {
  slug: "set13-ambusher-smeech-ekko",
  name: "Ambusher Smeech & Ekko",
  set: 13,
  tier: "A",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Smeech. Smeech (Hand Of Justice, Titan's Resolve and Bloodthirster) carries alongside Ekko (Rabadon's Deathcap, Hand Of Justice and Striker's Flail). The board runs 5 Ambusher, 2 Enforcer and 2 Firelight.",
  board: [
    { apiName: "TFT13_FlyGuy", hex: 0 },
    { apiName: "TFT13_Camille", hex: 1 },
    { apiName: "TFT13_Rumble", hex: 2, items: ["TFT13_Item_AmbusherEmblemItem"] },
    { apiName: "TFT13_Beardy", hex: 3 },
    {
      apiName: "TFT13_Ekko",
      hex: 4,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_UnstableConcoction", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT13_Garen", hex: 5 },
    {
      apiName: "TFT13_Gremlin",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_TitansResolve", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT13_Jinx", hex: 27 },
  ],
  early: [
    { apiName: "TFT13_Fish", hex: 2 },
    { apiName: "TFT13_Camille", hex: 3, items: ["TFT_Item_UnstableConcoction", "TFT_Item_TitansResolve"] },
    { apiName: "TFT13_Trundle", hex: 4 },
    { apiName: "TFT13_Blue", hex: 24 },
  ],
  augments: [
    "TFT13_Augment_Ambusher",
    "TFT13_Augment_AmbusherCrest",
    "TFT13_Augment_AmbusherCrown",
    "TFT9_Augment_ArmyBuilding",
    "TFT_Augment_Lineup",
    "TFT13_TeamupAugment_Reunion",
  ],
  tips: [
    "On carousels and early slams, look for Hand Of Justice, Recurve Bow, Chain Vest and Sparring Gloves.",
    "Camille can also hold Silvermere Dawn, Spectral Cutlass and Prowler's Claw.",
    "Smeech can also hold Prowler's Claw and Death's Defiance.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-ambusher-camille-smeech",
  },
} satisfies Comp;
