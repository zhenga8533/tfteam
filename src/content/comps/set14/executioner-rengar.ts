import type { Comp } from "../../types";

export default {
  slug: "set14-executioner-rengar",
  name: "Executioner Rengar",
  set: 14,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Rengar. Rengar (Titan's Resolve, Bloodthirster and Hand Of Justice) carries alongside Varus (Spear of Shojin, Void Staff and Morellonomicon). The board runs 6 Executioner, 3 Street Demon and 2 Golden Ox.",
  board: [
    { apiName: "TFT14_Neeko", hex: 3 },
    {
      apiName: "TFT14_Rengar",
      hex: 4,
      star: 3,
      carry: true,
      items: ["TFT_Item_TitansResolve", "TFT_Item_Bloodthirster", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT14_Ekko", hex: 5 },
    { apiName: "TFT14_Viego", hex: 6, items: ["TFT14_Item_CutterEmblemItem"] },
    {
      apiName: "TFT14_Vex",
      hex: 23,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_RabadonsDeathcap", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT14_Urgot", hex: 24, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT14_Graves", hex: 25 },
    {
      apiName: "TFT14_Varus",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"],
    },
  ],
  early: [
    { apiName: "TFT14_DrMundo", hex: 2 },
    { apiName: "TFT14_Rengar", hex: 3, carry: true, items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"] },
    { apiName: "TFT14_Alistar", hex: 4 },
    { apiName: "TFT14_Graves", hex: 10 },
  ],
  augments: [
    "TFT14_Augment_ExecutionerCrest",
    "TFT14_Augment_ExecutionerCrown",
    "TFT_Augment_Trifecta1",
    "TFT_Augment_RiggedShopPlus",
    "TFT7_Augment_LivingForge",
    "TFT6_Augment_PortableForge",
    "TFT_Augment_CookingPot",
    "TFT14_Augment_StreetDemon_Freestyling",
  ],
  tips: [
    "On carousels and early slams, look for Titan's Resolve, B.F. Sword, Negatron Cloak and Sparring Gloves.",
    "Rengar can also hold Prowler's Claw, Spectral Cutlass and Silvermere Dawn.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-executioner-graves",
  },
} satisfies Comp;
