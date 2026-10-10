import type { Comp } from "../../types";

export default {
  slug: "set15-sniper-varus",
  name: "Sniper Varus",
  set: 15,
  tier: "A",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Varus. Varus (Infinity Edge, Striker's Flail and Blue Buff) carries alongside Twisted Fate (Morellonomicon, Guinsoo's Rageblade and Last Whisper). The board runs 3 Crystal Gambit, 2 Bastion and 2 Luchador.",
  board: [
    { apiName: "TFT15_Swain", hex: 2 },
    { apiName: "TFT15_Braum", hex: 3, items: ["TFT_Item_FrozenHeart"] },
    { apiName: "TFT15_JarvanIV", hex: 4, items: ["TFT_Item_FrozenHeart"] },
    {
      apiName: "TFT15_KSante",
      hex: 5,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT15_Zyra", hex: 21, items: ["TFT_Item_StatikkShiv", "TFT_Item_RabadonsDeathcap"] },
    { apiName: "TFT15_Janna", hex: 22 },
    {
      apiName: "TFT15_TwistedFate",
      hex: 24,
      carry: true,
      items: ["TFT_Item_Morellonomicon", "TFT_Item_GuinsoosRageblade", "TFT_Item_LastWhisper"],
    },
    { apiName: "TFT15_Gnar", hex: 26 },
    {
      apiName: "TFT15_Varus",
      hex: 27,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet", "TFT_Item_BlueBuff"],
    },
  ],
  early: [
    { apiName: "TFT15_DrMundo", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Jhin", hex: 23 },
    { apiName: "TFT15_Gnar", hex: 24, items: ["TFT_Item_InfinityEdge", "TFT_Item_GuinsoosRageblade"] },
  ],
  augments: [
    "TFT7_Augment_ClutteredMind",
    "TFT_Augment_UpwardMobility",
    "TFT9_Augment_HedgeFund",
    "TFT6_Augment_MaxLevel10",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Giant's Belt and Recurve Bow.",
    "At level 9, add Ryze to the board.",
    "Twisted Fate can also hold Flickerblades.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-95-varus",
  },
} satisfies Comp;
