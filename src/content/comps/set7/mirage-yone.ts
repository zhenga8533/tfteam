import type { Comp } from "../../types";

export default {
  slug: "set7-mirage-yone",
  name: "Mirage Yone",
  set: 7,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Yone. Yone (Swiftshot Emblem, Guinsoo's Rageblade and Giant Slayer) carries. The board runs 4 Mirage, 3 Warrior and 2 Guardian.",
  board: [
    {
      apiName: "TFT7_Braum",
      hex: 3,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT7_Leona", hex: 10 },
    { apiName: "TFT7_Yasuo", hex: 17 },
    { apiName: "TFT7_Olaf", hex: 18 },
    { apiName: "TFT7_DragonBlue", hex: 21 },
    { apiName: "TFT7_Twitch", hex: 22 },
    {
      apiName: "TFT7_Yone",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT7_Item_SwiftshotEmblemItem", "TFT_Item_GuinsoosRageblade", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  augments: [
    "TFT7_Augment_SwiftshotEmblem",
    "TFT6_Augment_Featherweights1",
    "TFT7_Augment_SwiftshotEmblem2",
    "TFT7_Augment_UrfsGrabBag1",
    "TFT7_Augment_BestFriends2",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, B.F. Sword, Recurve Bow and Giant's Belt.",
    "Yone can also hold Rapid Firecannon.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-7-long-yone",
  },
} satisfies Comp;
