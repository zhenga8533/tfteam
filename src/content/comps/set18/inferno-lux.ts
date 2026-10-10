import type { Comp } from "../../types";

export default {
  slug: "set18-inferno-lux",
  name: "Inferno Lux",
  set: 18,
  tier: "X",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Lux. Lux (Spear of Shojin, Rabadon's Deathcap and Jeweled Gauntlet) carries alongside Ashe (Spear of Shojin, Red Buff and Inferno Emblem). The board runs 5 Inferno, 2 Defender and 2 Hunter.",
  board: [
    { apiName: "DA_18_Shen", hex: 1 },
    { apiName: "DA_Vi18", hex: 2 },
    {
      apiName: "DA_18_Kennen",
      hex: 3,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_Quicksilver", "TFT_Item_Bloodthirster"],
    },
    { apiName: "DA_Amumu18", hex: 4, items: ["TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"] },
    { apiName: "DA_18_Lillia", hex: 6, items: ["TFT_Item_FrozenHeart"] },
    { apiName: "DA_18_Akali_AD", hex: 7 },
    {
      apiName: "DA_Lux18_Base",
      hex: 21,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "DA_18_Sivir", hex: 25, items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge"] },
    {
      apiName: "DA_18_Ashe",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_RapidFireCannon", "DA_18_EmblemInferno"],
    },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Yunara", hex: 23, items: ["TFT_Item_RapidFireCannon", "TFT_Item_SpearOfShojin"] },
    { apiName: "DA_Karma18", hex: 24 },
  ],
  augments: ["DA_CyberneticUplink_Gold", "DA_CommerceCore", "DA_BoxingLessons", "DA_LateGameSpecialist"],
  tips: [
    "On carousels and early slams, look for Infinity Edge, Warmog's Armor, Recurve Bow and B.F. Sword.",
    "At level 9, add Maokai and Taric to the board.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-inferno-fast-9",
  },
} satisfies Comp;
