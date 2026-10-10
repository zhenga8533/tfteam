import type { Comp } from "../../types";

export default {
  slug: "set16-bilgewater-tahm-kench-graves",
  name: "Bilgewater Tahm Kench & Graves",
  set: 16,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Hard",
  summary:
    "A 2-cost reroll comp built around three-star Tahm Kench. Tahm Kench (Protector's Vow and Adaptive Helm) carries alongside Graves  (Quicksilver and Giant Slayer). The board runs 5 Bilgewater, 2 Bruiser and 2 Gunslinger.",
  board: [
    { apiName: "TFT16_Wukong", hex: 1 },
    { apiName: "TFT16_Shyvana", hex: 2 },
    { apiName: "TFT16_Ornn", hex: 3 },
    { apiName: "TFT16_TahmKench", hex: 4, carry: true, items: ["TFT_Item_FrozenHeart", "TFT_Item_AdaptiveHelm"] },
    {
      apiName: "TFT16_Nautilus",
      hex: 5,
      star: 3,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    {
      apiName: "TFT16_Graves",
      hex: 11,
      star: 3,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_MadredsBloodrazor"],
    },
    { apiName: "TFT16_Kindred", hex: 21 },
    { apiName: "TFT16_TwistedFate", hex: 25, items: ["TFT_Item_Morellonomicon"] },
    { apiName: "TFT16_MissFortune", hex: 27 },
  ],
  early: [
    { apiName: "TFT16_Shen", hex: 2 },
    { apiName: "TFT16_Illaoi", hex: 3 },
    { apiName: "TFT16_Graves", hex: 10, carry: true, items: ["TFT_Item_Quicksilver", "TFT_Item_MadredsBloodrazor"] },
    { apiName: "TFT16_TwistedFate", hex: 24, items: ["TFT_Item_Morellonomicon"] },
  ],
  augments: [
    "TFT_Augment_SweetTreats",
    "TFT_Augment_WarmogsBuckle",
    "TFT_Augment_ItemSpiritVisage",
    "TFT6_Augment_PortableForge",
    "TFT_Augment_HomeCooking",
    "TFT11_Augment_Epoch",
    "TFT_Augment_Pyromaniac",
    "TFT6_Augment_Distancing",
  ],
  tips: [
    "On carousels and early slams, look for Quicksilver, B.F. Sword, Sparring Gloves and Giant's Belt.",
    "At level 9, add Lucian & Senna and Volibear  to the board.",
    "Twisted Fate can also hold Lich Bane and Statikk Shiv.",
    "Graves  can also hold Rapid Firecannon and Infinity Edge.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-partners-in-crime",
  },
} satisfies Comp;
