import type { Comp } from "../../types";

export default {
  slug: "set15-sniper-jinx",
  name: "Sniper Jinx",
  set: 15,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Jinx. Jinx (Infinity Edge, Giant Slayer and Spear of Shojin) carries. The board runs 3 Sniper, 3 Star Guardian and 2 Heavyweight.",
  board: [
    { apiName: "TFT15_Kobuko", hex: 1 },
    { apiName: "TFT15_Braum", hex: 2 },
    { apiName: "TFT15_KSante", hex: 3, items: ["TFT_Item_SpectralGauntlet", "TFT_Item_RedBuff"] },
    {
      apiName: "TFT15_Poppy",
      hex: 4,
      items: ["TFT_Item_NightHarvester", "TFT_Item_Redemption", "TFT_Item_SteraksGage"],
    },
    { apiName: "TFT15_Varus", hex: 21 },
    { apiName: "TFT15_Xayah", hex: 25 },
    { apiName: "TFT15_Gnar", hex: 26 },
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
    { apiName: "TFT15_Syndra", hex: 24, items: ["TFT_Item_MadredsBloodrazor", "TFT_Item_SpearOfShojin"] },
  ],
  augments: [
    "TFT15_Augment_StarGuardian_TinyTeam",
    "TFT7_Augment_BestFriends1",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT9_Augment_BigGrabBag",
    "TFT6_Augment_Keepers1",
    "TFT6_Augment_Keepers2",
    "TFT9_Augment_HighEndSector",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, B.F. Sword, Recurve Bow and Sparring Gloves.",
    "Poppy can also hold Unending Despair.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-sniper-varus",
  },
} satisfies Comp;
