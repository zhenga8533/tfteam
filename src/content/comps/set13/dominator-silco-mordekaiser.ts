import type { Comp } from "../../types";

export default {
  slug: "set13-dominator-silco-mordekaiser",
  name: "Dominator Silco & Mordekaiser",
  set: 13,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Silco. Silco (Void Staff) carries alongside Mordekaiser (Quicksilver, Edge of Night and Nashor's Tooth). The board runs 6 Dominator, 4 Black Rose and 2 Sorcerer.",
  board: [
    {
      apiName: "TFT13_Blitzcrank",
      hex: 3,
      star: 3,
      items: ["TFT_Item_Crownguard", "TFT_Item_Artifact_UnendingDespair", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT13_Elise", hex: 10 },
    {
      apiName: "TFT13_Mordekaiser",
      hex: 15,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_GuardianAngel", "TFT_Item_Leviathan"],
    },
    { apiName: "TFT13_DrMundo", hex: 18 },
    { apiName: "TFT13_Vladimir", hex: 19 },
    {
      apiName: "TFT13_Cassiopeia",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_Leviathan", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "TFT13_LeBlanc", hex: 23, items: ["TFT_Item_RapidFireCannon"] },
    { apiName: "TFT13_Ziggs", hex: 25 },
    { apiName: "TFT13_Silco", hex: 27, carry: true, items: ["TFT_Item_StatikkShiv"] },
  ],
  early: [
    { apiName: "TFT13_Vladimir", hex: 2 },
    { apiName: "TFT13_Blitzcrank", hex: 3, items: ["TFT_Item_Artifact_UnendingDespair"] },
    { apiName: "TFT13_Amumu", hex: 4 },
    { apiName: "TFT13_Ziggs", hex: 23 },
    { apiName: "TFT13_Zyra", hex: 24, items: ["TFT_Item_BlueBuff", "TFT_Item_Leviathan"] },
  ],
  augments: [
    "TFT_Augment_TwoMuchValue",
    "TFT10_Augment_HeroicGrabBag",
    "TFT13_Augment_Dominator",
    "TFT_Augment_GlassCannonII",
    "TFT_Augment_Trifecta2",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Nashor's Tooth, Tear of the Goddess and Chain Vest.",
    "Cassiopeia can also hold Manazane and Lich Bane.",
    "Favor economy, combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-dominator-cassio-reroll",
  },
} satisfies Comp;
