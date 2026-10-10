import type { Comp } from "../../types";

export default {
  slug: "set13-dominator-silco-rumble",
  name: "Dominator Silco & Rumble",
  set: 13,
  tier: "B",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Silco. Silco (Spear of Shojin, Nashor's Tooth and Jeweled Gauntlet) carries alongside Rumble (Rabadon's Deathcap, Hand Of Justice and Jeweled Gauntlet). The board runs 3 Black Rose, 2 Conqueror and 2 Dominator.",
  board: [
    { apiName: "TFT13_Rell", hex: 1 },
    { apiName: "TFT13_Elise", hex: 2 },
    {
      apiName: "TFT13_Rumble",
      hex: 3,
      carry: true,
      items: ["TFT_Item_RabadonsDeathcap", "TFT_Item_UnstableConcoction", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT13_Garen", hex: 4, items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor"] },
    {
      apiName: "TFT13_Mordekaiser",
      hex: 5,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_GuardianAngel", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT13_Vladimir", hex: 14 },
    {
      apiName: "TFT13_Jayce",
      hex: 21,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"],
    },
    {
      apiName: "TFT13_LeBlanc",
      hex: 25,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_GuinsoosRageblade", "TFT_Item_ArchangelsStaff"],
    },
    {
      apiName: "TFT13_Silco",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT13_Leona", hex: 2 },
    { apiName: "TFT13_Irelia", hex: 3, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT13_Ezreal", hex: 23 },
    { apiName: "TFT13_Lux", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_Leviathan"] },
    { apiName: "TFT13_Vex", hex: 25 },
  ],
  augments: [
    "TFT6_Augment_MaxLevel10",
    "TFT_Augment_UpwardMobility",
    "TFT11_Augment_Epoch",
    "TFT9_Augment_PumpingUp",
    "TFT13_Augment_CabalCrown",
    "TFT13_Augment_CabalCrest",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Nashor's Tooth, Tear of the Goddess and Needlessly Large Rod.",
    "Silco can also hold Manazane.",
    "Mordekaiser can also hold Rapid Firecannon, Sniper's Focus and Zhonya's Paradox.",
    "Favor economy, combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-black-rose-legendaries",
  },
} satisfies Comp;
