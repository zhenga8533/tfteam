import type { Comp } from "../../types";

export default {
  slug: "set14-syndicate-twisted-fate",
  name: "Syndicate Twisted Fate",
  set: 14,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 2-cost reroll comp built around three-star Twisted Fate. Twisted Fate (Guinsoo's Rageblade, Hextech Gunblade and Archangel's Staff) carries alongside Miss Fortune (Spear of Shojin, Infinity Edge and Striker's Flail). The board runs 5 Syndicate, 2 Divinicorp and 2 Bruiser.",
  board: [
    { apiName: "TFT14_Darius", hex: 1 },
    { apiName: "TFT14_Gragas", hex: 2 },
    { apiName: "TFT14_Rhaast", hex: 3 },
    {
      apiName: "TFT14_Braum",
      hex: 4,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_FrozenHeart", "TFT_Item_Redemption"],
    },
    { apiName: "TFT14_Shaco", hex: 7 },
    {
      apiName: "TFT14_MissFortune",
      hex: 25,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT14_Draven", hex: 26, star: 3, items: ["TFT_Item_StatikkShiv", "TFT_Item_LastWhisper"] },
    {
      apiName: "TFT14_TwistedFate",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade", "TFT_Item_ArchangelsStaff"],
    },
  ],
  early: [
    { apiName: "TFT14_Shaco", hex: 2 },
    { apiName: "TFT14_Darius", hex: 3 },
    { apiName: "TFT14_KogMaw", hex: 23 },
    {
      apiName: "TFT14_TwistedFate",
      hex: 24,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_HextechGunblade"],
    },
  ],
  augments: [
    "TFT6_Augment_PandorasItems",
    "TFT10_Augment_HeroicGrabBag",
    "TFT14_Augment_MobCrest",
    "TFT9_Augment_PumpingUp",
    "TFT11_Augment_RadiantRefactor",
  ],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Needlessly Large Rod, B.F. Sword and Recurve Bow.",
    "Twisted Fate can also hold Flickerblades, Archangel's Staff and Hextech Gunblade.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-card-shark",
  },
} satisfies Comp;
