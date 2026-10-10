import type { Comp } from "../../types";

export default {
  slug: "set13-dominator-silco-black-rose",
  name: "Dominator Silco (Black Rose)",
  set: 13,
  tier: "X",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Silco. Silco (2× Spear of Shojin and Nashor's Tooth) carries alongside Mordekaiser (Quicksilver, Edge of Night and Bloodthirster). The board runs 6 Dominator, 3 Black Rose and 2 Scrap.",
  board: [
    { apiName: "TFT13_Vladimir", hex: 0 },
    { apiName: "TFT13_Blue", hex: 1, items: ["TFT13_Item_InfusedEmblemItem", "TFT_Item_TearOfTheGoddess"] },
    {
      apiName: "TFT13_Mordekaiser",
      hex: 2,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_GuardianAngel", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT13_Garen", hex: 3, items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor", "TFT_Item_IonicSpark"] },
    { apiName: "TFT13_DrMundo", hex: 4 },
    {
      apiName: "TFT13_Silco",
      hex: 21,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_Leviathan", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "TFT13_LeBlanc", hex: 23 },
    { apiName: "TFT13_Cassiopeia", hex: 25 },
    { apiName: "TFT13_Ziggs", hex: 27 },
  ],
  early: [
    { apiName: "TFT13_Fish", hex: 2 },
    { apiName: "TFT13_Trundle", hex: 3, items: ["TFT_Item_IonicSpark"] },
    { apiName: "TFT13_Blitzcrank", hex: 4 },
    { apiName: "TFT13_Ziggs", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_Leviathan"] },
  ],
  augments: [
    "TFT13_TeamupAugment_Menaces",
    "TFT13_Augment_CabalCrown",
    "TFT13_Augment_CabalCrest",
    "TFT13_Augment_Dominator",
    "TFT13_Augment_DominatorCrown",
    "TFT9_Augment_PumpingUp",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Nashor's Tooth, Tear of the Goddess and Recurve Bow.",
    "Silco can also hold Manazane.",
    "Mordekaiser can also hold Rapid Firecannon, Sniper's Focus and Zhonya's Paradox.",
    "Favor combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-dominatrix",
  },
} satisfies Comp;
