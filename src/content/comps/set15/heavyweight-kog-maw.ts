import type { Comp } from "../../types";

export default {
  slug: "set15-heavyweight-kog-maw",
  name: "Heavyweight Kog'Maw",
  set: 15,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Kog'Maw. Kog'Maw (Archangel's Staff, Spear of Shojin and Guinsoo's Rageblade) carries alongside Darius (Infinity Edge, Hand Of Justice and Giant Slayer). The board runs 6 Heavyweight and 1 Mentor.",
  board: [
    { apiName: "TFT15_Aatrox", hex: 1 },
    { apiName: "TFT15_Zac", hex: 2 },
    { apiName: "TFT15_Jayce", hex: 3 },
    {
      apiName: "TFT15_Darius",
      hex: 4,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction", "TFT_Item_MadredsBloodrazor"],
    },
    {
      apiName: "TFT15_Kobuko",
      hex: 5,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_RedBuff", "TFT_Item_NightHarvester"],
    },
    { apiName: "TFT15_Poppy", hex: 6 },
    {
      apiName: "TFT15_KogMaw",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_SpearOfShojin", "TFT_Item_GuinsoosRageblade"],
    },
  ],
  early: [
    { apiName: "TFT15_Zac", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Kobuko", hex: 4 },
    { apiName: "TFT15_KogMaw", hex: 24, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_ArchangelsStaff"] },
  ],
  augments: [
    "TFT6_Augment_PortableForge",
    "TFT9_Augment_LongTimeCrafting",
    "TFT7_Augment_LivingForge",
    "TFT10_Augment_HeroicGrabBag",
    "TFT15_Augment_Heavyweight_RingTheBell",
    "TFT11_Augment_RadiantRefactor",
    "TFT_Augment_HeavyIsTheCrown",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Archangel's Staff, Tear of the Goddess and Giant's Belt.",
    "At level 9, add Akali and Twisted Fate to the board.",
    "Kog'Maw can also hold Dawncore, Wit's End and Lich Bane.",
    "Kog'Maw can also hold Flickerblades, Statikk Shiv and Radiant Spear of Shojin.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-kogmaw-trainer-heavy",
  },
} satisfies Comp;
