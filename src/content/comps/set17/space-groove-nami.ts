import type { Comp } from "../../types";

export default {
  slug: "set17-space-groove-nami",
  name: "Space Groove Nami",
  set: 17,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Nami. Nami (Jeweled Gauntlet and 2× Nashor's Tooth) carries alongside Riven (Space Groove Emblem, Bloodthirster and Sterak's Gage). The board runs 5 Space Groove, 3 Timebreaker and 2 Bastion.",
  board: [
    {
      apiName: "TFT17_Ornn",
      hex: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor"],
    },
    {
      apiName: "TFT17_Blitzcrank",
      hex: 8,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_IonicSpark", "TFT_Item_Morellonomicon"],
    },
    { apiName: "TFT17_Nunu", hex: 10 },
    { apiName: "TFT17_TahmKench", hex: 13 },
    {
      apiName: "TFT17_Riven",
      hex: 16,
      carry: true,
      items: ["TFT17_Item_SpaceGrooveEmblemItem", "TFT_Item_Bloodthirster", "TFT_Item_SteraksGage"],
    },
    { apiName: "TFT17_Shen", hex: 17 },
    { apiName: "TFT17_Pantheon", hex: 20 },
    {
      apiName: "TFT17_Nami",
      hex: 21,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT17_Gwen", hex: 23 },
  ],
  early: [
    { apiName: "TFT17_Briar", hex: 2 },
    { apiName: "TFT17_Pantheon", hex: 3 },
    { apiName: "TFT17_RekSai", hex: 4 },
    { apiName: "TFT17_Gwen", hex: 10, items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT_Augment_TraitTree",
    "TFT_Augment_ClimbTheLadder1",
    "TFT9_Augment_Commander_Ascension",
    "TFT_Augment_GildedSteel",
    "TFT16_Augment_UltraRapidFire",
    "TFT11_Augment_Reinfourcement",
    "TFT_Augment_GlassCannonI",
  ],
  tips: [
    "On carousels and early slams, look for Jeweled Gauntlet, Gargoyle Stoneplate, Recurve Bow and Giant's Belt.",
    "At level 9, add Morgana to the board.",
    "Tahm Kench can also hold Space Groove Emblem, Warmog's Armor and Gargoyle Stoneplate.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-in-the-groove",
  },
} satisfies Comp;
