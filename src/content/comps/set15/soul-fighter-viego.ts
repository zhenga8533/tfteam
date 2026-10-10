import type { Comp } from "../../types";

export default {
  slug: "set15-soul-fighter-viego",
  name: "Soul Fighter Viego",
  set: 15,
  tier: "A",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Viego. Viego (Edge of Night, Jeweled Gauntlet and Hand Of Justice) carries alongside Samira (Spear of Shojin, Last Whisper and Infinity Edge). The board runs 6 Soul Fighter, 2 Duelist and 2 Edgelord.",
  board: [
    { apiName: "TFT15_XinZhao", hex: 1 },
    { apiName: "TFT15_Udyr", hex: 3 },
    { apiName: "TFT15_Sett", hex: 5, items: ["TFT_Item_RedBuff", "TFT_Item_WarmogsArmor", "TFT_Item_Redemption"] },
    {
      apiName: "TFT15_Viego",
      hex: 12,
      star: 3,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_JeweledGauntlet", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT15_Gwen", hex: 17 },
    {
      apiName: "TFT15_Samira",
      hex: 21,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_LastWhisper", "TFT_Item_InfinityEdge"],
    },
    { apiName: "TFT15_Lux", hex: 27 },
  ],
  early: [
    { apiName: "TFT15_XinZhao", hex: 2 },
    { apiName: "TFT15_Naafiri", hex: 3 },
    { apiName: "TFT15_Viego", hex: 4, carry: true, items: ["TFT_Item_GuardianAngel", "TFT_Item_JeweledGauntlet"] },
    { apiName: "TFT15_Kalista", hex: 24 },
  ],
  augments: [
    "TFT9_Augment_BigGrabBag",
    "TFT10_Augment_HeroicGrabBag",
    "TFT7_Augment_LivingForge",
    "TFT6_Augment_PortableForge",
    "TFT6_Augment_Keepers1",
    "TFT11_Augment_RadiantRefactor",
    "TFT_Augment_Overheal",
    "TFT9_Augment_LongTimeCrafting",
  ],
  tips: [
    "On carousels and early slams, look for Edge of Night, Needlessly Large Rod, Sparring Gloves and Tear of the Goddess.",
    "At level 9, add Braum and Yone to the board.",
    "Viego can also hold Flickerblades, Zhonya's Paradox and Wit's End.",
    "Viego can also hold Rapid Firecannon, Jeweled Gauntlet and Hand Of Justice.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-soul-reaper-viego",
  },
} satisfies Comp;
