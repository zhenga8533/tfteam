import type { Comp } from "../../types";

export default {
  slug: "set18-lunar-aphelios-fast-8",
  name: "Lunar Aphelios (Fast 8)",
  set: 18,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Aphelios. Aphelios (Red Buff, Deathblade and Giant Slayer) carries. The board runs 3 Riftbeast, 2 Brawler and 2 Invoker.",
  board: [
    { apiName: "DA_18_Sett", hex: 2, items: ["TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"] },
    { apiName: "DA_Sentinel18", hex: 3, items: ["TFT_Item_FrozenHeart"] },
    { apiName: "DA_18_Diana", hex: 9 },
    { apiName: "DA_Krug18", hex: 10 },
    {
      apiName: "DA_18_Aphelios",
      hex: 21,
      carry: true,
      items: ["TFT_Item_RapidFireCannon", "TFT_Item_Deathblade", "TFT_Item_MadredsBloodrazor"],
    },
    { apiName: "DA_18_Zyra", hex: 22 },
    { apiName: "DA_KogMaw18_AD", hex: 23 },
    { apiName: "DA_CrimsonRaptor18", hex: 27 },
  ],
  early: [
    { apiName: "DA_18_Shen", hex: 2 },
    { apiName: "DA_18_Ornn", hex: 3 },
    { apiName: "DA_18_Xayah", hex: 23, items: ["TFT_Item_RapidFireCannon"] },
    { apiName: "DA_18_Varus", hex: 24 },
  ],
  augments: ["DA_OneBuffTwoBuff", "DA_Swordsmith", "DA_SwordOverflow", "DA_BuriedTreasuresIII", "DA_18_FOURcing"],
  tips: [
    "On carousels and early slams, look for Recurve Bow, B.F. Sword, Sparring Gloves and Chain Vest.",
    "At level 9, add Morgana, Alune, Amumu and Scuttlecrab to the board.",
    "Aphelios can also hold Gold Collector.",
    "Aphelios can also hold Guinsoo's Rageblade, Infinity Edge and Kraken's Fury.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-aphelios-flex",
  },
} satisfies Comp;
