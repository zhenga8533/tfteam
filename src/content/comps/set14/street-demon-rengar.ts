import type { Comp } from "../../types";

export default {
  slug: "set14-street-demon-rengar",
  name: "Street Demon Rengar",
  set: 14,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Rengar. Rengar (Sterak's Gage, Bloodthirster and Titan's Resolve) carries alongside Jinx (Last Whisper, Spear of Shojin and Infinity Edge). The board runs 7 Street Demon, 2 Executioner and 2 Strategist.",
  board: [
    { apiName: "TFT14_Ekko", hex: 1 },
    {
      apiName: "TFT14_Rengar",
      hex: 3,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT14_Neeko", hex: 5 },
    { apiName: "TFT14_DrMundo", hex: 10 },
    {
      apiName: "TFT14_Jinx",
      hex: 22,
      star: 3,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge"],
    },
    { apiName: "TFT14_Vex", hex: 23 },
    { apiName: "TFT14_Zyra", hex: 24 },
    { apiName: "TFT14_Brand", hex: 25, items: ["TFT_Item_Morellonomicon", "TFT_Item_SpearOfShojin"] },
  ],
  early: [
    { apiName: "TFT14_Rengar", hex: 2, carry: true, items: ["TFT_Item_Bloodthirster", "TFT_Item_SteraksGage"] },
    { apiName: "TFT14_Alistar", hex: 3 },
    { apiName: "TFT14_DrMundo", hex: 4, items: ["TFT14_Item_CutterEmblemItem"] },
    { apiName: "TFT14_Zyra", hex: 24 },
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
    "On carousels and early slams, look for B.F. Sword, Negatron Cloak, Giant's Belt and Sparring Gloves.",
    "Rengar can also hold Prowler's Claw, Silvermere Dawn and Spectral Cutlass.",
    "Jinx can also hold Manazane and Executioner Emblem.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-kitty-kitty-boom-boom",
  },
} satisfies Comp;
