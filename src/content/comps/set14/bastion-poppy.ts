import type { Comp } from "../../types";

export default {
  slug: "set14-bastion-poppy",
  name: "Bastion Poppy",
  set: 14,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Poppy. Poppy (Bloodthirster, Jeweled Gauntlet and Hand Of Justice) carries alongside Kobuko (Crownguard, Ionic Spark and Warmog's Armor). The board runs 6 Bastion, 4 Cyberboss and 2 Techie.",
  board: [
    { apiName: "TFT14_Galio", hex: 0 },
    { apiName: "TFT14_Sejuani", hex: 1 },
    { apiName: "TFT14_Illaoi", hex: 2 },
    { apiName: "TFT14_Renekton", hex: 3, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT14_Kobuko",
      hex: 5,
      carry: true,
      items: ["TFT_Item_Crownguard", "TFT_Item_IonicSpark", "TFT_Item_WarmogsArmor"],
    },
    {
      apiName: "TFT14_Poppy",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT14_Shyvana", hex: 10 },
    { apiName: "TFT14_Veigar", hex: 21 },
    { apiName: "TFT14_Ziggs", hex: 27, items: ["TFT_Item_RapidFireCannon", "TFT_Item_SpearOfShojin"] },
  ],
  early: [
    { apiName: "TFT14_NidaleeCougar", hex: 2 },
    { apiName: "TFT14_Poppy", hex: 3, carry: true, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT14_Shyvana", hex: 4 },
    { apiName: "TFT14_Kindred", hex: 24 },
  ],
  augments: [
    "TFT14_Augment_PoppyCarry",
    "TFT9_Augment_MissedConnections",
    "TFT14_Augment_Cyberboss_Cower",
    "TFT14_Augment_Cyberboss_HighScore",
    "TFT14_Augment_Armorclad_Splash",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Needlessly Large Rod, Sparring Gloves and Tear of the Goddess.",
    "Poppy can also hold Seeker's Armguard.",
    "Favor combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-button-mash-poppy",
  },
} satisfies Comp;
