import type { Comp } from "../../types";

export default {
  slug: "set18-solar-kayle",
  name: "Solar Kayle",
  set: 18,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Kayle. Kayle (Guinsoo's Rageblade, Rabadon's Deathcap and Red Buff) carries. The board runs 3 Solar, 3 Inferno and 3 Lunar.",
  board: [
    {
      apiName: "DA_18_Sejuani",
      hex: 4,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "DA_Amumu18", hex: 9 },
    { apiName: "DA_18_Diana", hex: 10 },
    { apiName: "DA_18_Shen", hex: 17, star: 3 },
    { apiName: "DA_18_Leona", hex: 18, star: 3 },
    { apiName: "DA_18_Varus", hex: 21, star: 3, items: ["DA_18_EmblemLunar"] },
    { apiName: "DA_18_Aphelios", hex: 26, items: ["TFT_Item_LastWhisper"] },
    {
      apiName: "DA_18_Kayle",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RabadonsDeathcap", "TFT_Item_RapidFireCannon"],
    },
  ],
  early: [
    { apiName: "DA_18_Shen", hex: 2 },
    { apiName: "DA_18_Leona", hex: 3 },
    { apiName: "DA_18_Kayle", hex: 23, carry: true, items: ["TFT_Item_GuinsoosRageblade"] },
    { apiName: "DA_18_Varus", hex: 24 },
  ],
  augments: [
    "DA_18_SolarTraitAugment",
    "DA_PandorasBench",
    "DA_PrismaticTicket",
    "DA_MissedConnections",
    "DA_CraftedCrafting",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Gargoyle Stoneplate, Needlessly Large Rod and Sparring Gloves.",
    "At level 9, add Alune and Lux to the board.",
    "Kayle can also hold Wit's End, Statikk Shiv and Mittens.",
    "Kayle can also hold Rapid Firecannon, Talisman Of Ascension and Flickerblades.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-eclipse-kayle",
  },
} satisfies Comp;
