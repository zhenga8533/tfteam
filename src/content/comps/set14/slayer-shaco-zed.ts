import type { Comp } from "../../types";

export default {
  slug: "set14-slayer-shaco-zed",
  name: "Slayer Shaco & Zed",
  set: 14,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Shaco. Shaco (Edge of Night, Quicksilver and Mittens) carries alongside Zed (Infinity Edge, Striker's Flail and Bloodthirster). The board runs 6 Slayer, 3 Syndicate and 2 Bruiser.",
  board: [
    { apiName: "TFT14_DrMundo", hex: 1 },
    { apiName: "TFT14_Darius", hex: 2 },
    { apiName: "TFT14_Jarvan", hex: 3 },
    {
      apiName: "TFT14_Zed",
      hex: 4,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT14_Braum", hex: 5, items: ["TFT_Item_Redemption", "TFT_Item_RedBuff", "TFT_Item_FrozenHeart"] },
    {
      apiName: "TFT14_Shaco",
      hex: 12,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_Quicksilver", "TFT_Item_Artifact_Mittens"],
    },
    { apiName: "TFT14_Vayne", hex: 21 },
    { apiName: "TFT14_Senna", hex: 27 },
  ],
  early: [
    { apiName: "TFT14_Darius", hex: 2 },
    { apiName: "TFT14_Shaco", hex: 3, carry: true, items: ["TFT_Item_Artifact_Mittens", "TFT_Item_GuardianAngel"] },
    { apiName: "TFT14_DrMundo", hex: 4 },
    { apiName: "TFT14_TwistedFate", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_LivingForge",
    "TFT14_Augment_Strong_Vertical",
    "TFT_Augment_GuardbreakerSpirit",
    "TFT7_Augment_LuckyGloves",
    "TFT14_Augment_BlackMarket_ScopedWeapons",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Chain Vest, Sparring Gloves and Negatron Cloak.",
    "Shaco can also hold Prowler's Claw, Spectral Cutlass and Death's Defiance.",
    "Shaco can also hold Quicksilver, Sniper's Focus and Giant Slayer.",
    "Favor item, combat and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-mad-hatter",
  },
} satisfies Comp;
