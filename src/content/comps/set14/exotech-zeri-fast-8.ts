import type { Comp } from "../../types";

export default {
  slug: "set14-exotech-zeri-fast-8",
  name: "Exotech Zeri (Fast 8)",
  set: 14,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Zeri. Zeri (Flickerblades, Hextech Gunblade and Kraken's Fury) carries. The board runs 6 Bastion, 3 Exotech and 2 Rapidfire.",
  board: [
    {
      apiName: "TFT14_Sejuani",
      hex: 1,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart"],
    },
    { apiName: "TFT14_Renekton", hex: 2, items: ["TFT_Item_SteraksGage", "TFT_Item_Quicksilver"] },
    { apiName: "TFT14_Shyvana", hex: 4 },
    { apiName: "TFT14_Jax", hex: 5 },
    { apiName: "TFT14_Illaoi", hex: 6 },
    { apiName: "TFT14_Galio", hex: 9 },
    {
      apiName: "TFT14_Zeri",
      hex: 14,
      carry: true,
      items: ["TFT_Item_Artifact_NavoriFlickerblades", "TFT_Item_HextechGunblade", "TFT_Item_RunaansHurricane"],
    },
    { apiName: "TFT14_Draven", hex: 21, items: ["TFT_Item_LastWhisper"] },
  ],
  early: [
    { apiName: "TFT14_Shyvana", hex: 2 },
    { apiName: "TFT14_Jax", hex: 3 },
    { apiName: "TFT14_Kindred", hex: 23 },
    { apiName: "TFT14_KogMaw", hex: 24, items: ["TFT_Item_Artifact_NavoriFlickerblades", "TFT_Item_RunaansHurricane"] },
  ],
  augments: ["TFT9_Augment_PumpingUp2", "TFT11_Augment_RainingGold", "TFT_Augment_FiresalePlus"],
  tips: [
    "On carousels and early slams, look for Flickerblades, Recurve Bow, Negatron Cloak and Giant's Belt.",
    "Zeri can also hold Guinsoo's Rageblade and Hextech Gunblade.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-bastion-zeri",
  },
} satisfies Comp;
