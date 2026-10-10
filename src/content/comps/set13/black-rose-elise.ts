import type { Comp } from "../../types";

export default {
  slug: "set13-black-rose-elise",
  name: "Black Rose Elise",
  set: 13,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Elise. Elise (Spear of Shojin, Jeweled Gauntlet and Striker's Flail) carries. The board runs 5 Black Rose, 4 Form Swapper and 3 Sorcerer.",
  board: [
    { apiName: "TFT13_Vladimir", hex: 2 },
    { apiName: "TFT13_Gangplank", hex: 3 },
    { apiName: "TFT13_Garen", hex: 4, items: ["TFT_Item_WarmogsArmor", "TFT_Item_Redemption", "TFT_Item_RedBuff"] },
    { apiName: "TFT13_Swain", hex: 5 },
    { apiName: "TFT13_Morgana", hex: 21 },
    { apiName: "TFT13_Cassiopeia", hex: 22 },
    { apiName: "TFT13_Jayce", hex: 23, items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge"] },
    { apiName: "TFT13_LeBlanc", hex: 25, items: ["TFT_Item_StatikkShiv", "TFT_Item_RapidFireCannon"] },
    {
      apiName: "TFT13_Elise",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT13_Darius", hex: 2 },
    { apiName: "TFT13_Vladimir", hex: 3 },
    { apiName: "TFT13_Zyra", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT11_Augment_Reinfourcement",
    "TFT_Augment_BlazingSoul2",
    "TFT9_Augment_PumpingUp3",
    "TFT_Augment_GlassCannonI",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Jeweled Gauntlet, Tear of the Goddess and Needlessly Large Rod.",
    "Elise can also hold Manazane.",
    "Favor economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-rosy-spider",
  },
} satisfies Comp;
