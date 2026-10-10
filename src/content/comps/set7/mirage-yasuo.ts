import type { Comp } from "../../types";

export default {
  slug: "set7-mirage-yasuo",
  name: "Mirage Yasuo",
  set: 7,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Yasuo. Yasuo (Cavalier Emblem, Titan's Resolve and Bloodthirster) carries alongside Daeja (Giant Slayer, Last Whisper and Red Buff). The board runs 4 Cavalier, 4 Mirage and 2 Warrior.",
  board: [
    { apiName: "TFT7_Sejuani", hex: 1 },
    { apiName: "TFT7_Hecarim", hex: 3, items: ["TFT_Item_FrozenHeart"] },
    {
      apiName: "TFT7_Yasuo",
      hex: 4,
      carry: true,
      items: ["TFT7_Item_CavalierEmblemItem", "TFT_Item_TitansResolve", "TFT_Item_Bloodthirster"],
    },
    {
      apiName: "TFT7_Nunu",
      hex: 5,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest", "TFT_Item_DragonsClaw"],
    },
    { apiName: "TFT7_Yone", hex: 13 },
    {
      apiName: "TFT7_DragonBlue",
      hex: 27,
      carry: true,
      items: ["TFT_Item_MadredsBloodrazor", "TFT_Item_LastWhisper", "TFT_Item_RapidFireCannon"],
    },
  ],
  early: [
    {
      apiName: "TFT7_Sett",
      hex: 2,
      items: ["TFT7_Item_CavalierEmblemItem", "TFT_Item_TitansResolve", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT7_Sejuani", hex: 3 },
    { apiName: "TFT7_Senna", hex: 23 },
    { apiName: "TFT7_Karma", hex: 24 },
  ],
  augments: [
    "TFT6_Augment_ThrillOfTheHunt2",
    "TFT7_Augment_CavalierEmblem",
    "TFT7_Augment_CavalierForAllUnits",
    "TFT7_Augment_MirageHallucinate",
    "TFT7_Augment_UrfsGrabBag2",
    "TFT6_Augment_BinaryAirdrop",
  ],
  tips: [
    "On carousels and early slams, look for Cavalier Emblem, Bloodthirster, Recurve Bow and Chain Vest.",
    "At level 9, add Lee Sin to the board.",
    "Favor item and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-7-cavalier-yasuo",
  },
} satisfies Comp;
