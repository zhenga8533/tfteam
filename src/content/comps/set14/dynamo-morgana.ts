import type { Comp } from "../../types";

export default {
  slug: "set14-dynamo-morgana",
  name: "Dynamo Morgana",
  set: 14,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Morgana. Morgana (Blue Buff, Rabadon's Deathcap and Hextech Gunblade) carries. The board runs 6 Bastion, 3 Dynamo and 2 Divinicorp.",
  board: [
    { apiName: "TFT14_Galio", hex: 0 },
    { apiName: "TFT14_Sejuani", hex: 1 },
    { apiName: "TFT14_Renekton", hex: 2 },
    { apiName: "TFT14_Jax", hex: 3, star: 3 },
    {
      apiName: "TFT14_Poppy",
      hex: 4,
      star: 3,
      items: ["TFT_Item_BrambleVest", "TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT14_Shyvana", hex: 9 },
    { apiName: "TFT14_Aurora", hex: 21, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    { apiName: "TFT14_Elise", hex: 25 },
    {
      apiName: "TFT14_Morgana",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_RabadonsDeathcap", "TFT_Item_HextechGunblade"],
    },
  ],
  early: [
    { apiName: "TFT14_Jax", hex: 2 },
    { apiName: "TFT14_Poppy", hex: 3 },
    { apiName: "TFT14_Elise", hex: 23 },
    { apiName: "TFT14_Morgana", hex: 24, carry: true, items: ["TFT_Item_BlueBuff", "TFT_Item_HextechGunblade"] },
  ],
  augments: [
    "TFT_Augment_CookingPot",
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_LivingForge",
    "TFT6_Augment_GachaAddict",
    "TFT_Augment_InvestmentStrategy2",
    "TFT7_Augment_Preparation",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Hextech Gunblade, Needlessly Large Rod and Giant's Belt.",
    "Morgana can also hold Blue Buff, Hextech Gunblade and Blighting Jewel.",
    "Morgana can also hold Blue Buff, Manazane and Hextech Gunblade.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-bastion-morgana",
  },
} satisfies Comp;
