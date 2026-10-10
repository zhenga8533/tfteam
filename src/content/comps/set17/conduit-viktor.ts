import type { Comp } from "../../types";

export default {
  slug: "set17-conduit-viktor",
  name: "Conduit Viktor",
  set: 17,
  tier: "C",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Viktor. Viktor (Jeweled Gauntlet and Rabadon's Deathcap) carries alongside Nami (Nashor's Tooth, Jeweled Gauntlet and Void Staff). The board runs 3 Shepherd, 2 Conduit and 2 Dark Star.",
  board: [
    { apiName: "TFT17_Rhaast", hex: 0 },
    { apiName: "TFT17_Pyke", hex: 1 },
    { apiName: "TFT17_Mordekaiser", hex: 3 },
    { apiName: "TFT17_IvernMinion", hex: 4 },
    {
      apiName: "TFT17_Illaoi",
      hex: 5,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_DragonsClaw", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT17_Lissandra", hex: 21 },
    {
      apiName: "TFT17_Nami",
      hex: 25,
      carry: true,
      items: ["TFT_Item_Leviathan", "TFT_Item_JeweledGauntlet", "TFT_Item_StatikkShiv"],
    },
    {
      apiName: "TFT17_Viktor",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_RabadonsDeathcap"],
    },
  ],
  early: [
    { apiName: "TFT17_Mordekaiser", hex: 2 },
    { apiName: "TFT17_Leona", hex: 3 },
    { apiName: "TFT17_Viktor", hex: 23, carry: true },
    { apiName: "TFT17_Zoe", hex: 24 },
  ],
  augments: [
    "TFT_Augment_BronzeForLifeI",
    "TFT_Augment_BronzeForLife2",
    "TFT_Augment_PatienceIsAVirtue",
    "TFT6_Augment_TradeSector2",
    "TFT_Augment_LegionOfThrees",
    "TFT6_Augment_Diversify1",
    "TFT_Augment_GlassCannonII",
    "TFT9_Augment_JeweledLotus",
  ],
  tips: [
    "On carousels and early slams, look for Rabadon's Deathcap, Needlessly Large Rod, Sparring Gloves and Giant's Belt.",
    "At level 9, add Lulu and Bard to the board.",
    "Viktor can also hold Ahri's Aura.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-viktor-b4l",
  },
} satisfies Comp;
