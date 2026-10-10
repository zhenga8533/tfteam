import type { Comp } from "../../types";

export default {
  slug: "set15-soul-fighter-samira",
  name: "Soul Fighter Samira",
  set: 15,
  tier: "S",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Samira. Samira (Spear of Shojin, Last Whisper and Infinity Edge) carries alongside Volibear (Soul Fighter Emblem, Sterak's Gage and Bloodthirster). The board runs 8 Soul Fighter, 3 Edgelord and 2 Juggernaut.",
  board: [
    { apiName: "TFT15_XinZhao", hex: 1 },
    { apiName: "TFT15_Viego", hex: 2 },
    { apiName: "TFT15_Naafiri", hex: 3 },
    { apiName: "TFT15_Sett", hex: 5, items: ["TFT_Item_BrambleVest", "TFT_Item_WarmogsArmor", "TFT_Item_DragonsClaw"] },
    {
      apiName: "TFT15_Volibear",
      hex: 13,
      carry: true,
      items: ["TFT15_Item_SoulFighterEmblemItem", "TFT_Item_SteraksGage", "TFT_Item_Bloodthirster"],
    },
    {
      apiName: "TFT15_Gwen",
      hex: 18,
      carry: true,
      items: ["TFT_Item_Morellonomicon", "TFT_Item_StatikkShiv", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT15_Lux", hex: 21 },
    {
      apiName: "TFT15_Samira",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_LastWhisper", "TFT_Item_InfinityEdge"],
    },
  ],
  early: [
    { apiName: "TFT15_Zac", hex: 2 },
    { apiName: "TFT15_Aatrox", hex: 3 },
    {
      apiName: "TFT15_Naafiri",
      hex: 4,
      items: ["TFT_Item_LastWhisper", "TFT_Item_SteraksGage", "TFT_Item_Bloodthirster"],
    },
    { apiName: "TFT15_Kalista", hex: 24 },
  ],
  augments: [
    "TFT15_Augment_SoulFighterCrest",
    "TFT_Augment_ClimbTheLadder2",
    "TFT9_Augment_BigGrabBag",
    "TFT15_Augment_SoulFighter_TournamentFavorites",
    "TFT9_Augment_BuildingACollectionPlusPlus",
    "TFT_Augment_AuraFarming",
  ],
  tips: [
    "On carousels and early slams, look for Infinity Edge, Sparring Gloves, Recurve Bow and Giant's Belt.",
    "At level 9, add Braum to the board.",
    "Samira can also hold Deathblade, Infinity Edge and Giant Slayer.",
    "Sett can also hold Gargoyle Stoneplate, Spirit Visage and Warmog's Armor.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-soul-mira",
  },
} satisfies Comp;
