import type { Comp } from "../../types";

export default {
  slug: "set14-dynamo-miss-fortune-elise",
  name: "Dynamo Miss Fortune & Elise",
  set: 14,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Miss Fortune. Miss Fortune (Infinity Edge, Deathblade and Striker's Flail) carries alongside Elise (Blue Buff, Hextech Gunblade and Archangel's Staff). The board runs 4 Dynamo, 3 Divinicorp and 3 Syndicate.",
  board: [
    {
      apiName: "TFT14_Braum",
      hex: 3,
      star: 3,
      items: ["TFT_Item_GargoyleStoneplate", "TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest"],
    },
    {
      apiName: "TFT14_Elise",
      hex: 21,
      star: 3,
      carry: true,
      items: ["TFT_Item_BlueBuff", "TFT_Item_HextechGunblade", "TFT_Item_ArchangelsStaff"],
    },
    { apiName: "TFT14_Rhaast", hex: 22 },
    { apiName: "TFT14_Aurora", hex: 23, items: ["TFT_Item_StatikkShiv", "TFT_Item_RapidFireCannon"] },
    { apiName: "TFT14_Gragas", hex: 24 },
    {
      apiName: "TFT14_MissFortune",
      hex: 25,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_Deathblade", "TFT_Item_PowerGauntlet"],
    },
    { apiName: "TFT14_Darius", hex: 26 },
    { apiName: "TFT14_Morgana", hex: 27 },
  ],
  early: [
    { apiName: "TFT14_Shyvana", hex: 3 },
    { apiName: "TFT14_Elise", hex: 23, carry: true },
    { apiName: "TFT14_Morgana", hex: 24, items: ["TFT_Item_BlueBuff", "TFT_Item_HextechGunblade"] },
    { apiName: "TFT14_Kindred", hex: 25 },
  ],
  augments: [
    "TFT_Augment_RiggedShopPlus",
    "TFT_Augment_FiresalePlus",
    "TFT_Augment_Trifecta2",
    "TFT14_Augment_Thirsty_Vertical",
    "TFT_Augment_GlassCannonII",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, Needlessly Large Rod, Sparring Gloves and B.F. Sword.",
    "Elise can also hold Zhonya's Paradox and Radiant Blue Buff.",
    "Braum can also hold Unending Despair and Radiant Gargoyle Stoneplate.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-dynamo-miss-fortune",
  },
} satisfies Comp;
