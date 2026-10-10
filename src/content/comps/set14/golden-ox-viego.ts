import type { Comp } from "../../types";

export default {
  slug: "set14-golden-ox-viego",
  name: "Golden Ox Viego",
  set: 14,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Viego. Viego (Hand Of Justice and Edge of Night) carries alongside Aphelios (Guinsoo's Rageblade, Hextech Gunblade and Kraken's Fury). The board runs 6 Golden Ox and 2 Executioner.",
  board: [
    { apiName: "TFT14_Alistar", hex: 0 },
    { apiName: "TFT14_Viego", hex: 2, carry: true, items: ["TFT_Item_UnstableConcoction", "TFT_Item_GuardianAngel"] },
    { apiName: "TFT14_Zac", hex: 3, items: ["TFT_Item_WarmogsArmor", "TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart"] },
    { apiName: "TFT14_Garen", hex: 4, items: ["TFT_Item_SteraksGage", "TFT_Item_InfinityEdge"] },
    { apiName: "TFT14_Jarvan", hex: 6 },
    { apiName: "TFT14_Graves", hex: 13 },
    { apiName: "TFT14_Annie", hex: 21 },
    {
      apiName: "TFT14_Urgot",
      hex: 25,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_PowerGauntlet", "TFT_Item_Deathblade"],
    },
    {
      apiName: "TFT14_Aphelios",
      hex: 27,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade", "TFT_Item_RunaansHurricane"],
    },
  ],
  early: [
    { apiName: "TFT14_DrMundo", hex: 2, items: ["TFT14_Item_ImmortalEmblemItem"] },
    { apiName: "TFT14_Alistar", hex: 3 },
    { apiName: "TFT14_Jarvan", hex: 4 },
    { apiName: "TFT14_Graves", hex: 10, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane"] },
  ],
  augments: [
    "TFT14_Augment_GoldenOxCrest",
    "TFT14_Augment_GoldenOxCrown",
    "TFT9_Augment_PumpingUp2",
    "TFT14_Augment_Immortal_Vertical",
    "TFT_Augment_FiresalePlus",
    "TFT9_Augment_HealingOrbsII",
  ],
  tips: [
    "On carousels and early slams, look for Recurve Bow, Needlessly Large Rod, Negatron Cloak and B.F. Sword.",
    "Annie can also hold Manazane.",
    "Favor economy and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-golden-oxdd",
  },
} satisfies Comp;
