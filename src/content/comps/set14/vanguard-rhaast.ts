import type { Comp } from "../../types";

export default {
  slug: "set14-vanguard-rhaast",
  name: "Vanguard Rhaast",
  set: 14,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Rhaast. Rhaast (Infinity Edge and 2× Hand Of Justice) carries. The board runs 4 Slayer, 4 Vanguard and 2 Divinicorp.",
  board: [
    { apiName: "TFT14_Sylas", hex: 2 },
    { apiName: "TFT14_Jarvan", hex: 3 },
    { apiName: "TFT14_Zed", hex: 4, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT14_Leona", hex: 5, items: ["TFT_Item_SpectralGauntlet", "TFT_Item_RedBuff"] },
    {
      apiName: "TFT14_Rhaast",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT14_Vayne", hex: 21 },
    { apiName: "TFT14_Senna", hex: 27, items: ["TFT_Item_LastWhisper", "TFT_Item_RapidFireCannon"] },
  ],
  early: [
    { apiName: "TFT14_Sylas", hex: 2 },
    { apiName: "TFT14_Rhaast", hex: 3, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction"] },
    { apiName: "TFT14_DrMundo", hex: 4 },
    { apiName: "TFT14_Vayne", hex: 24 },
  ],
  augments: [
    "TFT14_Augment_RhaastCarry",
    "TFT6_Augment_PortableForge",
    "TFT9_Augment_HealingOrbsII",
    "TFT_Augment_Overheal",
    "TFT_Augment_GuardbreakerSpirit",
    "TFT9_Augment_ArmyBuilding",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, Hand Of Justice, B.F. Sword and Negatron Cloak.",
    "Rhaast can also hold Prowler's Claw, Silvermere Dawn and Spectral Cutlass.",
    "Rhaast can also hold Infinity Edge, Hand Of Justice and Sterak's Gage.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-alter-ego-rhaast-kayn",
  },
} satisfies Comp;
