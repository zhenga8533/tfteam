import type { Comp } from "../../types";

export default {
  slug: "set15-bastion-shen",
  name: "Bastion Shen",
  set: 15,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Shen. Shen (Guinsoo's Rageblade, Hextech Gunblade and Giant Slayer) carries. The board runs 6 Bastion, 2 Edgelord and 2 Star Guardian.",
  board: [
    { apiName: "TFT15_Rell", hex: 0 },
    { apiName: "TFT15_Swain", hex: 1 },
    { apiName: "TFT15_Garen", hex: 2 },
    { apiName: "TFT15_Leona", hex: 3 },
    {
      apiName: "TFT15_XinZhao",
      hex: 4,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart"],
    },
    { apiName: "TFT15_Xayah", hex: 25, items: ["TFT_Item_LastWhisper"] },
    {
      apiName: "TFT15_Shen",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT15_Shen", hex: 1, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade"] },
    { apiName: "TFT15_Rell", hex: 2 },
    { apiName: "TFT15_Garen", hex: 3 },
    { apiName: "TFT15_XinZhao", hex: 4 },
  ],
  augments: [
    "TFT15_Augment_ShenCarry",
    "TFT15_Augment_Bastion_RaidBoss",
    "TFT15_Augment_BastionCirclet",
    "TFT7_Augment_BestFriends2",
    "TFT_Augment_BackupDancers",
    "TFT11_Augment_RadiantRefactor",
    "TFT_Augment_HeavyIsTheCrown",
    "TFT_Augment_ClimbTheLadder1",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Hextech Gunblade, Recurve Bow and B.F. Sword.",
    "At level 9, add Volibear and Braum to the board.",
    "Shen can also hold Flickerblades.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-twilight-assault-shen",
  },
} satisfies Comp;
