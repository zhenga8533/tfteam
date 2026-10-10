import type { Comp } from "../../types";

export default {
  slug: "set15-battle-academia-katarina",
  name: "Battle Academia Katarina",
  set: 15,
  tier: "A",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Katarina. Katarina (Hand Of Justice, Nashor's Tooth and Edge of Night) carries alongside Yuumi (Rabadon's Deathcap, Void Staff and Morellonomicon). The board runs 7 Battle Academia, 2 Bastion and 2 Executioner.",
  board: [
    {
      apiName: "TFT15_Katarina",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_Leviathan", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT15_Garen", hex: 15 },
    { apiName: "TFT15_Jayce", hex: 16 },
    { apiName: "TFT15_Ezreal", hex: 17 },
    { apiName: "TFT15_Ryze", hex: 18 },
    { apiName: "TFT15_Leona", hex: 19 },
    {
      apiName: "TFT15_Yuumi",
      hex: 24,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"],
    },
    {
      apiName: "TFT15_Rakan",
      hex: 25,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_NightHarvester", "TFT_Item_WarmogsArmor"],
    },
  ],
  early: [
    {
      apiName: "TFT15_Katarina",
      hex: 2,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT15_Garen", hex: 3 },
    { apiName: "TFT15_Kalista", hex: 23 },
    { apiName: "TFT15_Ezreal", hex: 24 },
  ],
  augments: [
    "TFT9_Augment_BardPlaybook1",
    "TFT9_Augment_BardPlaybook3",
    "TFT6_Augment_PortableForge",
    "TFT_Augment_TreasureHunt",
    "TFT6_Augment_RadiantRelics",
    "TFT11_Augment_RadiantRefactor",
  ],
  tips: [
    "On carousels and early slams, look for Hand Of Justice, Giant's Belt, Recurve Bow and Needlessly Large Rod.",
    "At level 9, add K'Sante to the board.",
    "Katarina can also hold Radiant Hand of Justice.",
    "Katarina can also hold Zhonya's Paradox, Dawncore and Wit's End.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-executioner-katarina",
  },
} satisfies Comp;
