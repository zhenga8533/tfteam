import type { Comp } from "../../types";

export default {
  slug: "set16-ionia-ahri-yone",
  name: "Ionia Ahri & Yone",
  set: 16,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Ahri. Ahri carries alongside Yone (Bloodthirster, Titan's Resolve and Guinsoo's Rageblade). The board runs 5 Ionia, 2 Arcanist and 2 Bruiser.",
  board: [
    {
      apiName: "TFT16_Sylas",
      hex: 0,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_JeweledGauntlet", "TFT_Item_GuardianAngel"],
    },
    {
      apiName: "TFT16_Wukong",
      hex: 1,
      items: ["TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet", "TFT_Item_IonicSpark"],
    },
    {
      apiName: "TFT16_Yone",
      hex: 2,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_GuinsoosRageblade"],
    },
    { apiName: "TFT16_Aatrox", hex: 3, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Kennen", hex: 4 },
    { apiName: "TFT16_Kobuko", hex: 5 },
    { apiName: "TFT16_Sett", hex: 6, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Ahri", hex: 21, carry: true },
    { apiName: "TFT16_Zilean", hex: 24 },
  ],
  early: [
    { apiName: "TFT16_Shen", hex: 2 },
    { apiName: "TFT16_Briar", hex: 3 },
    { apiName: "TFT16_Yasuo", hex: 4 },
    { apiName: "TFT16_Ahri", hex: 24, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT9_Augment_LearningFromExperience2",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_ForgeSword",
    "TFT11_Augment_Calltochaos",
    "TFT11_Augment_Epoch",
  ],
  tips: [
    "On carousels and early slams, look for Needlessly Large Rod, Recurve Bow, Sparring Gloves and Giant's Belt.",
    "At level 9, add Neeko, Yasuo, Fiddlesticks and Lucian & Senna to the board.",
    "Yone can also hold Mittens, Death's Defiance and Infinity Force.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-iyoneia",
  },
} satisfies Comp;
