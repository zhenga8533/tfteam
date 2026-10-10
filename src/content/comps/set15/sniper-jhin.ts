import type { Comp } from "../../types";

export default {
  slug: "set15-sniper-jhin",
  name: "Sniper Jhin",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Jhin. Jhin (Infinity Edge, Giant Slayer and Deathblade) carries. The board runs 6 Juggernaut, 2 Luchador and 2 Sniper.",
  board: [
    { apiName: "TFT15_Naafiri", hex: 1 },
    {
      apiName: "TFT15_DrMundo",
      hex: 2,
      star: 3,
      items: ["TFT_Item_Redemption", "TFT_Item_SpectralGauntlet", "TFT_Item_RedBuff"],
    },
    { apiName: "TFT15_Sett", hex: 3 },
    { apiName: "TFT15_Udyr", hex: 4 },
    { apiName: "TFT15_LeeSin", hex: 5, items: ["TFT15_Item_JuggernautEmblemItem"] },
    { apiName: "TFT15_Vi", hex: 7, star: 3, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT15_Jhin",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_MadredsBloodrazor", "TFT_Item_Deathblade"],
    },
    { apiName: "TFT15_Gnar", hex: 22 },
  ],
  early: [
    { apiName: "TFT15_DrMundo", hex: 2, items: ["TFT_Item_Redemption", "TFT_Item_SpectralGauntlet"] },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Jhin", hex: 23, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_MadredsBloodrazor"] },
    { apiName: "TFT15_Gnar", hex: 24 },
  ],
  augments: [
    "TFT_Augment_TwoMuchValue",
    "TFT6_Augment_PortableForge",
    "TFT_Augment_SwordOverflow",
    "TFT_Augment_FindYourCenter",
    "TFT_Augment_BeltOverflow",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Sparring Gloves, Giant's Belt and Recurve Bow.",
    "At level 9, add Varus to the board.",
    "Dr. Mundo can also hold Innervating Locket, Hullcrusher and Talisman Of Ascension.",
    "Jhin can also hold Fishbones, Luden's Tempest and Gold Collector.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-jhin-mundo",
  },
} satisfies Comp;
