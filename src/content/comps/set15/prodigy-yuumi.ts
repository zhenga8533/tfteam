import type { Comp } from "../../types";

export default {
  slug: "set15-prodigy-yuumi",
  name: "Prodigy Yuumi",
  set: 15,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Yuumi. Yuumi (Jeweled Gauntlet, Rabadon's Deathcap and Hextech Gunblade) carries. The board runs 5 Prodigy, 5 Battle Academia and 2 Bastion.",
  board: [
    { apiName: "TFT15_Rakan", hex: 0 },
    { apiName: "TFT15_Garen", hex: 2 },
    {
      apiName: "TFT15_Leona",
      hex: 4,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_NightHarvester", "TFT_Item_Crownguard"],
    },
    {
      apiName: "TFT15_KSante",
      hex: 6,
      items: ["TFT_Item_Redemption", "TFT_Item_WarmogsArmor", "TFT_Item_NightHarvester"],
    },
    { apiName: "TFT15_Ezreal", hex: 21 },
    { apiName: "TFT15_Seraphine", hex: 22 },
    { apiName: "TFT15_Syndra", hex: 23 },
    { apiName: "TFT15_Malzahar", hex: 25, items: ["TFT_Item_RapidFireCannon", "TFT_Item_StatikkShiv"] },
    {
      apiName: "TFT15_Yuumi",
      hex: 27,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_RabadonsDeathcap", "TFT_Item_HextechGunblade"],
    },
  ],
  early: [
    { apiName: "TFT15_Rell", hex: 2 },
    { apiName: "TFT15_Garen", hex: 3 },
    { apiName: "TFT15_Syndra", hex: 23, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_StatikkShiv"] },
    { apiName: "TFT15_Ezreal", hex: 24 },
  ],
  augments: [
    "TFT_Augment_Replication",
    "TFT9_Augment_BardPlaybook2",
    "TFT9_Augment_BardPlaybook3",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT_Augment_BeltOverflow",
    "TFT11_Augment_Reinfourcement",
    "TFT_Augment_DeadlierCaps",
  ],
  tips: [
    "On carousels and early slams, look for Jeweled Gauntlet, Needlessly Large Rod, Sparring Gloves and Giant's Belt.",
    "At level 9, add Seraphine to the board.",
    "Garen can also hold Innervating Locket, Gargoyle Stoneplate and Spirit Visage.",
    "Yuumi can also hold Jeweled Gauntlet, Manazane and Hextech Gunblade.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-shadow-cat",
  },
} satisfies Comp;
