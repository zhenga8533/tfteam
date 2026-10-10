import type { Comp } from "../../types";

export default {
  slug: "set16-shadow-isles-viego",
  name: "Shadow Isles Viego",
  set: 16,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Viego. Viego (Bloodthirster, Titan's Resolve and Edge of Night) carries alongside Thresh  (Void Staff, Morellonomicon and Bloodthirster). The board runs 5 Shadow Isles, 3 Warden and 2 Disruptor.",
  board: [
    { apiName: "TFT16_Yorick", hex: 3 },
    {
      apiName: "TFT16_Thresh",
      hex: 4,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon", "TFT_Item_Bloodthirster"],
    },
    {
      apiName: "TFT16_Loris",
      hex: 5,
      items: ["TFT_Item_BrambleVest", "TFT_Item_DragonsClaw", "TFT_Item_WarmogsArmor"],
    },
    { apiName: "TFT16_Gwen", hex: 10 },
    {
      apiName: "TFT16_Viego",
      hex: 13,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT16_Seraphine", hex: 23 },
    { apiName: "TFT16_Kindred", hex: 25 },
    { apiName: "TFT16_Kalista", hex: 27, items: ["TFT_Item_LastWhisper"] },
  ],
  early: [
    { apiName: "TFT16_Yorick", hex: 2 },
    {
      apiName: "TFT16_Viego",
      hex: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT16_TwistedFate", hex: 23 },
    { apiName: "TFT16_Bard", hex: 24 },
  ],
  augments: [
    "TFT16_Augment_ShadowIsles_RuinedKing",
    "TFT9_Augment_BigGrabBag",
    "TFT9_Augment_MissedConnections",
    "TFT_Augment_HomeCooking",
    "TFT11_Augment_TinyButDeadly",
    "TFT11_Augment_Calltochaos",
    "TFT6_Augment_PortableForge",
  ],
  tips: [
    "On carousels and early slams, look for Titan's Resolve, Bloodthirster, B.F. Sword and Chain Vest.",
    "At level 9, add Renekton , Azir and Ornn to the board.",
    "Viego can also hold Zhonya's Paradox, Death's Defiance and Mittens.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-viego-hero-augment",
  },
} satisfies Comp;
