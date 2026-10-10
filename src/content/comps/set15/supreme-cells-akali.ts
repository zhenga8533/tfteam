import type { Comp } from "../../types";

export default {
  slug: "set15-supreme-cells-akali",
  name: "Supreme Cells Akali",
  set: 15,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Akali. Akali (2× Nashor's Tooth and Quicksilver) carries alongside Ryze (Supreme Cells Emblem, Void Staff and Archangel's Staff). The board runs 4 Supreme Cells, 3 Executioner and 3 Mighty Mech.",
  board: [
    { apiName: "TFT15_Aatrox", hex: 1 },
    { apiName: "TFT15_Kennen", hex: 2 },
    { apiName: "TFT15_Darius", hex: 3 },
    {
      apiName: "TFT15_Akali",
      hex: 4,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_Leviathan", "TFT_Item_Quicksilver"],
    },
    { apiName: "TFT15_JarvanIV", hex: 5 },
    {
      apiName: "TFT15_KSante",
      hex: 6,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_NightHarvester", "TFT_Item_RedBuff"],
    },
    { apiName: "TFT15_Senna", hex: 21 },
    {
      apiName: "TFT15_Ryze",
      hex: 27,
      carry: true,
      items: ["TFT15_Item_SupremeCellsEmblemItem", "TFT_Item_StatikkShiv", "TFT_Item_ArchangelsStaff"],
    },
  ],
  early: [
    { apiName: "TFT15_Kennen", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Gangplank", hex: 4 },
    { apiName: "TFT15_Lucian", hex: 24, items: ["TFT_Item_Leviathan", "TFT_Item_Quicksilver"] },
  ],
  augments: [
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_LivingForge",
    "TFT15_Augment_SupremeCellsCirclet",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT_Augment_AnotherOne",
    "TFT_Augment_BronzeForLife2",
  ],
  tips: [
    "On carousels and early slams, look for Nashor's Tooth, Recurve Bow, Giant's Belt and Sparring Gloves.",
    "At level 9, add Lee Sin to the board.",
    "Akali can also hold Radiant Nashor's Tooth.",
    "Akali can also hold Archangel's Staff, Spear of Shojin and Dawncore.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-mecha-kali",
  },
} satisfies Comp;
