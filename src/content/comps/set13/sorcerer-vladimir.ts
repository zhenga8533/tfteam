import type { Comp } from "../../types";

export default {
  slug: "set13-sorcerer-vladimir",
  name: "Sorcerer Vladimir",
  set: 13,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Vladimir. Vladimir (Guinsoo's Rageblade, Archangel's Staff and Hextech Gunblade) carries. The board runs 4 Emissary, 4 Sorcerer and 3 Black Rose.",
  board: [
    { apiName: "TFT13_Elise", hex: 2 },
    { apiName: "TFT13_Garen", hex: 3, items: ["TFT_Item_WarmogsArmor", "TFT_Item_Redemption", "TFT_Item_RedBuff"] },
    { apiName: "TFT13_Swain", hex: 4 },
    { apiName: "TFT13_Ambessa", hex: 20 },
    {
      apiName: "TFT13_Vladimir",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_ArchangelsStaff", "TFT_Item_HextechGunblade"],
    },
    { apiName: "TFT13_LeBlanc", hex: 23, items: ["TFT_Item_StatikkShiv"] },
    { apiName: "TFT13_Nami", hex: 25 },
    { apiName: "TFT13_Tristana", hex: 27 },
  ],
  early: [
    { apiName: "TFT13_Darius", hex: 2 },
    {
      apiName: "TFT13_Vladimir",
      hex: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_ArchangelsStaff"],
    },
    { apiName: "TFT13_Swain", hex: 4 },
    { apiName: "TFT13_Zyra", hex: 24 },
  ],
  augments: [
    "TFT13_Augment_VladCarry",
    "TFT10_Augment_HeroicGrabBag",
    "TFT9_Augment_ArmyBuilding",
    "TFT_Augment_CrownguardSpirit",
    "TFT_Augment_BeltOverflow",
    "TFT_Augment_GlassCannonII",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Archangel's Staff, Giant's Belt and Needlessly Large Rod.",
    "Vladimir can also hold Wit's End.",
    "Vladimir can also hold Spear of Shojin, Nashor's Tooth and Jeweled Gauntlet.",
    "Favor combat and item augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-crimson-pact",
  },
} satisfies Comp;
