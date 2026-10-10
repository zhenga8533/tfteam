import type { Comp } from "../../types";

export default {
  slug: "set14-techie-brand",
  name: "Techie Brand",
  set: 14,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Brand. Brand (Spear of Shojin, Jeweled Gauntlet and Striker's Flail) carries alongside Kobuko (Techie Emblem, Sunfire Cape and Ionic Spark). The board runs 8 Techie, 3 Street Demon and 2 Bruiser.",
  board: [
    { apiName: "TFT14_Shyvana", hex: 1 },
    { apiName: "TFT14_Neeko", hex: 2 },
    {
      apiName: "TFT14_Kobuko",
      hex: 3,
      carry: true,
      items: ["TFT14_Item_TechieEmblemItem", "TFT_Item_RedBuff", "TFT_Item_IonicSpark"],
    },
    {
      apiName: "TFT14_Viego",
      hex: 4,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT14_Mordekaiser", hex: 5 },
    { apiName: "TFT14_Fiddlesticks", hex: 9 },
    { apiName: "TFT14_Zyra", hex: 21 },
    { apiName: "TFT14_Veigar", hex: 25 },
    {
      apiName: "TFT14_Brand",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT14_Shyvana", hex: 2 },
    { apiName: "TFT14_Poppy", hex: 3 },
    { apiName: "TFT14_Veigar", hex: 23 },
    { apiName: "TFT14_Seraphine", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT14_Augment_TechieCrest",
    "TFT14_Augment_TechieCrown",
    "TFT14_Augment_Techie_Splash",
    "TFT_Augment_GlassCannonII",
    "TFT_Augment_CookingPot",
    "TFT_Augment_BlazingSoul",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Jeweled Gauntlet, Giant's Belt and Sparring Gloves.",
    "Brand can also hold Manazane and Sniper's Focus.",
    "Viego can also hold Zhonya's Paradox.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-techies",
  },
} satisfies Comp;
