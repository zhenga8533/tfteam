import type { Comp } from "../../types";

export default {
  slug: "set15-juggernaut-vi",
  name: "Juggernaut Vi",
  set: 15,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Hard",
  summary:
    "A 2-cost reroll comp built around three-star Vi. Vi (Hand Of Justice, Edge of Night and Infinity Edge) carries alongside Smolder (Blue Buff, Infinity Edge and Last Whisper). The board runs 6 Juggernaut, 2 Luchador and 2 Soul Fighter.",
  board: [
    {
      apiName: "TFT15_Vi",
      hex: 0,
      star: 3,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_GuardianAngel", "TFT_Item_InfinityEdge"],
    },
    {
      apiName: "TFT15_DrMundo",
      hex: 1,
      star: 3,
      items: ["TFT_Item_DragonsClaw", "TFT_Item_Redemption", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT15_Aatrox", hex: 2 },
    { apiName: "TFT15_Udyr", hex: 3 },
    { apiName: "TFT15_Sett", hex: 4 },
    { apiName: "TFT15_Naafiri", hex: 5 },
    {
      apiName: "TFT15_Smolder",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_InfinityEdge", "TFT_Item_LastWhisper"],
    },
    { apiName: "TFT15_Gnar", hex: 22 },
  ],
  early: [
    { apiName: "TFT15_Vi", hex: 2, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction"] },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Janna", hex: 23 },
    { apiName: "TFT15_Syndra", hex: 24 },
  ],
  augments: [
    "TFT15_Augment_ViCarry",
    "TFT15_Augment_Juggernaut_Indomitable",
    "TFT_Augment_LastSecondSave",
    "TFT9_Augment_BigGrabBag",
    "TFT6_Augment_Keepers1",
    "TFT_Augment_ItemCollector1",
    "TFT_Augment_SwordOverflow",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, Hand Of Justice, B.F. Sword and Giant's Belt.",
    "At level 9, add Lee Sin to the board.",
    "Vi can also hold Silvermere Dawn and Sniper's Focus.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-knuckledusters-vi",
  },
} satisfies Comp;
