import type { Comp } from "../../types";

export default {
  slug: "set15-star-guardian-jinx-fast-8",
  name: "Star Guardian Jinx (Fast 8)",
  set: 15,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Jinx. Jinx (Infinity Edge, Giant Slayer and Spear of Shojin) carries. The board runs 6 Bastion, 3 Star Guardian and 2 Edgelord.",
  board: [
    { apiName: "TFT15_Shen", hex: 0 },
    { apiName: "TFT15_XinZhao", hex: 1 },
    { apiName: "TFT15_Swain", hex: 2 },
    { apiName: "TFT15_Braum", hex: 3 },
    {
      apiName: "TFT15_Leona",
      hex: 4,
      items: ["TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT15_Rell", hex: 5 },
    { apiName: "TFT15_Xayah", hex: 25 },
    {
      apiName: "TFT15_Jinx",
      hex: 27,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_MadredsBloodrazor", "TFT_Item_SpearOfShojin"],
    },
  ],
  early: [
    { apiName: "TFT15_Shen", hex: 2 },
    { apiName: "TFT15_Rell", hex: 3 },
    { apiName: "TFT15_Xayah", hex: 23 },
    { apiName: "TFT15_Syndra", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_MadredsBloodrazor"] },
  ],
  augments: [
    "TFT15_Augment_StarGuardian_TinyTeam",
    "TFT7_Augment_BestFriends1",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT9_Augment_BigGrabBag",
    "TFT6_Augment_Keepers1",
    "TFT6_Augment_Keepers2",
    "TFT15_Augment_BastionCirclet",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, B.F. Sword, Recurve Bow and Sparring Gloves.",
    "At level 9, add Gnar and Varus to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-tiny-team-bastions",
  },
} satisfies Comp;
