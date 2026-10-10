import type { Comp } from "../../types";

export default {
  slug: "set15-star-guardian-xayah",
  name: "Star Guardian Xayah",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Xayah. Xayah (Kraken's Fury, Giant Slayer and Guinsoo's Rageblade) carries. The board runs 6 Bastion, 3 Star Guardian and 2 Edgelord.",
  board: [
    { apiName: "TFT15_Garen", hex: 0 },
    { apiName: "TFT15_Rell", hex: 1 },
    { apiName: "TFT15_Swain", hex: 2 },
    { apiName: "TFT15_Leona", hex: 3 },
    {
      apiName: "TFT15_Shen",
      hex: 4,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet", "TFT_Item_Redemption"],
    },
    { apiName: "TFT15_XinZhao", hex: 5 },
    { apiName: "TFT15_Jinx", hex: 26 },
    {
      apiName: "TFT15_Xayah",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor", "TFT_Item_GuinsoosRageblade"],
    },
  ],
  early: [
    { apiName: "TFT15_Shen", hex: 2 },
    { apiName: "TFT15_Garen", hex: 3 },
    { apiName: "TFT15_XinZhao", hex: 4 },
    {
      apiName: "TFT15_Xayah",
      hex: 24,
      carry: true,
      items: ["TFT_Item_RunaansHurricane", "TFT_Item_GuinsoosRageblade"],
    },
  ],
  augments: [
    "TFT10_Augment_HeroicGrabBag",
    "TFT6_Augment_Keepers1",
    "TFT_Augment_TwoMuchValue",
    "TFT_Augment_AnExaltedAdventure",
    "TFT15_Augment_StarGuardian_TinyTeam",
    "TFT6_Augment_PandorasItems",
    "TFT_Augment_SpiritLink1",
  ],
  tips: [
    "On carousels and early slams, look for Kraken's Fury, Recurve Bow, B.F. Sword and Chain Vest.",
    "At level 9, add Braum to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-xayah-bastion",
  },
} satisfies Comp;
