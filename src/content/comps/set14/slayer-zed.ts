import type { Comp } from "../../types";

export default {
  slug: "set14-slayer-zed",
  name: "Slayer Zed",
  set: 14,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Zed. Zed (Quicksilver, Infinity Edge and Striker's Flail) carries alongside Garen (Divinicorp Emblem, Sterak's Gage and Infinity Edge). The board runs 6 Divinicorp, 4 Slayer and 2 Bruiser.",
  board: [
    { apiName: "TFT14_Jarvan", hex: 1 },
    {
      apiName: "TFT14_Zed",
      hex: 2,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet"],
    },
    {
      apiName: "TFT14_Garen",
      hex: 3,
      carry: true,
      items: ["TFT14_Item_DivinicorpEmblemItem", "TFT_Item_SteraksGage", "TFT_Item_InfinityEdge"],
    },
    { apiName: "TFT14_DrMundo", hex: 4 },
    { apiName: "TFT14_Gragas", hex: 5 },
    { apiName: "TFT14_Rhaast", hex: 6 },
    {
      apiName: "TFT14_Renekton",
      hex: 14,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_Bloodthirster", "TFT_Item_SteraksGage"],
    },
    { apiName: "TFT14_Senna", hex: 21 },
    { apiName: "TFT14_Vex", hex: 27 },
  ],
  early: [
    { apiName: "TFT14_Rhaast", hex: 2 },
    {
      apiName: "TFT14_Shaco",
      hex: 3,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_SteraksGage", "TFT14_Item_DivinicorpEmblemItem"],
    },
    { apiName: "TFT14_Sylas", hex: 4 },
    { apiName: "TFT14_Vayne", hex: 24 },
  ],
  augments: ["TFT14_Augment_DivinicorpCrest", "TFT14_Augment_DivinicorpCrown", "TFT_Augment_SwordOverflow"],
  tips: [
    "On carousels and early slams, look for Infinity Edge, B.F. Sword, Sparring Gloves and Giant's Belt.",
    "Renekton can also hold Slayer Emblem.",
    "Zed can also hold Infinity Force and Mittens.",
    "Favor economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-divinicorp-vex",
  },
} satisfies Comp;
