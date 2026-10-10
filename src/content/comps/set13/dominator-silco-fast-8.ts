import type { Comp } from "../../types";

export default {
  slug: "set13-dominator-silco-fast-8",
  name: "Dominator Silco (Fast 8)",
  set: 13,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Silco. Silco carries alongside Mordekaiser (Quicksilver, Edge of Night and Nashor's Tooth). The board runs 6 Dominator, 3 Black Rose and 2 Sorcerer.",
  board: [
    { apiName: "TFT13_Vladimir", hex: 1 },
    { apiName: "TFT13_DrMundo", hex: 2 },
    {
      apiName: "TFT13_Mordekaiser",
      hex: 3,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_GuardianAngel", "TFT_Item_Leviathan"],
    },
    {
      apiName: "TFT13_Blitzcrank",
      hex: 4,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_IonicSpark", "TFT_Item_NightHarvester"],
    },
    { apiName: "TFT13_Cassiopeia", hex: 21 },
    { apiName: "TFT13_Silco", hex: 23, carry: true },
    { apiName: "TFT13_LeBlanc", hex: 25 },
    {
      apiName: "TFT13_Ziggs",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT4_Item_OrnnMuramana", "TFT_Item_BlueBuff"],
    },
  ],
  early: [
    { apiName: "TFT13_Vladimir", hex: 1 },
    { apiName: "TFT13_Trundle", hex: 2 },
    { apiName: "TFT13_Amumu", hex: 3 },
    { apiName: "TFT13_Blitzcrank", hex: 4 },
    { apiName: "TFT13_Ziggs", hex: 24, carry: true, items: ["TFT_Item_BlueBuff", "TFT4_Item_OrnnMuramana"] },
  ],
  augments: [
    "TFT_Augment_AnExaltedAdventure",
    "TFT9_Augment_BardPlaybook1",
    "TFT7_Augment_LivingForge",
    "TFT6_Augment_PortableForge",
    "TFT13_Augment_DominatorCrown",
    "TFT13_Augment_DominatorCrest",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Needlessly Large Rod, Sparring Gloves and Giant's Belt.",
    "Mordekaiser can also hold Rapid Firecannon, Sniper's Focus and Zhonya's Paradox.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-dominators-ziggs",
  },
} satisfies Comp;
