import type { Comp } from "../../types";

export default {
  slug: "set18-lunar-aphelios-ezreal",
  name: "Lunar Aphelios & Ezreal",
  set: 18,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Aphelios. Aphelios (Elderwood Emblem, Guinsoo's Rageblade and Kraken's Fury) carries alongside Ezreal (Spear of Shojin, Red Buff and Last Whisper). The board runs 7 Elderwood, 2 Brawler and 2 Defender.",
  board: [
    { apiName: "DA_18_Lillia", hex: 0, items: ["TFT_Item_FrozenHeart"] },
    {
      apiName: "DA_18_Hecarim",
      hex: 2,
      items: ["TFT_Item_Crownguard", "TFT_Item_WarmogsArmor", "TFT_Item_SpectralGauntlet"],
    },
    { apiName: "DA_18_Diana", hex: 4 },
    { apiName: "DA_18_Alistar", hex: 5 },
    { apiName: "DA_18_GnarSmall", hex: 9, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "DA_18_Ornn", hex: 13 },
    {
      apiName: "DA_18_Aphelios",
      hex: 21,
      carry: true,
      items: ["DA_18_EmblemElderwood", "TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"],
    },
    {
      apiName: "DA_18_Ezreal",
      hex: 22,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RapidFireCannon", "TFT_Item_LastWhisper"],
    },
    { apiName: "DA_18_Xayah", hex: 27 },
  ],
  early: [
    { apiName: "DA_18_Shen", hex: 2 },
    { apiName: "DA_18_Ornn", hex: 3, items: ["TFT_Item_SpectralGauntlet"] },
    { apiName: "DA_18_Xayah", hex: 23, items: ["TFT_Item_RapidFireCannon"] },
    { apiName: "DA_18_Varus", hex: 24 },
  ],
  augments: ["DA_OneBuffTwoBuff", "DA_Swordsmith", "DA_Replication", "DA_BlackthornTraitAugment"],
  tips: [
    "On carousels and early slams, look for Recurve Bow, B.F. Sword, Sparring Gloves and Chain Vest.",
    "At level 9, add LeBlanc and Lux to the board.",
    "Aphelios can also hold Gold Collector.",
    "Aphelios can also hold Guinsoo's Rageblade, Infinity Edge and Kraken's Fury.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-aphelios-vanguards-copy",
  },
} satisfies Comp;
