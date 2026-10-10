import type { Comp } from "../../types";

export default {
  slug: "set15-juggernaut-dr-mundo",
  name: "Juggernaut Dr. Mundo",
  set: 15,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Dr. Mundo. Dr. Mundo (Guinsoo's Rageblade, Infinity Edge and Striker's Flail) carries. The board runs 6 Juggernaut, 2 Luchador and 2 Soul Fighter.",
  board: [
    {
      apiName: "TFT15_Vi",
      hex: 0,
      star: 3,
      items: ["TFT_Item_SpectralGauntlet", "TFT_Item_RedBuff", "TFT_Item_Redemption"],
    },
    { apiName: "TFT15_Sett", hex: 1 },
    { apiName: "TFT15_Braum", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Udyr", hex: 4 },
    { apiName: "TFT15_Naafiri", hex: 5 },
    {
      apiName: "TFT15_DrMundo",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT15_Naafiri", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_DrMundo", hex: 4, carry: true, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_InfinityEdge"] },
    { apiName: "TFT15_Gnar", hex: 24 },
  ],
  augments: [
    "TFT15_Augment_DrMundoCarry",
    "TFT15_Augment_Juggernaut_Indomitable",
    "TFT9_Augment_BigGrabBag",
    "TFT6_Augment_Keepers2",
    "TFT11_Augment_RadiantRefactor",
    "TFT_Augment_BeltOverflow",
    "TFT_Augment_HeavyIsTheCrown",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Infinity Edge, Sparring Gloves and Giant's Belt.",
    "At level 9, add Lee Sin to the board.",
    "Dr. Mundo can also hold Fishbones and Sniper's Focus.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-give-em-the-chair-dr-mundo",
  },
} satisfies Comp;
