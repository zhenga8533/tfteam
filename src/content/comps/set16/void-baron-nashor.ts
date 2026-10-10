import type { Comp } from "../../types";

export default {
  slug: "set16-void-baron-nashor",
  name: "Void Baron Nashor",
  set: 16,
  tier: "X",
  playstyle: "Fast 9",
  difficulty: "Easy",
  summary:
    "A level 9 comp that caps its board around Baron Nashor. Baron Nashor (Bloodthirster, Infinity Edge and Sterak's Gage) carries alongside Kai'Sa  (Guinsoo's Rageblade, Hextech Gunblade and Void Staff). The board runs 8 Void, 2 Bruiser and 2 Longshot.",
  board: [
    { apiName: "TFT16_ChoGath", hex: 0 },
    { apiName: "TFT16_RekSai", hex: 2 },
    { apiName: "TFT16_Volibear", hex: 4, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT16_RiftHerald", hex: 5, items: ["TFT_Item_RedBuff", "TFT_Item_BrambleVest", "TFT_Item_Redemption"] },
    {
      apiName: "TFT16_BaronNashor",
      hex: 6,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_InfinityEdge", "TFT_Item_SteraksGage"],
    },
    { apiName: "TFT16_BelVeth", hex: 13 },
    { apiName: "TFT16_KogMaw", hex: 21 },
    { apiName: "TFT16_Malzahar", hex: 24 },
    {
      apiName: "TFT16_Kaisa",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade", "TFT_Item_StatikkShiv"],
    },
  ],
  early: [
    { apiName: "TFT16_ChoGath", hex: 2 },
    { apiName: "TFT16_Blitzcrank", hex: 3 },
    { apiName: "TFT16_Neeko", hex: 4 },
    { apiName: "TFT16_KogMaw", hex: 24, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade"] },
  ],
  augments: [
    "TFT_Augment_WinOut",
    "TFT16_Augment_Void_EvolveAndOvercome",
    "TFT_Augment_SpeedyDoubleKill",
    "TFT_Augment_ItemSpiritVisage",
    "TFT_Augment_SavingsAccount",
    "TFT6_Augment_MaxLevel10",
    "TFT_Augment_MirroredMonetization",
  ],
  tips: [
    "On carousels and early slams, look for Needlessly Large Rod, Recurve Bow, B.F. Sword and Tear of the Goddess.",
    "At level 9, add Wukong, Fiddlesticks, Shyvana and Sylas  to the board.",
    "Kai'Sa  can also hold Spear of Shojin, Infinity Edge and Last Whisper.",
    "Kai'Sa  can also hold Statikk Shiv, Flickerblades and Wit's End.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-void",
  },
} satisfies Comp;
