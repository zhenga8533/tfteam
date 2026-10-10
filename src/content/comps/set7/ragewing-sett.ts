import type { Comp } from "../../types";

export default {
  slug: "set7-ragewing-sett",
  name: "Ragewing Sett",
  set: 7,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Sett. Sett (Bloodthirster, Guinsoo's Rageblade and Titan's Resolve) carries alongside Senna (Kraken's Fury, Giant Slayer and Last Whisper). The board runs 5 Ragewing, 2 Dragonmancer and 1 Dragon.",
  board: [
    { apiName: "TFT7_LeeSin", hex: 1 },
    { apiName: "TFT7_Shyvana", hex: 3, items: ["TFT_Item_Morellonomicon"] },
    {
      apiName: "TFT7_Hecarim",
      hex: 5,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart", "TFT_Item_NightHarvester"],
    },
    {
      apiName: "TFT7_Sett",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_GuinsoosRageblade", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT7_Xayah", hex: 21 },
    {
      apiName: "TFT7_Senna",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor", "TFT_Item_LastWhisper"],
    },
  ],
  early: [
    { apiName: "TFT7_Sett", hex: 3, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT7_Senna", hex: 23, carry: true },
    { apiName: "TFT7_Karma", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_LivingForge",
    "TFT7_Augment_PandorasBench",
    "TFT7_Augment_RagewingScorch",
    "TFT6_Augment_Featherweights1",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, B.F. Sword, Sparring Gloves and Negatron Cloak.",
    "At level 9, add Yasuo to the board.",
    "Sett can also hold Flickerblades, Rapid Firecannon and Death's Defiance.",
    "Sett can also hold Sniper's Focus, Titanic Hydra and Mittens.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-7-ragewing-sett",
  },
} satisfies Comp;
