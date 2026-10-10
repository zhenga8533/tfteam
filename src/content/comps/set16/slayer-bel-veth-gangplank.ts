import type { Comp } from "../../types";

export default {
  slug: "set16-slayer-bel-veth-gangplank",
  name: "Slayer Bel'Veth & Gangplank",
  set: 16,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Bel'Veth. Bel'Veth (Quicksilver, Kraken's Fury and Giant Slayer) carries alongside Gangplank (Hand Of Justice, Sterak's Gage and Quicksilver). The board runs 3 Vanquisher, 3 Bilgewater and 3 Noxus.",
  board: [
    {
      apiName: "TFT16_Gangplank",
      hex: 0,
      star: 3,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_SteraksGage", "TFT_Item_Quicksilver"],
    },
    {
      apiName: "TFT16_Swain",
      hex: 1,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_RedBuff", "TFT_Item_FrozenHeart"],
    },
    { apiName: "TFT16_Ambessa", hex: 2, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_Nautilus", hex: 3 },
    { apiName: "TFT16_RekSai", hex: 4 },
    { apiName: "TFT16_Sion", hex: 5 },
    { apiName: "TFT16_Illaoi", hex: 6 },
    {
      apiName: "TFT16_BelVeth",
      hex: 7,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT16_Illaoi", hex: 2 },
    { apiName: "TFT16_Briar", hex: 3 },
    { apiName: "TFT16_Gangplank", hex: 4, carry: true, items: ["TFT_Item_Quicksilver", "TFT_Item_UnstableConcoction"] },
    { apiName: "TFT16_TwistedFate", hex: 24 },
  ],
  augments: [
    "TFT16_Augment_TheDarkinForge",
    "TFT_Augment_ChallengerDash",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_InfinityProtection",
    "TFT6_Augment_CelestialBlessing2",
    "TFT_Augment_ExclusiveCustomization",
    "TFT9_Augment_BuildingACollectionPlusPlus",
  ],
  tips: [
    "On carousels and early slams, look for Quicksilver, Sparring Gloves, Tear of the Goddess and Negatron Cloak.",
    "At level 9, add Briar, Rift Herald , Fiddlesticks and Shyvana to the board.",
    "Gangplank can also hold Infinity Force, Prowler's Claw and Death's Defiance.",
    "Bel'Veth can also hold Rapid Firecannon and Quicksilver.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-bilgewater",
  },
} satisfies Comp;
