import type { Comp } from "../../types";

export default {
  slug: "set18-juggernaut-amumu",
  name: "Juggernaut Amumu",
  set: 18,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Amumu. Amumu (Warmog's Armor, Bramble Vest and Dragon's Claw) carries alongside Nidalee (Guinsoo's Rageblade, Archangel's Staff and Void Staff). The board runs 6 Juggernaut, 2 Primal and 2 Summoner.",
  board: [
    { apiName: "DA_18_Rakan", hex: 0 },
    { apiName: "DA_18_Yorick", hex: 1 },
    { apiName: "DA_Scuttlecrab18", hex: 2 },
    { apiName: "DA_Vi18", hex: 3 },
    { apiName: "DA_18_Maokai", hex: 4 },
    {
      apiName: "DA_Amumu18",
      hex: 5,
      carry: true,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "DA_18_Ivern", hex: 21, items: ["TFT_Item_SpearOfShojin", "TFT_Item_GuinsoosRageblade"] },
    {
      apiName: "DA_Nidalee18_AP",
      hex: 26,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_ArchangelsStaff", "TFT_Item_StatikkShiv"],
    },
    {
      apiName: "DA_18_Zyra",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_ArchangelsStaff", "TFT_Item_HextechGunblade"],
    },
  ],
  early: [
    { apiName: "DA_18_Yorick", hex: 2 },
    { apiName: "DA_18_Rakan", hex: 3 },
    { apiName: "DA_18_Yunara", hex: 23 },
    { apiName: "DA_Karma18", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_ArchangelsStaff"] },
  ],
  augments: [
    "DA_BlackthornTraitAugment",
    "DA_CyberneticUplink_Gold",
    "DA_CommerceCore",
    "DA_SeraphimsStaff",
    "DA_BoxingLessons",
  ],
  tips: [
    "On carousels and early slams, look for Archangel's Staff, Warmog's Armor, Tear of the Goddess and Needlessly Large Rod.",
    "At level 9, add Sivir, Ashe, Lux and Kennen to the board.",
    "Zyra can also hold Talisman Of Ascension, Archangel's Staff and Hextech Gunblade.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-6-juggernaut-ap",
  },
} satisfies Comp;
