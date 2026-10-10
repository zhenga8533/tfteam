import type { Comp } from "../../types";

export default {
  slug: "set18-spellweaver-veigar",
  name: "Spellweaver Veigar",
  set: 18,
  tier: "A",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Veigar. Veigar (Jeweled Gauntlet, Blue Buff and Hextech Gunblade) carries. The board runs 4 Spellweaver, 3 Elderwood and 2 Blackthorn.",
  board: [
    {
      apiName: "DA_18_Ornn",
      hex: 3,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_Crownguard", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "DA_18_RekSai", hex: 16, star: 3 },
    { apiName: "DA_Fiddlesticks18", hex: 18 },
    { apiName: "DA_18_Alistar", hex: 19, star: 3 },
    {
      apiName: "DA_18_Veigar",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_BlueBuff", "TFT_Item_HextechGunblade"],
    },
    { apiName: "DA_18_LeBlanc", hex: 23, star: 3, items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon"] },
    { apiName: "DA_18_Cassiopeia", hex: 25 },
  ],
  early: [
    { apiName: "DA_18_RekSai", hex: 2 },
    { apiName: "DA_18_Kobuko", hex: 3 },
    { apiName: "DA_18_Teemo", hex: 23 },
    { apiName: "DA_18_Veigar", hex: 24, carry: true },
  ],
  augments: [
    "DA_LivingForge",
    "DA_ForgedInStrength",
    "DA_LatentForge",
    "DA_18_FloraFatalisAugment",
    "DA_MissedConnections",
    "DA_PandorasBench",
    "DA_DeadlierCaps",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Jeweled Gauntlet, Gargoyle Stoneplate and Giant's Belt.",
    "At level 8, add Kobuko to the board.",
    "At level 9, add Ahri, Alune and Gnar to the board.",
    "Veigar can also hold Blue Buff, Jeweled Gauntlet and Dawncore.",
    "Veigar can also hold Jeweled Gauntlet, Luden's Tempest and Flora Fatalis Emblem.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-veigar-consuming-flora-copy",
  },
} satisfies Comp;
