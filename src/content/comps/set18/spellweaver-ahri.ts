import type { Comp } from "../../types";

export default {
  slug: "set18-spellweaver-ahri",
  name: "Spellweaver Ahri",
  set: 18,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Ahri. Ahri (Jeweled Gauntlet, Striker's Flail and Spear of Shojin) carries. The board runs 6 Spellweaver, 3 Blossom and 2 Brawler.",
  board: [
    {
      apiName: "DA_18_Sett",
      hex: 2,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_Redemption", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "DA_Fiddlesticks18", hex: 3 },
    { apiName: "DA_18_Lillia", hex: 6, items: ["DA_18_EmblemSpellweaver", "TFT_Item_FrozenHeart"] },
    { apiName: "DA_18_Cassiopeia", hex: 21, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    {
      apiName: "DA_18_Ahri",
      hex: 23,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "DA_18_GnarSmall", hex: 24 },
    { apiName: "DA_18_Alune", hex: 25 },
    { apiName: "DA_Karma18", hex: 27 },
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
    "DA_Staffsmith",
    "DA_CyberneticUplink_Gold",
    "DA_BacklineBlueprint",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Jeweled Gauntlet, Giant's Belt and Tear of the Goddess.",
    "At level 9, add LeBlanc, Lux, Taric and Krug to the board.",
    "Ahri can also hold Invoker Emblem.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-ahri-morgana-copy",
  },
} satisfies Comp;
