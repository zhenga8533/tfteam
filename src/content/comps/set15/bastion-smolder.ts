import type { Comp } from "../../types";

export default {
  slug: "set15-bastion-smolder",
  name: "Bastion Smolder",
  set: 15,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Smolder. Smolder (Infinity Edge, Spear of Shojin and Giant Slayer) carries. The board runs 7 Bastion, 2 Edgelord and 1 Mentor.",
  board: [
    { apiName: "TFT15_Rell", hex: 0 },
    { apiName: "TFT15_Shen", hex: 1 },
    { apiName: "TFT15_Swain", hex: 2 },
    { apiName: "TFT15_Leona", hex: 3 },
    {
      apiName: "TFT15_XinZhao",
      hex: 5,
      star: 3,
      items: ["TFT_Item_Crownguard", "TFT_Item_FrozenHeart", "TFT_Item_NightHarvester"],
    },
    { apiName: "TFT15_Braum", hex: 11 },
    {
      apiName: "TFT15_Yasuo",
      hex: 13,
      star: 3,
      items: ["TFT_Item_InfinityEdge", "TFT15_Item_BastionEmblemItem", "TFT_Item_UnstableConcoction"],
    },
    {
      apiName: "TFT15_Smolder",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT15_Rell", hex: 2 },
    { apiName: "TFT15_Garen", hex: 3 },
    { apiName: "TFT15_Shen", hex: 4 },
    { apiName: "TFT15_Smolder", hex: 24, carry: true, items: ["TFT_Item_InfinityEdge", "TFT_Item_SpearOfShojin"] },
  ],
  augments: [
    "TFT6_Augment_PortableForge",
    "TFT7_Augment_LivingForge",
    "TFT9_Augment_BardPlaybook3",
    "TFT10_Augment_HeroicGrabBag",
    "TFT_Augment_HeavyIsTheCrown",
    "TFT_Augment_SpiritLink1",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Infinity Edge, Giant's Belt and Sparring Gloves.",
    "At level 9, add Braum and Gwen to the board.",
    "Smolder can also hold Manazane and Flickerblades.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-train-your-dragon-bastion",
  },
} satisfies Comp;
