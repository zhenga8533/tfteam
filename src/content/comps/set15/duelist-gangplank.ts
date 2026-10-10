import type { Comp } from "../../types";

export default {
  slug: "set15-duelist-gangplank",
  name: "Duelist Gangplank",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Gangplank. Gangplank (2× Spear of Shojin and Rapid Firecannon) carries. The board runs 6 Duelist, 3 Mighty Mech and 2 Juggernaut.",
  board: [
    { apiName: "TFT15_Kayle", hex: 3 },
    { apiName: "TFT15_Viego", hex: 7 },
    { apiName: "TFT15_Udyr", hex: 8, star: 3, items: ["TFT_Item_SpectralGauntlet", "TFT_Item_RedBuff"] },
    { apiName: "TFT15_JarvanIV", hex: 11 },
    { apiName: "TFT15_Aatrox", hex: 13 },
    {
      apiName: "TFT15_Gangplank",
      hex: 15,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_Artifact_RapidFirecannon", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "TFT15_Ashe", hex: 21 },
    { apiName: "TFT15_KaiSa", hex: 27 },
  ],
  early: [
    {
      apiName: "TFT15_Gangplank",
      hex: 2,
      carry: true,
      items: ["TFT_Item_Artifact_RapidFirecannon", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Lucian", hex: 23 },
    { apiName: "TFT15_Kayle", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_LivingForge",
    "TFT_Augment_SwordOverflow",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT_Augment_AnotherOne",
    "TFT_Augment_ShojinSpirit",
    "TFT11_Augment_RadiantRefactor",
    "TFT6_Augment_RadiantRelics",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, B.F. Sword, Tear of the Goddess and Needlessly Large Rod.",
    "At level 9, add Lee Sin to the board.",
    "Gangplank can also hold 2× Spear of Shojin and Hextech Gunblade.",
    "Gangplank can also hold Radiant Spear of Shojin, Quicksilver and Hextech Gunblade.",
    "Favor combat, economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-d-d-d-duelists",
  },
} satisfies Comp;
