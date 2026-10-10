import type { Comp } from "../../types";

export default {
  slug: "set15-soul-fighter-lux",
  name: "Soul Fighter Lux",
  set: 15,
  tier: "C",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 2-cost reroll comp built around three-star Lux. Lux (Nashor's Tooth, Blue Buff and Jeweled Gauntlet) carries. The board runs 6 Soul Fighter, 2 Bastion and 2 Edgelord.",
  board: [
    {
      apiName: "TFT15_XinZhao",
      hex: 1,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_RedBuff", "TFT_Item_NightHarvester"],
    },
    { apiName: "TFT15_Sett", hex: 3 },
    { apiName: "TFT15_Naafiri", hex: 4 },
    { apiName: "TFT15_Swain", hex: 5 },
    { apiName: "TFT15_Viego", hex: 7, star: 3, items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_GuardianAngel"] },
    {
      apiName: "TFT15_Lux",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet"],
    },
    { apiName: "TFT15_Samira", hex: 27, items: ["TFT_Item_LastWhisper", "TFT_Item_InfinityEdge"] },
  ],
  early: [
    { apiName: "TFT15_XinZhao", hex: 2, items: ["TFT_Item_RedBuff"] },
    { apiName: "TFT15_Rell", hex: 3 },
    { apiName: "TFT15_Syndra", hex: 23, items: ["TFT_Item_BlueBuff", "TFT_Item_JeweledGauntlet"] },
    { apiName: "TFT15_Ezreal", hex: 24 },
  ],
  augments: [
    "TFT_Augment_TwoMuchValue",
    "TFT_Augment_FindYourCenter",
    "TFT10_Augment_HeroicGrabBag",
    "TFT15_Augment_SoulFighter_TournamentFavorites",
    "TFT_Augment_AnExaltedAdventure",
    "TFT9_Augment_BigGrabBag",
    "TFT9_Augment_BardPlaybook1",
  ],
  tips: [
    "On carousels and early slams, look for Blue Buff, Recurve Bow, Chain Vest and Negatron Cloak.",
    "At level 9, add Kalista and Viego to the board.",
    "Favor item, combat and economy augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-shining-bright-lux",
  },
} satisfies Comp;
