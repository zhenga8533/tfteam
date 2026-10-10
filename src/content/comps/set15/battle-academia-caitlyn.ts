import type { Comp } from "../../types";

export default {
  slug: "set15-battle-academia-caitlyn",
  name: "Battle Academia Caitlyn",
  set: 15,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Caitlyn. Caitlyn (Infinity Edge, Last Whisper and Blue Buff) carries alongside Jayce (Sterak's Gage, Bloodthirster and Titan's Resolve). The board runs 7 Battle Academia, 2 Bastion and 2 Heavyweight.",
  board: [
    { apiName: "TFT15_Garen", hex: 0 },
    { apiName: "TFT15_Leona", hex: 6, items: ["TFT_Item_BrambleVest", "TFT_Item_RedBuff", "TFT_Item_DragonsClaw"] },
    { apiName: "TFT15_Kobuko", hex: 7 },
    {
      apiName: "TFT15_Jayce",
      hex: 13,
      star: 3,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_Bloodthirster", "TFT_Item_TitansResolve"],
    },
    { apiName: "TFT15_Ezreal", hex: 14 },
    { apiName: "TFT15_Rakan", hex: 20 },
    { apiName: "TFT15_Yuumi", hex: 21 },
    {
      apiName: "TFT15_Caitlyn",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_LastWhisper", "TFT_Item_BlueBuff"],
    },
  ],
  early: [
    {
      apiName: "TFT15_Naafiri",
      hex: 2,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_LastWhisper", "TFT_Item_BlueBuff"],
    },
    { apiName: "TFT15_Aatrox", hex: 3 },
    { apiName: "TFT15_Kobuko", hex: 4 },
    { apiName: "TFT15_Kalista", hex: 24 },
  ],
  augments: [
    "TFT_Augment_LastSecondSave",
    "TFT15_Augment_BattleAcademia_TransferStudents",
    "TFT6_Augment_GachaAddict",
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_LivingForge",
    "TFT_Augment_SwordOverflow",
  ],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Sterak's Gage, B.F. Sword and Giant's Belt.",
    "At level 9, add K'Sante and Varus to the board.",
    "Caitlyn can also hold Sniper's Focus and Manazane.",
    "Jayce can also hold Silvermere Dawn, Blue Buff and Sterak's Gage.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-silver-jayce",
  },
} satisfies Comp;
