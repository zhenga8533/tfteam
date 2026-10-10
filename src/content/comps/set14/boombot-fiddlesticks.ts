import type { Comp } from "../../types";

export default {
  slug: "set14-boombot-fiddlesticks",
  name: "BoomBot Fiddlesticks",
  set: 14,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Fiddlesticks. Fiddlesticks (2× Archangel's Staff and Blighting Jewel) carries. The board runs 6 Bruiser, 3 BoomBot and 2 Techie.",
  board: [
    { apiName: "TFT14_Alistar", hex: 0 },
    { apiName: "TFT14_Gragas", hex: 1 },
    { apiName: "TFT14_DrMundo", hex: 2 },
    { apiName: "TFT14_Kobuko", hex: 4, items: ["TFT_Item_RedBuff", "TFT_Item_IonicSpark"] },
    {
      apiName: "TFT14_Chogath",
      hex: 5,
      items: ["TFT_Item_Redemption", "TFT_Item_NightHarvester", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT14_Mordekaiser", hex: 6 },
    {
      apiName: "TFT14_Fiddlesticks",
      hex: 13,
      star: 3,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_ArchangelsStaff", "TFT_Item_Artifact_BlightingJewel"],
    },
    { apiName: "TFT14_Urgot", hex: 27, items: ["TFT_Item_LastWhisper", "TFT_Item_RunaansHurricane"] },
  ],
  early: [
    { apiName: "TFT14_DrMundo", hex: 2 },
    { apiName: "TFT14_Alistar", hex: 3 },
    { apiName: "TFT14_Darius", hex: 4 },
    { apiName: "TFT14_Morgana", hex: 24, items: ["TFT_Item_Artifact_BlightingJewel", "TFT_Item_ArchangelsStaff"] },
  ],
  augments: [
    "TFT_Augment_RiggedShopPlus",
    "TFT_Augment_Trifecta2",
    "TFT_Augment_Lineup",
    "TFT14_Augment_BruiserCrest",
    "TFT_Augment_CookingPot",
    "TFT_Augment_CrownguardSpirit",
    "TFT10_Augment_HeroicGrabBag",
  ],
  tips: [
    "On carousels and early slams, look for Archangel's Staff, Needlessly Large Rod, Tear of the Goddess and Giant's Belt.",
    "Fiddlesticks can also hold Archangel's Staff, Bruiser Emblem and Blighting Jewel.",
    "Fiddlesticks can also hold Sniper's Focus and 2× Archangel's Staff.",
    "Favor economy, combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-fiddlesticks-morde",
  },
} satisfies Comp;
