import type { Comp } from "../../types";

export default {
  slug: "set13-dominator-silco",
  name: "Dominator Silco",
  set: 13,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Silco. Silco (2× Spear of Shojin and Nashor's Tooth) carries alongside Mordekaiser (Quicksilver, Edge of Night and Nashor's Tooth). The board runs 6 Dominator, 3 Black Rose and 2 Form Swapper.",
  board: [
    { apiName: "TFT13_Vladimir", hex: 1 },
    { apiName: "TFT13_Blitzcrank", hex: 2 },
    {
      apiName: "TFT13_Mordekaiser",
      hex: 3,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_GuardianAngel", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT13_DrMundo", hex: 4, items: ["TFT_Item_WarmogsArmor", "TFT_Item_RedBuff", "TFT_Item_Redemption"] },
    { apiName: "TFT13_Elise", hex: 5 },
    { apiName: "TFT13_Ziggs", hex: 21 },
    { apiName: "TFT13_Cassiopeia", hex: 23 },
    { apiName: "TFT13_Jayce", hex: 25 },
    {
      apiName: "TFT13_Silco",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_SpearOfShojin", "TFT_Item_Leviathan"],
    },
  ],
  early: [
    { apiName: "TFT13_Amumu", hex: 2 },
    { apiName: "TFT13_Vladimir", hex: 3 },
    { apiName: "TFT13_Blitzcrank", hex: 4 },
    { apiName: "TFT13_Ziggs", hex: 23 },
    { apiName: "TFT13_Zyra", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_Leviathan"] },
  ],
  augments: [
    "TFT11_Augment_RainingGold",
    "TFT_Augment_GlassCannonII",
    "TFT13_TeamupAugment_BloodBrothers",
    "TFT9_Augment_PumpingUp3",
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
    url: "https://tftacademy.com/tierlist/comps/set-13-rosy-domination",
  },
} satisfies Comp;
