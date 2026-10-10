import type { Comp } from "../../types";

export default {
  slug: "set14-cyberboss-veigar",
  name: "Cyberboss Veigar",
  set: 14,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Veigar. Veigar (Blue Buff, Jeweled Gauntlet and Striker's Flail) carries alongside Kobuko (Warmog's Armor, Crownguard and Ionic Spark). The board runs 4 Cyberboss, 4 Techie and 3 Strategist.",
  board: [
    { apiName: "TFT14_Ekko", hex: 1 },
    { apiName: "TFT14_Poppy", hex: 2 },
    { apiName: "TFT14_Shyvana", hex: 3 },
    {
      apiName: "TFT14_Kobuko",
      hex: 4,
      carry: true,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_Crownguard", "TFT_Item_IonicSpark"],
    },
    { apiName: "TFT14_Mordekaiser", hex: 5 },
    { apiName: "TFT14_Neeko", hex: 6 },
    { apiName: "TFT14_Brand", hex: 21 },
    {
      apiName: "TFT14_Veigar",
      hex: 24,
      star: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT14_Ziggs", hex: 27, items: ["TFT_Item_RapidFireCannon", "TFT_Item_RabadonsDeathcap"] },
  ],
  early: [
    { apiName: "TFT14_Shyvana", hex: 2 },
    { apiName: "TFT14_Poppy", hex: 3 },
    { apiName: "TFT14_Jax", hex: 4 },
    { apiName: "TFT14_Veigar", hex: 24, carry: true, items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT14_Augment_Cyberboss_HighScore",
    "TFT14_Augment_Cyberboss_Cower",
    "TFT11_Augment_OverEncumbered",
    "TFT_Augment_BlazingSoul2",
    "TFT14_Augment_BlackMarketBlueBattery",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Needlessly Large Rod, Sparring Gloves and Giant's Belt.",
    "Veigar can also hold Manazane and Fishbones.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-cyberboss-reroll",
  },
} satisfies Comp;
