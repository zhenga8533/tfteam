import type { Comp } from "../../types";

export default {
  slug: "set13-emissary-garen-gangplank",
  name: "Emissary Garen & Gangplank",
  set: 13,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Garen. Garen (Sunfire Cape, Warmog's Armor and Spirit Visage) carries alongside Gangplank (Last Whisper, Infinity Edge and B.F. Sword). The board runs 4 Emissary, 4 Form Swapper and 2 Bruiser.",
  board: [
    { apiName: "TFT13_Trundle", hex: 0 },
    { apiName: "TFT13_Swain", hex: 2 },
    { apiName: "TFT13_Elise", hex: 4 },
    {
      apiName: "TFT13_Garen",
      hex: 5,
      carry: true,
      items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor", "TFT_Item_Redemption"],
    },
    { apiName: "TFT13_Ambessa", hex: 6, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT13_Tristana", hex: 21 },
    { apiName: "TFT13_Nami", hex: 22 },
    { apiName: "TFT13_Jayce", hex: 25, items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge"] },
    {
      apiName: "TFT13_Gangplank",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT_Item_BFSword"],
    },
  ],
  early: [
    { apiName: "TFT13_Amumu", hex: 2 },
    { apiName: "TFT13_Darius", hex: 3, items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor"] },
    { apiName: "TFT13_Urgot", hex: 10 },
    { apiName: "TFT13_Tristana", hex: 23 },
    { apiName: "TFT13_Draven", hex: 24, items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper"] },
  ],
  augments: [
    "TFT11_Augment_RainingGold",
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_LivingForge",
    "TFT_Augment_ShojinSpirit",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, Last Whisper, B.F. Sword and Negatron Cloak.",
    "Ambessa can also hold Suspicious Trench Coat, Gold Collector and Spectral Cutlass.",
    "Garen can also hold Trickster's Glass and Silvermere Dawn.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-emissary-flex-form-swapper",
  },
} satisfies Comp;
