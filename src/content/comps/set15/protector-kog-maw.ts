import type { Comp } from "../../types";

export default {
  slug: "set15-protector-kog-maw",
  name: "Protector Kog'Maw",
  set: 15,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Kog'Maw. Kog'Maw (Archangel's Staff, Guinsoo's Rageblade and Spear of Shojin) carries. The board runs 6 Protector.",
  board: [
    { apiName: "TFT15_Kennen", hex: 0 },
    { apiName: "TFT15_Malphite", hex: 1 },
    { apiName: "TFT15_Rakan", hex: 2 },
    { apiName: "TFT15_KSante", hex: 3, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT15_Neeko",
      hex: 4,
      star: 3,
      items: ["TFT_Item_NightHarvester", "TFT_Item_Crownguard", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT15_Janna", hex: 25, star: 3, items: ["TFT_Item_RapidFireCannon", "TFT_Item_ArchangelsStaff"] },
    {
      apiName: "TFT15_KogMaw",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_GuinsoosRageblade", "TFT_Item_SpearOfShojin"],
    },
  ],
  early: [
    { apiName: "TFT15_Malphite", hex: 2 },
    { apiName: "TFT15_Kennen", hex: 3 },
    { apiName: "TFT15_Rakan", hex: 4 },
    { apiName: "TFT15_KogMaw", hex: 23, carry: true, items: ["TFT_Item_SpearOfShojin"] },
    { apiName: "TFT15_Janna", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_PortableForge",
    "TFT9_Augment_LongTimeCrafting",
    "TFT7_Augment_LivingForge",
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_Lineup",
    "TFT11_Augment_RadiantRefactor",
    "TFT_Augment_HeavyIsTheCrown",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Archangel's Staff, Tear of the Goddess and Giant's Belt.",
    "At level 9, add Gwen and Lee Sin to the board.",
    "Kog'Maw can also hold Dawncore, Lich Bane and Wit's End.",
    "Kog'Maw can also hold Flickerblades, Statikk Shiv and Radiant Spear of Shojin.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-monster-trainer-kogmaw",
  },
} satisfies Comp;
