import type { Comp } from "../../types";

export default {
  slug: "set18-blossom-ahri",
  name: "Blossom Ahri",
  set: 18,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Ahri. Ahri (Jeweled Gauntlet, Striker's Flail and Spear of Shojin) carries. The board runs 3 Invoker, 3 Blossom and 3 Riftbeast.",
  board: [
    {
      apiName: "DA_Sentinel18",
      hex: 3,
      items: ["TFT_Item_DragonsClaw", "TFT_Item_BrambleVest", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "DA_18_Sett", hex: 9 },
    { apiName: "DA_Taric18", hex: 10 },
    { apiName: "DA_Krug18", hex: 16 },
    { apiName: "DA_18_Morgana", hex: 17, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    { apiName: "DA_Karma18", hex: 21 },
    {
      apiName: "DA_18_Ahri",
      hex: 23,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "DA_18_Sentry", hex: 25 },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Yunara", hex: 23 },
    { apiName: "DA_Karma18", hex: 24, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_SpearOfShojin"] },
  ],
  augments: [
    "DA_JeweledLotus_I",
    "DA_JeweledLotus_II",
    "DA_GlassCannon_Silver",
    "DA_GlassCannon_Gold",
    "DA_18_FOURcing",
    "DA_Staffsmith",
    "DA_CyberneticUplink_Gold",
    "DA_WandOverflow",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Jeweled Gauntlet, Giant's Belt and Tear of the Goddess.",
    "At level 9, add Hecarim, Alune and Ashe to the board.",
    "Ahri can also hold Invoker Emblem.",
    "Morgana can also hold Blighting Jewel, Void Staff and Morellonomicon.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-ahri-morgana",
  },
} satisfies Comp;
