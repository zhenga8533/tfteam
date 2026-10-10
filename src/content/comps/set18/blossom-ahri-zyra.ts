import type { Comp } from "../../types";

export default {
  slug: "set18-blossom-ahri-zyra",
  name: "Blossom Ahri & Zyra",
  set: 18,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Ahri. Ahri (Jeweled Gauntlet, Striker's Flail and Spear of Shojin) carries alongside Zyra (Void Staff, Morellonomicon and Spear of Shojin). The board runs 3 Blossom, 2 Brawler and 2 Juggernaut.",
  board: [
    { apiName: "DA_18_Yorick", hex: 0 },
    { apiName: "DA_Amumu18", hex: 3 },
    { apiName: "DA_18_Sett", hex: 4, items: ["TFT_Item_WarmogsArmor", "TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"] },
    { apiName: "DA_Taric18", hex: 9 },
    { apiName: "DA_18_Diana", hex: 10 },
    { apiName: "DA_18_GnarSmall", hex: 17, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "DA_18_Zyra",
      hex: 25,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "DA_18_Alune", hex: 26 },
    {
      apiName: "DA_18_Ahri",
      hex: 27,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet", "TFT_Item_SpearOfShojin"],
    },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Yunara", hex: 23 },
    { apiName: "DA_Karma18", hex: 24 },
  ],
  augments: [
    "DA_JeweledLotus_I",
    "DA_JeweledLotus_II",
    "DA_GlassCannon_Silver",
    "DA_GlassCannon_Gold",
    "DA_18_FOURcing",
    "DA_Staffsmith",
    "DA_18_FloraFatalisAugment",
    "DA_CyberneticUplink_Gold",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Jeweled Gauntlet, Giant's Belt and Tear of the Goddess.",
    "Ahri can also hold Flora Fatalis Emblem and Lunar Emblem.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-spellweavers",
  },
} satisfies Comp;
