import type { Comp } from "../../types";

export default {
  slug: "set14-techie-brand-kobuko",
  name: "Techie Brand & Kobuko",
  set: 14,
  tier: "C",
  playstyle: "Fast 9",
  difficulty: "Medium",
  summary:
    "A level 9 comp that caps its board around Brand. Brand (Spear of Shojin, Striker's Flail and Jeweled Gauntlet) carries alongside Kobuko (Ionic Spark, Crownguard and Bloodthirster). The board runs 4 Cyberboss, 4 Techie and 3 Strategist.",
  board: [
    { apiName: "TFT14_Ekko", hex: 0 },
    { apiName: "TFT14_Mordekaiser", hex: 1 },
    { apiName: "TFT14_Viego", hex: 2, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT14_Neeko", hex: 3 },
    {
      apiName: "TFT14_Kobuko",
      hex: 4,
      carry: true,
      items: ["TFT_Item_IonicSpark", "TFT_Item_Crownguard", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT14_Poppy", hex: 6 },
    { apiName: "TFT14_Ziggs", hex: 21, items: ["TFT_Item_Morellonomicon", "TFT_Item_StatikkShiv"] },
    { apiName: "TFT14_Veigar", hex: 24 },
    {
      apiName: "TFT14_Brand",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_PowerGauntlet", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT14_Shyvana", hex: 2 },
    { apiName: "TFT14_Poppy", hex: 3 },
    { apiName: "TFT14_Zyra", hex: 23 },
    { apiName: "TFT14_Veigar", hex: 24 },
  ],
  augments: [
    "TFT_Augment_UpwardMobility",
    "TFT6_Augment_MaxLevel10",
    "TFT11_Augment_RainingGold",
    "TFT6_Augment_PortableForge",
    "TFT_Augment_BlazingSoul2",
    "TFT6_Augment_HighEndShopping",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Needlessly Large Rod, Sparring Gloves and Giant's Belt.",
    "Kobuko can also hold Unending Despair.",
    "Ziggs can also hold Techie Emblem.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-bomberman-ziggs",
  },
} satisfies Comp;
