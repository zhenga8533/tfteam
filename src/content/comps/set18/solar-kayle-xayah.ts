import type { Comp } from "../../types";

export default {
  slug: "set18-solar-kayle-xayah",
  name: "Solar Kayle & Xayah",
  set: 18,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Kayle. Kayle (Guinsoo's Rageblade, Flickerblades and Rabadon's Deathcap) carries alongside Xayah (Guinsoo's Rageblade, Red Buff and Deathblade). The board runs 3 Solar, 3 Elderwood and 2 Defender.",
  board: [
    {
      apiName: "DA_18_Ornn",
      hex: 4,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor", "TFT_Item_Redemption"],
    },
    { apiName: "DA_18_Sejuani", hex: 10, star: 3 },
    { apiName: "DA_18_Leona", hex: 11, star: 3 },
    { apiName: "DA_18_Rakan", hex: 17, star: 3 },
    { apiName: "DA_18_Hecarim", hex: 18 },
    {
      apiName: "DA_18_Xayah",
      hex: 26,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RapidFireCannon", "TFT_Item_Deathblade"],
    },
    {
      apiName: "DA_18_Kayle",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_Artifact_NavoriFlickerblades", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  early: [
    { apiName: "DA_18_Ornn", hex: 2, items: ["TFT_Item_GargoyleStoneplate"] },
    { apiName: "DA_18_Leona", hex: 3 },
    { apiName: "DA_18_Sejuani", hex: 4 },
    { apiName: "DA_18_Kayle", hex: 24, carry: true, items: ["TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "DA_18_SolarTraitAugment",
    "DA_PandorasBench",
    "DA_PrismaticTicket",
    "DA_MissedConnections",
    "DA_18_ElderwoodTraitAugment",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Gargoyle Stoneplate, Needlessly Large Rod and Sparring Gloves.",
    "Kayle can also hold Wit's End, Statikk Shiv and Mittens.",
    "Kayle can also hold Rapid Firecannon, Talisman Of Ascension and Zhonya's Paradox.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-solar-kayle",
  },
} satisfies Comp;
