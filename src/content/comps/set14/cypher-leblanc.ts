import type { Comp } from "../../types";

export default {
  slug: "set14-cypher-leblanc",
  name: "Cypher LeBlanc",
  set: 14,
  tier: "S",
  playstyle: "Flex",
  difficulty: "Hard",
  summary:
    "Lose streaks through the early game, then stabilizes around LeBlanc. LeBlanc (Void Staff, Spear of Shojin and Hextech Gunblade) carries alongside Draven (Infinity Edge, Striker's Flail and Last Whisper). The board runs 5 Cypher, 2 Bastion and 2 Rapidfire.",
  board: [
    { apiName: "TFT14_Jarvan", hex: 1 },
    { apiName: "TFT14_Zed", hex: 3, items: ["TFT_Item_ThiefsGloves"] },
    {
      apiName: "TFT14_Galio",
      hex: 4,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate", "TFT_Item_Redemption"],
    },
    { apiName: "TFT14_Zeri", hex: 14 },
    { apiName: "TFT14_Renekton", hex: 17, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "TFT14_Vi", hex: 24 },
    {
      apiName: "TFT14_LeBlanc",
      hex: 26,
      star: 3,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_SpearOfShojin", "TFT_Item_HextechGunblade"],
    },
    {
      apiName: "TFT14_Draven",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_PowerGauntlet", "TFT_Item_LastWhisper"],
    },
  ],
  early: [
    { apiName: "TFT14_Galio", hex: 2 },
    { apiName: "TFT14_Vi", hex: 3 },
    { apiName: "TFT14_Draven", hex: 23, carry: true },
    { apiName: "TFT14_LeBlanc", hex: 24, carry: true },
  ],
  augments: [
    "TFT14_Augment_Suits_CorporateCashOut",
    "TFT_Augment_TitanicTitan",
    "TFT6_Augment_CalculatedLoss",
    "TFT10_Augment_HeroicGrabBag",
    "TFT6_Augment_BinaryAirdrop",
    "TFT9_Augment_BuildingACollectionPlusPlus",
  ],
  tips: [
    "On carousels and early slams, look for Tear of the Goddess, B.F. Sword, Needlessly Large Rod and Sparring Gloves.",
    "LeBlanc can also hold Manazane, Blue Buff and Hextech Gunblade.",
    "LeBlanc can also hold Wit's End, Spear of Shojin and Guinsoo's Rageblade.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-5-cypher",
  },
} satisfies Comp;
