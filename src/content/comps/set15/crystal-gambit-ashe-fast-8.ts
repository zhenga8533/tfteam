import type { Comp } from "../../types";

export default {
  slug: "set15-crystal-gambit-ashe-fast-8",
  name: "Crystal Gambit Ashe (Fast 8)",
  set: 15,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Ashe. Ashe (Guinsoo's Rageblade and 2× Kraken's Fury) carries. The board runs 6 Juggernaut, 3 Crystal Gambit and 2 Duelist.",
  board: [
    { apiName: "TFT15_Aatrox", hex: 0 },
    { apiName: "TFT15_Naafiri", hex: 1 },
    { apiName: "TFT15_DrMundo", hex: 2 },
    { apiName: "TFT15_Udyr", hex: 3 },
    {
      apiName: "TFT15_Sett",
      hex: 4,
      items: ["TFT_Item_NightHarvester", "TFT_Item_SpectralGauntlet", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT15_Vi", hex: 5 },
    { apiName: "TFT15_Zyra", hex: 21, items: ["TFT_Item_Morellonomicon", "TFT_Item_StatikkShiv"] },
    {
      apiName: "TFT15_Ashe",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane", "TFT_Item_RunaansHurricane"],
    },
  ],
  early: [
    { apiName: "TFT15_DrMundo", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Gnar", hex: 23, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"] },
    { apiName: "TFT15_Sivir", hex: 24 },
  ],
  augments: [
    "TFT15_Augment_Juggernaut_Indomitable",
    "TFT7_Augment_ClutteredMind",
    "TFT_Augment_AnotherOne",
    "TFT9_Augment_HighEndSector",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Kraken's Fury, Giant's Belt and Negatron Cloak.",
    "At level 9, add Lee Sin and Twisted Fate to the board.",
    "Ashe can also hold Flickerblades and Fishbones.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-juggernaut-ashe",
  },
} satisfies Comp;
