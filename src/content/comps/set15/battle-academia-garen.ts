import type { Comp } from "../../types";

export default {
  slug: "set15-battle-academia-garen",
  name: "Battle Academia Garen",
  set: 15,
  tier: "X",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Garen. Garen (Bloodthirster, Titan's Resolve and Spear of Shojin) carries. The board runs 7 Battle Academia, 2 Bastion and 2 Prodigy.",
  board: [
    {
      apiName: "TFT15_Garen",
      hex: 0,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_SpearOfShojin"],
    },
    {
      apiName: "TFT15_Leona",
      hex: 1,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet"],
    },
    { apiName: "TFT15_Jayce", hex: 2 },
    { apiName: "TFT15_Katarina", hex: 4 },
    { apiName: "TFT15_Rakan", hex: 5 },
    { apiName: "TFT15_Ezreal", hex: 21, star: 3, items: ["TFT_Item_SpearOfShojin", "TFT_Item_Leviathan"] },
    { apiName: "TFT15_Yuumi", hex: 27 },
  ],
  early: [
    { apiName: "TFT15_Garen", hex: 2, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_Bloodthirster"] },
    { apiName: "TFT15_Rell", hex: 3 },
    { apiName: "TFT15_Rakan", hex: 4 },
    { apiName: "TFT15_Ezreal", hex: 24 },
  ],
  augments: [
    "TFT_Augment_Protagonist",
    "TFT15_Augment_GarenCarry",
    "TFT9_Augment_MissedConnections",
    "TFT_Augment_ClimbTheLadder2",
    "TFT11_Augment_RadiantRefactor",
    "TFT15_Augment_BattleAcademia_Hero101",
    "TFT7_Augment_BestFriends2",
    "TFT_Augment_HomeCooking",
  ],
  tips: [
    "On carousels and early slams, look for B.F. Sword, Tear of the Goddess, Negatron Cloak and Chain Vest.",
    "Garen can also hold Radiant Spear of Shojin and Innervating Locket.",
    "Favor item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-schoolyard-justice",
  },
} satisfies Comp;
