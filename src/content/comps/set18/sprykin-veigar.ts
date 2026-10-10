import type { Comp } from "../../types";

export default {
  slug: "set18-sprykin-veigar",
  name: "Sprykin Veigar",
  set: 18,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Veigar. Veigar (Jeweled Gauntlet, Blue Buff and Flora Fatalis Emblem) carries. The board runs 2 Flora Fatalis, 5 Sprykin and 4 Brawler.",
  board: [
    {
      apiName: "DA_18_RekSai",
      hex: 3,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "DA_18_GnarSmall", hex: 15 },
    { apiName: "DA_Fiddlesticks18", hex: 16 },
    { apiName: "DA_18_Kobuko", hex: 17, star: 3 },
    { apiName: "DA_18_Rammus", hex: 18 },
    { apiName: "DA_18_Sett", hex: 19 },
    {
      apiName: "DA_18_Veigar",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_BlueBuff", "DA_18_EmblemFloraFatalis"],
    },
    { apiName: "DA_18_Teemo", hex: 24 },
  ],
  early: [
    { apiName: "DA_18_RekSai", hex: 2 },
    { apiName: "DA_18_Kobuko", hex: 3 },
    { apiName: "DA_18_Teemo", hex: 23 },
    { apiName: "DA_18_Veigar", hex: 24, carry: true, items: ["TFT_Item_BlueBuff"] },
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
    "Veigar can also hold Blue Buff, Jeweled Gauntlet and Dawncore.",
    "Veigar can also hold Jeweled Gauntlet, Luden's Tempest and Flora Fatalis Emblem.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-dark-mages",
  },
} satisfies Comp;
