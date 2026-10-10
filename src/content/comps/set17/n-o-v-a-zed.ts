import type { Comp } from "../../types";

export default {
  slug: "set17-n-o-v-a-zed",
  name: "N.O.V.A. Zed",
  set: 17,
  tier: "B",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Zed. Zed (Edge of Night, Spear of Shojin and Adaptive Helm) carries. The board runs 3 N.O.V.A., 2 Bastion and 2 Brawler.",
  board: [
    { apiName: "TFT17_TahmKench", hex: 1, items: ["TFT_Item_RedBuff", "TFT_Item_BrambleVest", "TFT_Item_FrozenHeart"] },
    { apiName: "TFT17_Maokai", hex: 2 },
    { apiName: "TFT17_Aatrox", hex: 5 },
    { apiName: "TFT17_Rhaast", hex: 6 },
    {
      apiName: "TFT17_Zed",
      hex: 7,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_SpearOfShojin", "TFT_Item_AdaptiveHelm"],
    },
    { apiName: "TFT17_Fiora", hex: 9, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT17_Shen", hex: 16, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT17_Akali", hex: 27 },
  ],
  early: [
    { apiName: "TFT17_RekSai", hex: 2 },
    { apiName: "TFT17_Briar", hex: 3 },
    { apiName: "TFT17_Akali", hex: 4 },
    { apiName: "TFT17_Belveth", hex: 10, items: ["TFT_Item_GuardianAngel"] },
  ],
  augments: [
    "TFT_Augment_OneBuffTwoBuff",
    "TFT_Augment_DuoQueue",
    "TFT11_Augment_Calltochaos",
    "TFT6_Augment_PortableForge",
    "TFT17_Augment_ApotheoticForge",
    "TFT_Augment_Misfits",
    "TFT6_Augment_OneTwoFive",
    "TFT_Augment_ForgeSword",
  ],
  tips: [
    "On carousels and early slams, look for Edge of Night, Adaptive Helm, Sparring Gloves and Giant's Belt.",
    "At level 9, add Morgana, Blitzcrank, Graves and Vex to the board.",
    "Zed can also hold Edge of Night, Spear of Shojin and Brawler Emblem.",
    "Zed can also hold Mittens, Death's Defiance and Zhonya's Paradox.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-invader-zed",
  },
} satisfies Comp;
