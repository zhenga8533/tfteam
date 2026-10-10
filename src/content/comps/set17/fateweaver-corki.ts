import type { Comp } from "../../types";

export default {
  slug: "set17-fateweaver-corki",
  name: "Fateweaver Corki",
  set: 17,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Corki. Corki (Deathblade, Striker's Flail and Giant Slayer) carries alongside Milio (Spear of Shojin, Void Staff and Rabadon's Deathcap). The board runs 4 Fateweaver, 4 Bastion and 3 Meeple.",
  board: [
    { apiName: "TFT17_Poppy", hex: 3 },
    { apiName: "TFT17_Rammus", hex: 4, items: ["TFT_Item_RedBuff", "TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"] },
    { apiName: "TFT17_Aatrox", hex: 9 },
    { apiName: "TFT17_Shen", hex: 11, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT17_Caitlyn", hex: 21 },
    { apiName: "TFT17_TwistedFate", hex: 23 },
    {
      apiName: "TFT17_Milio",
      hex: 25,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv", "TFT_Item_RabadonsDeathcap"],
    },
    {
      apiName: "TFT17_Corki",
      hex: 27,
      carry: true,
      items: ["TFT_Item_Deathblade", "TFT_Item_PowerGauntlet", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT17_Poppy", hex: 2 },
    { apiName: "TFT17_Aatrox", hex: 3 },
    { apiName: "TFT17_Milio", hex: 23, carry: true },
    { apiName: "TFT17_Caitlyn", hex: 24 },
  ],
  augments: [
    "TFT_Augment_ForgeSword",
    "TFT_Augment_ForgeRod",
    "TFT_Augment_KickStart",
    "TFT_Augment_GlassCannonI",
    "TFT6_Augment_TradeSector",
    "TFT9_Augment_BigGrabBag",
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_SmallGrabBag",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, B.F. Sword, Recurve Bow and Giant's Belt.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-bastion-meeple-flex",
  },
} satisfies Comp;
