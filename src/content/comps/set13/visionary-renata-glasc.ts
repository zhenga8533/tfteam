import type { Comp } from "../../types";

export default {
  slug: "set13-visionary-renata-glasc",
  name: "Visionary Renata Glasc",
  set: 13,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Renata Glasc. Renata Glasc (Spear of Shojin, Archangel's Staff and Quicksilver) carries. The board runs 6 Visionary, 4 Sentinel and 3 Rebel.",
  board: [
    {
      apiName: "TFT13_Rell",
      hex: 3,
      star: 3,
      items: ["TFT_Item_Crownguard", "TFT_Item_GargoyleStoneplate", "TFT_Item_NightHarvester"],
    },
    { apiName: "TFT13_Singed", hex: 10, star: 3, items: ["TFT_Item_RedBuff", "TFT_Item_IonicSpark"] },
    { apiName: "TFT13_Irelia", hex: 17 },
    { apiName: "TFT13_Illaoi", hex: 18 },
    { apiName: "TFT13_Vex", hex: 22, star: 3 },
    { apiName: "TFT13_Malzahar", hex: 23, items: ["TFT_Item_RapidFireCannon", "TFT_Item_StatikkShiv"] },
    {
      apiName: "TFT13_RenataGlasc",
      hex: 24,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_ArchangelsStaff", "TFT_Item_Quicksilver"],
    },
    { apiName: "TFT13_Morgana", hex: 25, star: 3 },
    { apiName: "TFT13_Heimerdinger", hex: 26 },
  ],
  early: [
    { apiName: "TFT13_Singed", hex: 2 },
    { apiName: "TFT13_Rell", hex: 3 },
    { apiName: "TFT13_RenataGlasc", hex: 24, star: 3, carry: true },
  ],
  augments: [
    "TFT_Augment_InvestmentStrategy1",
    "TFT_Augment_InvestmentStrategy2",
    "TFT6_Augment_GachaAddict",
    "TFT13_Augment_Visionary",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Needlessly Large Rod, Tear of the Goddess and Giant's Belt.",
    "Rell can also hold Innervating Locket.",
    "Renata Glasc can also hold Manazane.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-2020-vision",
  },
} satisfies Comp;
