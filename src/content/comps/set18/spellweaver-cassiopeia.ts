import type { Comp } from "../../types";

export default {
  slug: "set18-spellweaver-cassiopeia",
  name: "Spellweaver Cassiopeia",
  set: 18,
  tier: "A",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Cassiopeia. Cassiopeia (Spear of Shojin, Hextech Gunblade and Archangel's Staff) carries alongside Fiddlesticks (Titan's Resolve, Adaptive Helm and Crownguard). The board runs 6 Defender, 2 Spellweaver and 1 Flora Fatalis.",
  board: [
    { apiName: "DA_18_Lillia", hex: 0, items: ["TFT_Item_ThiefsGloves"] },
    { apiName: "DA_18_Ornn", hex: 1, star: 3 },
    { apiName: "DA_18_Leona", hex: 2 },
    { apiName: "DA_18_Shen", hex: 3 },
    {
      apiName: "DA_Fiddlesticks18",
      hex: 4,
      star: 3,
      carry: true,
      items: ["TFT_Item_TitansResolve", "TFT_Item_AdaptiveHelm", "TFT_Item_Crownguard"],
    },
    {
      apiName: "DA_18_Rammus",
      hex: 5,
      star: 3,
      items: ["TFT_Item_IonicSpark", "TFT_Item_RedBuff", "TFT_Item_NightHarvester"],
    },
    {
      apiName: "DA_18_Cassiopeia",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_HextechGunblade", "TFT_Item_ArchangelsStaff"],
    },
  ],
  early: [
    { apiName: "DA_18_Ornn", hex: 2 },
    { apiName: "DA_18_Leona", hex: 3 },
    { apiName: "DA_18_LeBlanc", hex: 23 },
    { apiName: "DA_Karma18", hex: 24 },
  ],
  augments: ["DA_Ascension", "DA_18_FloraFatalisAugment", "DA_SpiritOfRedemption", "DA_ItsMeBaby", "DA_WovenMagic"],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Hextech Gunblade, Chain Vest and Needlessly Large Rod.",
    "At level 8, add Soraka and Alune to the board.",
    "At level 9, add Rengar to the board.",
    "Cassiopeia can also hold Dawncore, Blighting Jewel and Talisman Of Ascension.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-10-10",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-18-defender-cassio",
  },
} satisfies Comp;
