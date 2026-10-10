import type { Comp } from "../../types";

export default {
  slug: "set18-lunar-aphelios-brambleback",
  name: "Lunar Aphelios & Brambleback",
  set: 18,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Aphelios. Aphelios (Red Buff, Deathblade and Giant Slayer) carries alongside Brambleback (Edge of Night, Quicksilver and Sterak's Gage). The board runs 4 Vanguard, 3 Riftbeast and 2 Lunar.",
  board: [
    { apiName: "DA_Taric18", hex: 2 },
    {
      apiName: "DA_Sentinel18",
      hex: 3,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_FrozenHeart", "TFT_Item_WarmogsArmor"],
    },
    {
      apiName: "DA_Brambleback18",
      hex: 8,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_Quicksilver", "TFT_Item_SteraksGage"],
    },
    { apiName: "DA_18_Diana", hex: 9 },
    { apiName: "DA_18_Hecarim", hex: 10 },
    {
      apiName: "DA_18_Aphelios",
      hex: 21,
      carry: true,
      items: ["TFT_Item_RapidFireCannon", "TFT_Item_Deathblade", "TFT_Item_MadredsBloodrazor"],
    },
    { apiName: "DA_CrimsonRaptor18", hex: 22, items: ["TFT_Item_LastWhisper"] },
    { apiName: "DA_18_Zyra", hex: 27 },
  ],
  early: [
    { apiName: "DA_18_Shen", hex: 2 },
    { apiName: "DA_18_Ornn", hex: 3 },
    { apiName: "DA_18_Xayah", hex: 23, items: ["TFT_Item_LastWhisper", "TFT_Item_RapidFireCannon"] },
    { apiName: "DA_18_Varus", hex: 24 },
  ],
  augments: ["DA_OneBuffTwoBuff", "DA_Swordsmith", "DA_SwordOverflow", "DA_BuriedTreasuresIII", "DA_18_FOURcing"],
  tips: [
    "On carousels and early slams, look for Recurve Bow, B.F. Sword, Sparring Gloves and Chain Vest.",
    "At level 9, add Rakan, Scuttlecrab, Morgana and Alune to the board.",
    "Aphelios can also hold Gold Collector.",
    "Aphelios can also hold Guinsoo's Rageblade, Infinity Edge and Kraken's Fury.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-moon-fire",
  },
} satisfies Comp;
