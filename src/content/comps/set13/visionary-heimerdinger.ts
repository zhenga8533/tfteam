import type { Comp } from "../../types";

export default {
  slug: "set13-visionary-heimerdinger",
  name: "Visionary Heimerdinger",
  set: 13,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Heimerdinger. Heimerdinger (Blue Buff, Jeweled Gauntlet and Striker's Flail) carries. The board runs 6 Visionary, 3 Chem-Baron and 2 Bruiser.",
  board: [
    { apiName: "TFT13_Chainsaw", hex: 3, star: 3, items: ["TFT_Item_Redemption", "TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT13_NunuWillump", hex: 16 },
    { apiName: "TFT13_Singed", hex: 17, star: 3 },
    { apiName: "TFT13_Rell", hex: 18, star: 3 },
    { apiName: "TFT13_Morgana", hex: 21 },
    { apiName: "TFT13_Malzahar", hex: 23, items: ["TFT_Item_RapidFireCannon", "TFT_Item_StatikkShiv"] },
    {
      apiName: "TFT13_Heimerdinger",
      hex: 25,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT13_RenataGlasc", hex: 27 },
  ],
  early: [
    { apiName: "TFT13_Chainsaw", hex: 2 },
    { apiName: "TFT13_Singed", hex: 3 },
    { apiName: "TFT13_Gremlin", hex: 4 },
    { apiName: "TFT13_RenataGlasc", hex: 24, star: 3 },
  ],
  augments: [
    "TFT13_Augment_Chembaron",
    "TFT_Augment_TitanicTitan",
    "TFT13_Augment_VisionaryCrown",
    "TFT13_Augment_Visionary",
    "TFT6_Augment_PandorasItems",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Needlessly Large Rod, Giant's Belt and Sparring Gloves.",
    "Heimerdinger can also hold Blue Buff, Archangel's Staff and Hextech Gunblade.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-2020-vision-chem-barons",
  },
} satisfies Comp;
