import type { Comp } from "../../types";

export default {
  slug: "set14-dynamo-miss-fortune",
  name: "Dynamo Miss Fortune",
  set: 14,
  tier: "S",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Miss Fortune. Miss Fortune (Infinity Edge, Striker's Flail and Deathblade) carries alongside Elise (Blue Buff, Hextech Gunblade and Jeweled Gauntlet). The board runs 4 Dynamo, 3 Divinicorp and 2 Bastion.",
  board: [
    { apiName: "TFT14_Gragas", hex: 1 },
    { apiName: "TFT14_Zac", hex: 3, items: ["TFT_Item_FrozenHeart", "TFT_Item_AdaptiveHelm", "TFT_Item_WarmogsArmor"] },
    { apiName: "TFT14_Renekton", hex: 4, items: ["TFT_Item_SpectralGauntlet", "TFT_Item_SteraksGage"] },
    { apiName: "TFT14_Kobuko", hex: 5 },
    { apiName: "TFT14_Poppy", hex: 11 },
    { apiName: "TFT14_Morgana", hex: 21 },
    { apiName: "TFT14_Aurora", hex: 23, items: ["TFT_Item_StatikkShiv", "TFT_Item_RapidFireCannon"] },
    {
      apiName: "TFT14_MissFortune",
      hex: 25,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet", "TFT_Item_Deathblade"],
    },
    {
      apiName: "TFT14_Elise",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_HextechGunblade", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT14_Gragas", hex: 2 },
    { apiName: "TFT14_DrMundo", hex: 3 },
    { apiName: "TFT14_Jhin", hex: 23 },
    { apiName: "TFT14_Morgana", hex: 24, items: ["TFT_Item_BlueBuff", "TFT_Item_HextechGunblade"] },
  ],
  augments: [
    "TFT14_Augment_Thirsty_Vertical",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_CloningFacility",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Needlessly Large Rod, B.F. Sword and Sparring Gloves.",
    "Morgana can also hold Blighting Jewel, Blue Buff and Hextech Gunblade.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-mf-dynamo-flex",
  },
} satisfies Comp;
