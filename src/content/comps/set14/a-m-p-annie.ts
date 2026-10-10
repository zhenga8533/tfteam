import type { Comp } from "../../types";

export default {
  slug: "set14-a-m-p-annie",
  name: "A.M.P. Annie",
  set: 14,
  tier: "C",
  playstyle: "Fast 9",
  difficulty: "Medium",
  summary:
    "A level 9 comp that caps its board around Annie. Annie (Blue Buff, Nashor's Tooth and Void Staff) carries alongside Yuumi (Jeweled Gauntlet, Hextech Gunblade and Blue Buff). The board runs 5 A.M.P., 3 Strategist and 3 Street Demon.",
  board: [
    { apiName: "TFT14_Zac", hex: 1, items: ["TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart"] },
    { apiName: "TFT14_Viego", hex: 2 },
    { apiName: "TFT14_Neeko", hex: 3 },
    { apiName: "TFT14_Ekko", hex: 5 },
    { apiName: "TFT14_Naafiri", hex: 7 },
    { apiName: "TFT14_NidaleeCougar", hex: 13 },
    {
      apiName: "TFT14_Annie",
      hex: 21,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_Leviathan", "TFT_Item_StatikkShiv"],
    },
    {
      apiName: "TFT14_Yuumi",
      hex: 23,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_HextechGunblade", "TFT_Item_BlueBuff"],
    },
    { apiName: "TFT14_Samira", hex: 27, items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge"] },
  ],
  early: [
    { apiName: "TFT14_Shyvana", hex: 2 },
    { apiName: "TFT14_NidaleeCougar", hex: 3 },
    { apiName: "TFT14_Yuumi", hex: 23, carry: true, items: ["TFT_Item_BlueBuff", "TFT_Item_Leviathan"] },
    { apiName: "TFT14_Kindred", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_MaxLevel10",
    "TFT_Augment_OneBuffTwoBuff",
    "TFT14_Augment_BlackMarketBlueBattery",
    "TFT6_Augment_PandorasItems",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Needlessly Large Rod, Tear of the Goddess and Giant's Belt.",
    "Annie can also hold Manazane.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-strategist-amp",
  },
} satisfies Comp;
