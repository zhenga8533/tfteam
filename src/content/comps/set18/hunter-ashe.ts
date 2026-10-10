import type { Comp } from "../../types";

export default {
  slug: "set18-hunter-ashe",
  name: "Hunter Ashe",
  set: 18,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Ashe. Ashe (Spear of Shojin, Last Whisper and Red Buff) carries alongside Sivir (Infinity Edge, Striker's Flail and Spear of Shojin). The board runs 4 Juggernaut, 2 Hunter and 2 Primal.",
  board: [
    { apiName: "DA_Taric18", hex: 1 },
    { apiName: "DA_18_Rakan", hex: 2 },
    { apiName: "DA_Vi18", hex: 3 },
    { apiName: "DA_18_Maokai", hex: 4 },
    { apiName: "DA_Amumu18", hex: 5, items: ["TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"] },
    { apiName: "DA_18_Ivern", hex: 21 },
    {
      apiName: "DA_18_Sivir",
      hex: 25,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet", "TFT_Item_SpearOfShojin"],
    },
    {
      apiName: "DA_18_Ashe",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_LastWhisper", "TFT_Item_RapidFireCannon"],
    },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Yunara", hex: 23, items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge"] },
    { apiName: "DA_Karma18", hex: 24 },
  ],
  augments: ["DA_BlackthornTraitAugment", "DA_CyberneticUplink_Gold", "DA_CommerceCore", "DA_BoxingLessons"],
  tips: [
    "On carousels and early slams, look for Infinity Edge, Warmog's Armor, Recurve Bow and B.F. Sword.",
    "At level 9, add Lux and Kennen to the board.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-ashe-juggernauts",
  },
} satisfies Comp;
