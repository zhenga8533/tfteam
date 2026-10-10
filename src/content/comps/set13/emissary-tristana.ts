import type { Comp } from "../../types";

export default {
  slug: "set13-emissary-tristana",
  name: "Emissary Tristana",
  set: 13,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Tristana. Tristana (Infinity Edge, Guinsoo's Rageblade and Hextech Gunblade) carries. The board runs 4 Emissary, 4 Watcher and 2 Artillerist.",
  board: [
    { apiName: "TFT13_FlyGuy", hex: 2 },
    { apiName: "TFT13_Vladimir", hex: 3, star: 3 },
    { apiName: "TFT13_Garen", hex: 4, items: ["TFT_Item_WarmogsArmor", "TFT_Item_Redemption", "TFT_Item_RedBuff"] },
    { apiName: "TFT13_Prime", hex: 5, star: 3 },
    { apiName: "TFT13_Ambessa", hex: 12 },
    { apiName: "TFT13_Ekko", hex: 17 },
    { apiName: "TFT13_Nami", hex: 21 },
    { apiName: "TFT13_Corki", hex: 26, items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge"] },
    {
      apiName: "TFT13_Tristana",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade"],
    },
  ],
  early: [
    { apiName: "TFT13_Darius", hex: 2 },
    { apiName: "TFT13_Amumu", hex: 3 },
    { apiName: "TFT13_Urgot", hex: 10 },
    { apiName: "TFT13_Draven", hex: 23 },
    { apiName: "TFT13_Tristana", hex: 24, carry: true, items: ["TFT_Item_InfinityEdge"] },
  ],
  augments: ["TFT9_Augment_BardPlaybook1", "TFT13_Augment_Artillerist", "TFT_Augment_GuardbreakerSpirit"],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Infinity Edge, Giant's Belt and B.F. Sword.",
    "Tristana can also hold Gold Collector, Fishbones and Sniper's Focus.",
    "Tristana can also hold Radiant Giant Slayer.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-artillessaries",
  },
} satisfies Comp;
