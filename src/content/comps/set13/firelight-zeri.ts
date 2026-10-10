import type { Comp } from "../../types";

export default {
  slug: "set13-firelight-zeri",
  name: "Firelight Zeri",
  set: 13,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Zeri. Zeri (Guinsoo's Rageblade, Hextech Gunblade and Infinity Edge) carries. The board runs 4 Firelight, 4 Watcher and 2 Automata.",
  board: [
    { apiName: "TFT13_Prime", hex: 1 },
    { apiName: "TFT13_Ekko", hex: 2, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT13_Amumu", hex: 3 },
    { apiName: "TFT13_Garen", hex: 4, items: ["TFT_Item_RedBuff", "TFT13_Item_HoverboardEmblemItem"] },
    {
      apiName: "TFT13_FlyGuy",
      hex: 5,
      star: 3,
      items: ["TFT_Item_Redemption", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT13_KogMaw", hex: 21 },
    {
      apiName: "TFT13_Zeri",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade", "TFT_Item_InfinityEdge"],
    },
  ],
  early: [
    { apiName: "TFT13_Darius", hex: 2 },
    { apiName: "TFT13_Amumu", hex: 3, items: ["TFT_Item_WarmogsArmor"] },
    { apiName: "TFT13_Shooter", hex: 23 },
    { apiName: "TFT13_Zeri", hex: 24, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade"] },
  ],
  augments: [
    "TFT_Augment_TwoMuchValue",
    "TFT_Augment_AnExaltedAdventure",
    "TFT13_Augment_FirelightCrest",
    "TFT13_Augment_FirelightCrown",
    "TFT9_Augment_PumpingUp2",
    "TFT13_Augment_Firelight",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Recurve Bow, Needlessly Large Rod and Giant's Belt.",
    "Zeri can also hold Radiant Guinsoo's Rageblade and Radiant Hextech Gunblade.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-zoom-zoom-zeri",
  },
} satisfies Comp;
