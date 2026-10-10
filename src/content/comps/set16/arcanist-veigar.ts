import type { Comp } from "../../types";

export default {
  slug: "set16-arcanist-veigar",
  name: "Arcanist Veigar",
  set: 16,
  tier: "X",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Veigar. Veigar (Striker's Flail, Spear of Shojin and Rabadon's Deathcap) carries alongside Lissandra (Void Staff, Morellonomicon and Rabadon's Deathcap). The board runs 4 Freljord, 2 Arcanist and 2 Bruiser.",
  board: [
    { apiName: "TFT16_Kobuko", hex: 0 },
    { apiName: "TFT16_Ornn", hex: 3 },
    {
      apiName: "TFT16_Braum",
      hex: 4,
      items: ["TFT_Item_NightHarvester", "TFT_Item_WarmogsArmor", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT16_Swain", hex: 9 },
    { apiName: "TFT16_Shyvana", hex: 17 },
    { apiName: "TFT16_Volibear", hex: 18 },
    {
      apiName: "TFT16_Lissandra",
      hex: 24,
      carry: true,
      items: ["TFT_Item_StatikkShiv", "TFT_Item_Morellonomicon", "TFT_Item_RabadonsDeathcap"],
    },
    {
      apiName: "TFT16_Veigar",
      hex: 25,
      star: 3,
      carry: true,
      items: ["TFT_Item_PowerGauntlet", "TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  early: [
    { apiName: "TFT16_Vi", hex: 2 },
    { apiName: "TFT16_Neeko", hex: 3 },
    { apiName: "TFT16_Orianna", hex: 23, items: ["TFT_Item_RabadonsDeathcap"] },
    { apiName: "TFT16_Anivia", hex: 24 },
  ],
  augments: [
    "TFT_Augment_ComponentQuestRod",
    "TFT9_Augment_JeweledLotus",
    "TFT_Augment_DeadlierCaps",
    "TFT_Augment_WandOverflow",
    "TFT9_Augment_CustomerIsAlwaysRight",
    "TFT9_Augment_BigGrabBag",
    "TFT9_Augment_PandorasItems2",
    "TFT_Augment_ExclusiveCustomization",
  ],
  tips: [
    "On carousels and early slams, look for Needlessly Large Rod, Tear of the Goddess, B.F. Sword and Recurve Bow.",
    "At level 9, add Nautilus and Taric to the board.",
    "Veigar can also hold 2× Nashor's Tooth and Rabadon's Deathcap.",
    "Veigar can also hold Spear of Shojin, Rabadon's Deathcap and Hextech Gunblade.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-frel-veigar",
  },
} satisfies Comp;
