import type { Comp } from "../../types";

export default {
  slug: "set17-shepherd-teemo",
  name: "Shepherd Teemo",
  set: 17,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Teemo. Teemo (Guinsoo's Rageblade, Giant Slayer and Rabadon's Deathcap) carries. The board runs 4 Vanguard, 3 Shepherd and 2 Arbiter.",
  board: [
    {
      apiName: "TFT17_Leona",
      hex: 3,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT17_Mordekaiser", hex: 16, star: 3 },
    { apiName: "TFT17_Nasus", hex: 18, star: 3 },
    { apiName: "TFT17_Illaoi", hex: 19 },
    { apiName: "TFT17_Zoe", hex: 21 },
    { apiName: "TFT17_Lissandra", hex: 26, star: 3, items: ["TFT_Item_Morellonomicon", "TFT_Item_StatikkShiv"] },
    {
      apiName: "TFT17_Teemo",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_MadredsBloodrazor", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  early: [
    { apiName: "TFT17_Leona", hex: 2, items: ["TFT_Item_GargoyleStoneplate"] },
    { apiName: "TFT17_Nasus", hex: 3 },
    { apiName: "TFT17_Zoe", hex: 23 },
    {
      apiName: "TFT17_Teemo",
      hex: 24,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  augments: [
    "TFT_Augment_WorthTheWaitGold",
    "TFT9_Augment_MissedConnections",
    "TFT9_Augment_Commander_Ascension",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_GlassCannonII",
    "TFT11_Augment_Buildabud",
    "TFT_Augment_ItemGargoyleStoneplate",
    "TFT_Augment_ShimmerscaleEssence",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Gargoyle Stoneplate, Needlessly Large Rod and B.F. Sword.",
    "At level 8, add LeBlanc and Nami to the board.",
    "Leona can also hold Lightshield Crest.",
    "Teemo can also hold Flickerblades and Wit's End.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-vanguard-teemo",
  },
} satisfies Comp;
