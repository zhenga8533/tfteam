import type { Comp } from "../../types";

export default {
  slug: "set15-prodigy-malzahar",
  name: "Prodigy Malzahar",
  set: 15,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Malzahar. Malzahar (Blue Buff, Jeweled Gauntlet and Rabadon's Deathcap) carries. The board runs 4 Protector, 3 Strategist and 2 Prodigy.",
  board: [
    {
      apiName: "TFT15_Neeko",
      hex: 3,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_NightHarvester", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT15_Rakan", hex: 8 },
    { apiName: "TFT15_JarvanIV", hex: 9, items: ["TFT_Item_FrozenHeart"] },
    { apiName: "TFT15_KSante", hex: 10, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT15_Ryze", hex: 21 },
    { apiName: "TFT15_Janna", hex: 23 },
    { apiName: "TFT15_Seraphine", hex: 25 },
    {
      apiName: "TFT15_Malzahar",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  early: [
    { apiName: "TFT15_Neeko", hex: 2 },
    { apiName: "TFT15_Malphite", hex: 3 },
    { apiName: "TFT15_Malzahar", hex: 23, carry: true, items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet"] },
    { apiName: "TFT15_Syndra", hex: 24 },
  ],
  augments: [
    "TFT10_Augment_HeroicGrabBag",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_CryMeARiver",
    "TFT_Augment_BeltOverflow",
    "TFT_Augment_WandOverflow",
    "TFT_Augment_PatienceIsAVirtue",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Needlessly Large Rod, Sparring Gloves and Giant's Belt.",
    "At level 9, add Seraphine to the board.",
    "Malzahar can also hold Blighting Jewel, Rabadon's Deathcap and Blue Buff.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-prostrat-malz",
  },
} satisfies Comp;
