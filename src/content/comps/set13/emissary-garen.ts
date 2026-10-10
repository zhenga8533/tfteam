import type { Comp } from "../../types";

export default {
  slug: "set13-emissary-garen",
  name: "Emissary Garen",
  set: 13,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Garen. Garen (Sunfire Cape, Warmog's Armor and Spirit Visage) carries alongside Corki (Last Whisper, Infinity Edge and Giant Slayer). The board runs 4 Emissary, 2 Artillerist and 2 Conqueror.",
  board: [
    { apiName: "TFT13_Vladimir", hex: 1 },
    { apiName: "TFT13_Rumble", hex: 3 },
    {
      apiName: "TFT13_Garen",
      hex: 4,
      carry: true,
      items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor", "TFT_Item_Redemption"],
    },
    { apiName: "TFT13_Rell", hex: 5 },
    { apiName: "TFT13_Ambessa", hex: 13, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT13_Tristana", hex: 21 },
    { apiName: "TFT13_Nami", hex: 25 },
    {
      apiName: "TFT13_Corki",
      hex: 27,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT13_Red", hex: 2 },
    { apiName: "TFT13_Darius", hex: 3, items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor"] },
    { apiName: "TFT13_Amumu", hex: 4 },
    { apiName: "TFT13_Draven", hex: 24, items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper"] },
  ],
  augments: [
    "TFT11_Augment_RainingGold",
    "TFT_Augment_BronzeForLife2",
    "TFT_Augment_QualityOverQuantity",
    "TFT11_Augment_Reinfourcement",
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
    url: "https://tftacademy.com/tierlist/comps/set-13-ambessa-sary",
  },
} satisfies Comp;
