import type { Comp } from "../../types";

export default {
  slug: "set7-scalescorn-olaf",
  name: "Scalescorn Olaf",
  set: 7,
  tier: "S",
  playstyle: "Reroll",
  difficulty: "Medium",
  summary:
    "A 3-cost reroll comp built around three-star Olaf. Olaf (Bloodthirster, Titan's Resolve and Sterak's Gage) carries alongside Diana (Hand Of Justice, Jeweled Gauntlet and Striker's Flail). The board runs 4 Scalescorn, 2 Assassin and 2 Bruiser.",
  board: [
    { apiName: "TFT7_Lillia", hex: 2 },
    { apiName: "TFT7_Braum", hex: 3 },
    {
      apiName: "TFT7_Sylas",
      hex: 5,
      star: 3,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_RedBuff", "TFT_Item_Redemption"],
    },
    {
      apiName: "TFT7_Olaf",
      hex: 6,
      star: 3,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_TitansResolve", "TFT_Item_SteraksGage"],
    },
    { apiName: "TFT7_Qiyana", hex: 25 },
    {
      apiName: "TFT7_Diana",
      hex: 27,
      star: 3,
      carry: true,
      items: ["TFT_Item_UnstableConcoction", "TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet"],
    },
  ],
  augments: ["TFT7_Augment_LivingForge", "TFT6_Augment_PortableForge", "TFT7_Augment_Bloodlust1"],
  tips: [
    "On carousels and early slams, look for Bloodthirster, Recurve Bow, Chain Vest and B.F. Sword.",
    "Olaf can also hold Rapid Firecannon, Death's Defiance and Flickerblades.",
    "Olaf can also hold Titanic Hydra, Prowler's Claw and Infinity Force.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-7-scalescorn-olaf",
  },
} satisfies Comp;
