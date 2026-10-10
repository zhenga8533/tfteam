import type { Comp } from "../../types";

export default {
  slug: "set15-wraith-kayle",
  name: "Wraith Kayle",
  set: 15,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Kayle. Kayle (Giant Slayer, Jeweled Gauntlet and Red Buff) carries alongside Lee Sin (Juggernaut Emblem, Bloodthirster and Sterak's Gage). The board runs 6 Juggernaut, 4 Wraith and 2 Duelist.",
  board: [
    { apiName: "TFT15_Naafiri", hex: 0 },
    { apiName: "TFT15_Udyr", hex: 1 },
    { apiName: "TFT15_Aatrox", hex: 2 },
    { apiName: "TFT15_Sett", hex: 3 },
    {
      apiName: "TFT15_LeeSin",
      hex: 4,
      carry: true,
      items: ["TFT15_Item_JuggernautEmblemItem", "TFT_Item_Bloodthirster", "TFT_Item_SteraksGage"],
    },
    {
      apiName: "TFT15_Zac",
      hex: 5,
      star: 3,
      items: ["TFT15_Item_JuggernautEmblemItem", "TFT_Item_Redemption", "TFT_Item_GargoyleStoneplate"],
    },
    {
      apiName: "TFT15_Varus",
      hex: 21,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin", "TFT_Item_LastWhisper"],
    },
    { apiName: "TFT15_Jhin", hex: 24 },
    {
      apiName: "TFT15_Kayle",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_MadredsBloodrazor", "TFT_Item_JeweledGauntlet", "TFT_Item_RapidFireCannon"],
    },
  ],
  early: [
    { apiName: "TFT15_Zac", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Gangplank", hex: 4 },
    { apiName: "TFT15_Kayle", hex: 24, carry: true, items: ["TFT_Item_MadredsBloodrazor", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: ["TFT_Augment_WorthTheWaitGold", "TFT9_Augment_MissedConnections", "TFT_Augment_CookingPot"],
  tips: [
    "On carousels and early slams, look for Giant Slayer, Needlessly Large Rod, Sparring Gloves and Recurve Bow.",
    "At level 9, add Lee Sin to the board.",
    "Kayle can also hold Flickerblades, Fishbones and Zhonya's Paradox.",
    "Kayle can also hold Edge of Night and Radiant Guinsoo's Rageblade.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-kayle-reroll",
  },
} satisfies Comp;
