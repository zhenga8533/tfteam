import type { Comp } from "../../types";

export default {
  slug: "set14-golden-ox-graves",
  name: "Golden Ox Graves",
  set: 14,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Graves. Graves (Sterak's Gage, Quicksilver and Striker's Flail) carries alongside Senna (Infinity Edge, Last Whisper and Red Buff). The board runs 4 Divinicorp, 4 Golden Ox and 2 Bruiser.",
  board: [
    { apiName: "TFT14_Gragas", hex: 0 },
    {
      apiName: "TFT14_Jarvan",
      hex: 6,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT14_Rhaast", hex: 7 },
    {
      apiName: "TFT14_Graves",
      hex: 13,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_Quicksilver", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT14_Alistar", hex: 20 },
    { apiName: "TFT14_Vex", hex: 21 },
    { apiName: "TFT14_Aphelios", hex: 26 },
    {
      apiName: "TFT14_Senna",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper", "TFT_Item_RapidFireCannon"],
    },
  ],
  early: [
    { apiName: "TFT14_DrMundo", hex: 2 },
    { apiName: "TFT14_Alistar", hex: 3 },
    { apiName: "TFT14_Rengar", hex: 4 },
    { apiName: "TFT14_Graves", hex: 10, carry: true, items: ["TFT_Item_SteraksGage", "TFT_Item_Quicksilver"] },
  ],
  augments: [
    "TFT14_Augment_Immortal_Vertical",
    "TFT10_Augment_HeroicGrabBag",
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_Preparation",
    "TFT7_Augment_LivingForge",
    "TFT_Augment_Overheal",
  ],
  tips: [
    "On carousels and early slams, look for Sterak's Gage, Negatron Cloak, Sparring Gloves and B.F. Sword.",
    "Graves can also hold Sterak's Gage, Edge of Night and Suspicious Trench Coat.",
    "Graves can also hold Mittens and Death's Defiance.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-golden-graves",
  },
} satisfies Comp;
