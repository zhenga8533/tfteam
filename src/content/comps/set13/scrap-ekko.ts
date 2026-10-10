import type { Comp } from "../../types";

export default {
  slug: "set13-scrap-ekko",
  name: "Scrap Ekko",
  set: 13,
  tier: "X",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Ekko. Ekko (Bloodthirster, Visionary Emblem and Jeweled Gauntlet) carries alongside Heimerdinger (Blue Buff, Jeweled Gauntlet and Striker's Flail). The board runs 6 Visionary, 2 Bruiser and 2 Scrap.",
  board: [
    { apiName: "TFT13_Rell", hex: 1 },
    { apiName: "TFT13_Elise", hex: 2 },
    { apiName: "TFT13_Rumble", hex: 3, items: ["TFT_Item_NeedlesslyLargeRod"] },
    {
      apiName: "TFT13_Ekko",
      hex: 4,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT13_Item_InvokerEmblemItem", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT13_NunuWillump", hex: 5 },
    { apiName: "TFT13_Morgana", hex: 21 },
    { apiName: "TFT13_Malzahar", hex: 24, items: ["TFT_Item_RapidFireCannon", "TFT_Item_StatikkShiv"] },
    {
      apiName: "TFT13_Heimerdinger",
      hex: 27,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT13_Irelia", hex: 2 },
    { apiName: "TFT13_Rell", hex: 3 },
    { apiName: "TFT13_Sett", hex: 4 },
    { apiName: "TFT13_Vex", hex: 24, items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT13_TeamupAugment_Geniuses",
    "TFT_Augment_OneBuffTwoBuff",
    "TFT_Augment_WandOverflow",
    "TFT_Augment_BlazingSoul",
    "TFT13_Augment_Visionary",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Needlessly Large Rod, Negatron Cloak and B.F. Sword.",
    "Ekko can also hold Seeker's Armguard and Zhonya's Paradox.",
    "Heimerdinger can also hold Zhonya's Paradox and Manazane.",
    "Favor economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-geniuses-ekko-heimer",
  },
} satisfies Comp;
