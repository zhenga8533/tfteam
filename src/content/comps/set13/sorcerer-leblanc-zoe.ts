import type { Comp } from "../../types";

export default {
  slug: "set13-sorcerer-leblanc-zoe",
  name: "Sorcerer LeBlanc & Zoe",
  set: 13,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for LeBlanc. LeBlanc (Red Buff, Guinsoo's Rageblade and Void Staff) carries alongside Zoe (Spear of Shojin, Striker's Flail and Jeweled Gauntlet). The board runs 6 Sorcerer, 4 Emissary and 3 Black Rose.",
  board: [
    { apiName: "TFT13_Swain", hex: 2 },
    { apiName: "TFT13_Garen", hex: 3, items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor", "TFT_Item_Redemption"] },
    { apiName: "TFT13_Elise", hex: 4, items: ["TFT13_Item_SorcererEmblemItem"] },
    { apiName: "TFT13_Vladimir", hex: 5 },
    { apiName: "TFT13_Ambessa", hex: 15 },
    { apiName: "TFT13_Tristana", hex: 21 },
    { apiName: "TFT13_Nami", hex: 23 },
    {
      apiName: "TFT13_LeBlanc",
      hex: 25,
      carry: true,
      items: ["TFT_Item_RapidFireCannon", "TFT_Item_GuinsoosRageblade", "TFT_Item_StatikkShiv"],
    },
    {
      apiName: "TFT13_Zoe",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_PowerGauntlet", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT13_Vladimir", hex: 2 },
    { apiName: "TFT13_Darius", hex: 3 },
    { apiName: "TFT13_Swain", hex: 4 },
    { apiName: "TFT13_Lux", hex: 23 },
    { apiName: "TFT13_Zyra", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT13_Augment_SorcererCrest",
    "TFT13_Augment_SorcererCrown",
    "TFT_Augment_GlassCannonII",
    "TFT_Augment_FiresalePlus",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Needlessly Large Rod, Sparring Gloves and Tear of the Goddess.",
    "Elise can also hold Sorcerer Emblem, Spear of Shojin and Jeweled Gauntlet.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-black-sorcerers",
  },
} satisfies Comp;
