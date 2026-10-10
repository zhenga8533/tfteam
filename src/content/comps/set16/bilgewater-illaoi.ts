import type { Comp } from "../../types";

export default {
  slug: "set16-bilgewater-illaoi",
  name: "Bilgewater Illaoi",
  set: 16,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Illaoi. Illaoi (Titan's Resolve, Bloodthirster and Sterak's Gage) carries. The board runs 7 Bilgewater, 2 Bruiser and 2 Gunslinger.",
  board: [
    { apiName: "TFT16_Swain", hex: 1 },
    { apiName: "TFT16_Fizz", hex: 2 },
    { apiName: "TFT16_TahmKench", hex: 3, items: ["TFT_Item_FrozenHeart", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT16_Gangplank", hex: 4 },
    { apiName: "TFT16_Nautilus", hex: 5, star: 3, items: ["TFT_Item_RedBuff", "TFT_Item_Redemption"] },
    {
      apiName: "TFT16_Illaoi",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_TitansResolve", "TFT_Item_Bloodthirster", "TFT_Item_SteraksGage"],
    },
    { apiName: "TFT16_Graves", hex: 13 },
    { apiName: "TFT16_MissFortune", hex: 27, items: ["TFT_Item_LastWhisper"] },
  ],
  early: [
    { apiName: "TFT16_Illaoi", hex: 3, carry: true, items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"] },
    { apiName: "TFT16_Graves", hex: 10 },
    { apiName: "TFT16_TwistedFate", hex: 23 },
    { apiName: "TFT16_Bard", hex: 24 },
  ],
  augments: [
    "TFT16_Augment_IllaoiCarry",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_TheDarkinBlade",
    "TFT_Augment_Retribution",
    "TFT6_Augment_GachaAddict",
    "TFT9_Augment_MissedConnections",
    "TFT6_Augment_MakeshiftArmor2",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Recurve Bow, Chain Vest and B.F. Sword.",
    "At level 9, add Fiddlesticks, Lucian & Senna, Ornn and Shyvana to the board.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-leap-of-faith-illaoi-bilgewater",
  },
} satisfies Comp;
