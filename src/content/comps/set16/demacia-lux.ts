import type { Comp } from "../../types";

export default {
  slug: "set16-demacia-lux",
  name: "Demacia Lux",
  set: 16,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Lux. Lux (2× Archangel's Staff and Hextech Gunblade) carries alongside Zilean (Void Staff, Spear of Shojin and Morellonomicon). The board runs 8 Demacia, 2 Arcanist and 2 Defender.",
  board: [
    { apiName: "TFT16_Garen", hex: 2, items: ["TFT_Item_DragonsClaw", "TFT_Item_Redemption", "TFT_Item_BrambleVest"] },
    { apiName: "TFT16_JarvanIV", hex: 3 },
    { apiName: "TFT16_Swain", hex: 4, items: ["TFT16_Item_DemaciaEmblemItem"] },
    { apiName: "TFT16_Poppy", hex: 5 },
    { apiName: "TFT16_XinZhao", hex: 6 },
    { apiName: "TFT16_Galio", hex: 17, items: ["TFT_Item_AdaptiveHelm", "TFT_Item_DragonsClaw"] },
    {
      apiName: "TFT16_Lux",
      hex: 21,
      carry: true,
      items: ["TFT_Item_ArchangelsStaff", "TFT_Item_ArchangelsStaff", "TFT_Item_HextechGunblade"],
    },
    {
      apiName: "TFT16_Zilean",
      hex: 24,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_SpearOfShojin", "TFT_Item_Morellonomicon"],
    },
    { apiName: "TFT16_Sona", hex: 27 },
  ],
  early: [
    { apiName: "TFT16_Rumble", hex: 2 },
    { apiName: "TFT16_JarvanIV", hex: 3 },
    { apiName: "TFT16_Poppy", hex: 4, items: ["TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"] },
    { apiName: "TFT16_Sona", hex: 24, items: ["TFT_Item_StatikkShiv", "TFT_Item_ArchangelsStaff"] },
  ],
  augments: [
    "TFT11_Augment_Reinfourcement",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_GlassCannonII",
    "TFT_Augment_SpiritLink1",
    "TFT_Augment_ItemSpiritVisage",
    "TFT16_TeamupAugment_JarvanShyvana",
    "TFT_Augment_SeraphimsStaff",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Needlessly Large Rod, Recurve Bow and Sparring Gloves.",
    "At level 9, add Lissandra, Shyvana and Sylas  to the board.",
    "Garen can also hold Juggernaut Emblem and Lightshield Crest.",
    "Lux can also hold Blighting Jewel and Invoker Emblem.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-demacia",
  },
} satisfies Comp;
