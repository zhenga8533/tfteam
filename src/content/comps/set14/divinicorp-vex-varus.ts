import type { Comp } from "../../types";

export default {
  slug: "set14-divinicorp-vex-varus",
  name: "Divinicorp Vex & Varus",
  set: 14,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Vex. Vex (Blue Buff, Hextech Gunblade and Striker's Flail) carries alongside Varus (Red Buff and Void Staff). The board runs 4 Bruiser, 3 Divinicorp and 3 Executioner.",
  board: [
    { apiName: "TFT14_Gragas", hex: 1 },
    { apiName: "TFT14_Kobuko", hex: 2 },
    {
      apiName: "TFT14_Chogath",
      hex: 4,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest", "TFT_Item_Redemption"],
    },
    { apiName: "TFT14_Mordekaiser", hex: 5, star: 3, items: ["TFT_Item_Crownguard", "TFT_Item_NightHarvester"] },
    { apiName: "TFT14_Morgana", hex: 21 },
    { apiName: "TFT14_Jhin", hex: 22 },
    { apiName: "TFT14_Urgot", hex: 23, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT14_Vex",
      hex: 25,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_HextechGunblade", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT14_Varus", hex: 27, carry: true, items: ["TFT_Item_RapidFireCannon", "TFT_Item_StatikkShiv"] },
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
    "Vex can also hold Radiant Blue Buff, Hextech Gunblade and Fishbones.",
    "Cho'Gath can also hold Innervating Locket.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-vex-bruisers",
  },
} satisfies Comp;
