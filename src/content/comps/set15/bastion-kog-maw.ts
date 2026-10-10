import type { Comp } from "../../types";

export default {
  slug: "set15-bastion-kog-maw",
  name: "Bastion Kog'Maw",
  set: 15,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 3-cost reroll comp built around three-star Kog'Maw. Kog'Maw (Spear of Shojin, Archangel's Staff and Guinsoo's Rageblade) carries. The board runs 7 Bastion, 2 Edgelord and 1 Mentor.",
  board: [
    { apiName: "TFT15_Garen", hex: 0 },
    { apiName: "TFT15_Rell", hex: 1 },
    { apiName: "TFT15_Shen", hex: 2 },
    { apiName: "TFT15_XinZhao", hex: 3 },
    { apiName: "TFT15_Leona", hex: 4 },
    {
      apiName: "TFT15_Swain",
      hex: 5,
      star: 3,
      items: ["TFT_Item_RedBuff", "TFT_Item_NightHarvester", "TFT_Item_WarmogsArmor"],
    },
    {
      apiName: "TFT15_Yasuo",
      hex: 13,
      star: 3,
      items: ["TFT15_Item_BastionEmblemItem", "TFT_Item_InfinityEdge", "TFT_Item_UnstableConcoction"],
    },
    {
      apiName: "TFT15_KogMaw",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_ArchangelsStaff", "TFT_Item_GuinsoosRageblade"],
    },
  ],
  early: [
    { apiName: "TFT15_Rell", hex: 2 },
    { apiName: "TFT15_Garen", hex: 3 },
    { apiName: "TFT15_Shen", hex: 4 },
    { apiName: "TFT15_KogMaw", hex: 24, carry: true, items: ["TFT_Item_SpearOfShojin", "TFT_Item_ArchangelsStaff"] },
  ],
  augments: [
    "TFT6_Augment_PortableForge",
    "TFT9_Augment_LongTimeCrafting",
    "TFT7_Augment_LivingForge",
    "TFT10_Augment_HeroicGrabBag",
    "TFT11_Augment_RadiantRefactor",
    "TFT15_Augment_Bastion_RaidBoss",
    "TFT_Augment_HeavyIsTheCrown",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Archangel's Staff, Tear of the Goddess and Giant's Belt.",
    "At level 9, add Gwen and Zyra to the board.",
    "Kog'Maw can also hold Dawncore, Lich Bane and Wit's End.",
    "Kog'Maw can also hold Flickerblades, Statikk Shiv and Radiant Spear of Shojin.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-15-kogmaw-trainer-bastion",
  },
} satisfies Comp;
