import type { Comp } from "../../types";

export default {
  slug: "set18-defender-fiddlesticks",
  name: "Defender Fiddlesticks",
  set: 18,
  tier: "X",
  playstyle: "Fast 9",
  difficulty: "Hard",
  summary:
    "A level 9 comp that caps its board around Fiddlesticks. Fiddlesticks (Warmog's Armor, Sunfire Cape and Spirit Visage) carries alongside Aphelios (Guinsoo's Rageblade, Kraken's Fury and Last Whisper). The board runs 3 Elderwood, 2 Defender and 2 Fae.",
  board: [
    {
      apiName: "DA_Fiddlesticks18",
      hex: 1,
      carry: true,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_RedBuff", "TFT_Item_Redemption"],
    },
    { apiName: "DA_18_Diana", hex: 2 },
    { apiName: "DA_18_KhaZix", hex: 3, items: ["DA_18_EmblemSlayer"] },
    { apiName: "DA_18_Ornn", hex: 4 },
    { apiName: "DA_18_Rakan", hex: 5 },
    {
      apiName: "DA_18_Aphelios",
      hex: 21,
      carry: true,
      items: ["TFT_Item_GuinsoosRageblade", "TFT_Item_RunaansHurricane", "TFT_Item_LastWhisper"],
    },
    { apiName: "DA_18_Xayah", hex: 22 },
    { apiName: "DA_18_LeBlanc", hex: 23, items: ["TFT_Item_SpearOfShojin", "TFT_Item_RabadonsDeathcap"] },
  ],
  early: [
    { apiName: "DA_18_Shen", hex: 2 },
    { apiName: "DA_18_Ornn", hex: 3 },
    { apiName: "DA_18_KhaZix", hex: 4 },
    { apiName: "DA_18_Varus", hex: 24 },
  ],
  augments: ["DA_TraitLadder", "DA_Coronation", "DA_MagicRoll", "DA_UrfsGrabBag", "DA_URF"],
  tips: [
    "On carousels and early slams, look for Guinsoo's Rageblade, Recurve Bow, Sparring Gloves and Giant's Belt.",
    "At level 8, add Amumu to the board.",
    "At level 9, add Draven, Kennen and Lux to the board.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-trait-ladder",
  },
} satisfies Comp;
