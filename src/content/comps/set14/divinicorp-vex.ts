import type { Comp } from "../../types";

export default {
  slug: "set14-divinicorp-vex",
  name: "Divinicorp Vex",
  set: 14,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Vex. Vex (Blue Buff, Hextech Gunblade and Striker's Flail) carries alongside Varus (Red Buff and Void Staff). The board runs 4 Divinicorp, 3 Exotech and 2 Bastion.",
  board: [
    { apiName: "TFT14_Gragas", hex: 1 },
    { apiName: "TFT14_Renekton", hex: 2 },
    { apiName: "TFT14_Viego", hex: 3 },
    { apiName: "TFT14_Mordekaiser", hex: 4, star: 3, items: ["TFT_Item_Crownguard", "TFT_Item_NightHarvester"] },
    {
      apiName: "TFT14_Sejuani",
      hex: 5,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_Redemption", "TFT_Item_AdaptiveHelm"],
    },
    { apiName: "TFT14_Aurora", hex: 21 },
    { apiName: "TFT14_Morgana", hex: 23 },
    {
      apiName: "TFT14_Vex",
      hex: 25,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_HextechGunblade", "TFT_Item_PowerGauntlet"],
    },
    {
      apiName: "TFT14_Varus",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_RapidFireCannon", "TFT_Item_StatikkShiv"],
    },
  ],
  early: [
    { apiName: "TFT14_Naafiri", hex: 2 },
    { apiName: "TFT14_Jax", hex: 3 },
    { apiName: "TFT14_Jhin", hex: 23 },
    { apiName: "TFT14_Morgana", hex: 24, items: ["TFT_Item_BlueBuff", "TFT_Item_HextechGunblade"] },
  ],
  augments: [
    "TFT14_Augment_BlackMarketBlueBattery",
    "TFT6_Augment_PandorasItems",
    "TFT14_Augment_Divinicorp_Splash",
    "TFT_Augment_SpiritLink1",
    "TFT_Augment_Golemify",
    "TFT_Augment_ShareTheSpotlight",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Hextech Gunblade, Tear of the Goddess and Giant's Belt.",
    "Vex can also hold Fishbones and Radiant Hextech Gunblade.",
    "Varus can also hold Dynamo Emblem.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-vexotech",
  },
} satisfies Comp;
