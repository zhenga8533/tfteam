import type { Comp } from "../../types";

export default {
  slug: "set16-ixtal-bard",
  name: "Ixtal Bard",
  set: 16,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Hard",
  summary:
    "A 2-cost reroll comp built around three-star Bard . Bard  (Jeweled Gauntlet, Blue Buff and Archangel's Staff) carries alongside Nidalee  (Jeweled Gauntlet, Rabadon's Deathcap and Hextech Gunblade). The board runs 5 Ixtal, 2 Defender and 2 Invoker.",
  board: [
    { apiName: "TFT16_Skarner", hex: 1 },
    { apiName: "TFT16_Vi", hex: 3, star: 3 },
    {
      apiName: "TFT16_Neeko",
      hex: 4,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_RedBuff", "TFT_Item_Redemption"],
    },
    {
      apiName: "TFT16_Nidalee",
      hex: 6,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_RabadonsDeathcap", "TFT_Item_HextechGunblade"],
    },
    { apiName: "TFT16_Qiyana", hex: 14 },
    { apiName: "TFT16_Milio", hex: 21 },
    { apiName: "TFT16_Orianna", hex: 24, star: 3, items: ["TFT_Item_StatikkShiv"] },
    {
      apiName: "TFT16_Bard",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_BlueBuff", "TFT_Item_ArchangelsStaff"],
    },
  ],
  early: [
    { apiName: "TFT16_Neeko", hex: 2 },
    { apiName: "TFT16_Qiyana", hex: 3 },
    { apiName: "TFT16_Milio", hex: 23 },
    { apiName: "TFT16_Bard", hex: 24, carry: true, items: ["TFT_Item_JeweledGauntlet", "TFT_Item_BlueBuff"] },
  ],
  augments: [
    "TFT6_Augment_GachaAddict",
    "TFT10_Augment_HeroicGrabBag",
    "TFT11_Augment_Epoch",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT_Augment_TwoMuchValue",
    "TFT6_Augment_CalculatedLoss",
    "TFT_Augment_Waverider",
    "TFT6_Augment_TradeSector",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Needlessly Large Rod, Sparring Gloves and Giant's Belt.",
    "At level 9, add Brock to the board.",
    "Bard  can also hold Arcanist Emblem, Sniper's Focus and Eternal Pact.",
    "Nidalee  can also hold Rabadon's Deathcap, Jeweled Gauntlet and Hextech Gunblade.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-neeko-ori",
  },
} satisfies Comp;
