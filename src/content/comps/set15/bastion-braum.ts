import type { Comp } from "../../types";

export default {
  slug: "set15-bastion-braum",
  name: "Bastion Braum",
  set: 15,
  tier: "S",
  playstyle: "Fast 9",
  difficulty: "Medium",
  summary:
    "A level 9 comp that caps its board around Braum. Braum (Blue Buff, Sterak's Gage and Protector's Vow) carries alongside Seraphine (Jeweled Gauntlet and 2× Nashor's Tooth). The board runs 6 Bastion, 2 Star Guardian and 2 The Crew.",
  board: [
    { apiName: "TFT15_Rell", hex: 0 },
    { apiName: "TFT15_Shen", hex: 1 },
    { apiName: "TFT15_XinZhao", hex: 2 },
    {
      apiName: "TFT15_Braum",
      hex: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_SteraksGage", "TFT_Item_FrozenHeart"],
    },
    {
      apiName: "TFT15_Leona",
      hex: 4,
      items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT15_Swain", hex: 5 },
    {
      apiName: "TFT15_Seraphine",
      hex: 21,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_Leviathan", "TFT_Item_Leviathan"],
    },
    {
      apiName: "TFT15_Zyra",
      hex: 24,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap"],
    },
    {
      apiName: "TFT15_TwistedFate",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_MadredsBloodrazor", "TFT_Item_HextechGunblade"],
    },
  ],
  early: [
    { apiName: "TFT15_Rell", hex: 2, items: ["TFT_Item_WarmogsArmor"] },
    { apiName: "TFT15_Garen", hex: 3 },
    { apiName: "TFT15_Shen", hex: 4 },
    { apiName: "TFT15_Xayah", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_MadredsBloodrazor"] },
  ],
  augments: [
    "TFT6_Augment_MaxLevel10",
    "TFT_Augment_UpwardMobility",
    "TFT9_Augment_HedgeFund",
    "TFT7_Augment_LategameSpecialist",
    "TFT_Augment_ForwardThinking",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Needlessly Large Rod, Tear of the Goddess and B.F. Sword.",
    "Braum can also hold Manazane and Trickster's Glass.",
    "Twisted Fate can also hold Flickerblades, Zhonya's Paradox and Wit's End.",
    "Favor economy, combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-bastion-95",
  },
} satisfies Comp;
