import type { Comp } from "../../types";

export default {
  slug: "set13-sniper-zeri",
  name: "Sniper Zeri",
  set: 13,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Zeri. Zeri (2× Guinsoo's Rageblade and Hextech Gunblade) carries. The board runs 6 Sentinel, 2 Enforcer and 2 Sniper.",
  board: [
    { apiName: "TFT13_Leona", hex: 1 },
    { apiName: "TFT13_Irelia", hex: 2 },
    { apiName: "TFT13_Beardy", hex: 3 },
    {
      apiName: "TFT13_Rell",
      hex: 4,
      star: 3,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_RedBuff", "TFT_Item_Redemption"],
    },
    {
      apiName: "TFT13_Singed",
      hex: 5,
      star: 3,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_WarmogsArmor", "TFT_Item_Crownguard"],
    },
    { apiName: "TFT13_Illaoi", hex: 6 },
    { apiName: "TFT13_Shooter", hex: 21 },
    {
      apiName: "TFT13_Zeri",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade", "TFT_Item_GuinsoosRageblade"],
    },
  ],
  early: [
    { apiName: "TFT13_Irelia", hex: 2 },
    { apiName: "TFT13_Singed", hex: 3, items: ["TFT_Item_FrozenHeart", "TFT_Item_RedBuff"] },
    { apiName: "TFT13_Shooter", hex: 23 },
    { apiName: "TFT13_Zeri", hex: 24, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade"] },
  ],
  augments: [
    "TFT6_Augment_PandorasItems",
    "TFT9_Augment_PumpingUp2",
    "TFT13_Augment_SentinelCrown",
    "TFT11_Augment_ScoreboardScrapper",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Hextech Gunblade, Giant's Belt and Chain Vest.",
    "Zeri can also hold Radiant Guinsoo's Rageblade and Radiant Hextech Gunblade.",
    "Favor combat, economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-sentinel-zeri",
  },
} satisfies Comp;
