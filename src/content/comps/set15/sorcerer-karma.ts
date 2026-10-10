import type { Comp } from "../../types";

export default {
  slug: "set15-sorcerer-karma",
  name: "Sorcerer Karma",
  set: 15,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Karma. Karma (Striker's Flail, Blue Buff and Jeweled Gauntlet) carries alongside Gwen (Morellonomicon, Edge of Night and Void Staff). The board runs 6 Sorcerer, 3 Mighty Mech and 2 Soul Fighter.",
  board: [
    { apiName: "TFT15_Ryze", hex: 2 },
    { apiName: "TFT15_Swain", hex: 3 },
    {
      apiName: "TFT15_JarvanIV",
      hex: 5,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart", "TFT_Item_NightHarvester"],
    },
    {
      apiName: "TFT15_Gwen",
      hex: 15,
      carry: true,
      items: ["TFT_Item_Morellonomicon", "TFT_Item_GuardianAngel", "TFT_Item_StatikkShiv"],
    },
    { apiName: "TFT15_Lucian", hex: 21 },
    { apiName: "TFT15_Ahri", hex: 23 },
    { apiName: "TFT15_Lux", hex: 25 },
    {
      apiName: "TFT15_Karma",
      hex: 27,
      carry: true,
      items: ["TFT_Item_PowerGauntlet", "TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT15_Kennen", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Gangplank", hex: 4 },
    { apiName: "TFT15_Lucian", hex: 24, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_BlueBuff"] },
  ],
  augments: [
    "TFT7_Augment_ClutteredMind",
    "TFT15_Augment_SpellslingerCrown",
    "TFT9_Augment_HighEndSector",
    "TFT7_Augment_LivingForge",
    "TFT_Augment_Replication",
    "TFT11_Augment_RadiantRefactor",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Needlessly Large Rod, Sparring Gloves and Giant's Belt.",
    "At level 9, add Braum and Zyra to the board.",
    "Karma can also hold Striker's Flail, Jeweled Gauntlet and Manazane.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-karma-sorcs",
  },
} satisfies Comp;
