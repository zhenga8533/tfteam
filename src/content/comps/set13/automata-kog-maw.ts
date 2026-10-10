import type { Comp } from "../../types";

export default {
  slug: "set13-automata-kog-maw",
  name: "Automata Kog'Maw",
  set: 13,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Kog'Maw. Kog'Maw (Lich Bane, Blue Buff and Spear of Shojin) carries. The board runs 6 Watcher, 2 Automata and 2 Firelight.",
  board: [
    { apiName: "TFT13_Darius", hex: 0 },
    { apiName: "TFT13_Prime", hex: 1 },
    { apiName: "TFT13_Vladimir", hex: 2 },
    { apiName: "TFT13_Amumu", hex: 3 },
    { apiName: "TFT13_Garen", hex: 4, items: ["TFT_Item_Redemption", "TFT_Item_RedBuff", "TFT_Item_IonicSpark"] },
    {
      apiName: "TFT13_FlyGuy",
      hex: 5,
      star: 3,
      items: ["TFT_Item_DragonsClaw", "TFT_Item_BrambleVest", "TFT_Item_NightHarvester"],
    },
    { apiName: "TFT13_Zeri", hex: 21 },
    {
      apiName: "TFT13_KogMaw",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_Artifact_LichBane", "TFT_Item_BlueBuff", "TFT_Item_SpearOfShojin"],
    },
  ],
  early: [
    { apiName: "TFT13_Vladimir", hex: 1 },
    { apiName: "TFT13_Darius", hex: 2 },
    { apiName: "TFT13_Amumu", hex: 3, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT13_Prime", hex: 4 },
    { apiName: "TFT13_KogMaw", hex: 24, carry: true, items: ["TFT_Item_Artifact_LichBane", "TFT_Item_BlueBuff"] },
  ],
  augments: [
    "TFT9_Augment_LongTimeCrafting",
    "TFT6_Augment_PortableForge",
    "TFT_Augment_ShimmerscaleEssence",
    "TFT11_Augment_OverEncumbered",
    "TFT13_Augment_WatcherCrest",
    "TFT_Augment_Trifecta2",
    "TFT_Augment_Trifecta1",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Giant's Belt, Chain Vest and Needlessly Large Rod.",
    "Kog'Maw can also hold Guinsoo's Rageblade and Wit's End.",
    "Kog'Maw can also hold Innervating Locket, Radiant Gargoyle Stoneplate and Warmog's Armor.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-scarmaw",
  },
} satisfies Comp;
