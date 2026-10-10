import type { Comp } from "../../types";

export default {
  slug: "set14-bruiser-dr-mundo",
  name: "Bruiser Dr. Mundo",
  set: 14,
  tier: "B",
  playstyle: "Reroll",
  difficulty: "Easy",
  summary:
    "A 1-cost reroll comp built around three-star Dr. Mundo. Dr. Mundo (2× Warmog's Armor and Bramble Vest) carries alongside Brand (Jeweled Gauntlet, Striker's Flail and Spear of Shojin). The board runs 6 Techie, 4 Bruiser and 3 Street Demon.",
  board: [
    { apiName: "TFT14_Alistar", hex: 1, star: 3 },
    { apiName: "TFT14_Kobuko", hex: 2 },
    {
      apiName: "TFT14_DrMundo",
      hex: 3,
      star: 3,
      carry: true,
      items: ["TFT_Item_WarmogsArmor", "TFT_Item_WarmogsArmor", "TFT_Item_BrambleVest"],
    },
    { apiName: "TFT14_Mordekaiser", hex: 4 },
    { apiName: "TFT14_Viego", hex: 11 },
    {
      apiName: "TFT14_Brand",
      hex: 21,
      carry: true,
      items: ["TFT_Item_JeweledGauntlet", "TFT_Item_PowerGauntlet", "TFT_Item_SpearOfShojin"],
    },
    { apiName: "TFT14_Zyra", hex: 23, star: 3 },
    { apiName: "TFT14_Veigar", hex: 25 },
    { apiName: "TFT14_Seraphine", hex: 27, star: 3, items: ["TFT_Item_StatikkShiv", "TFT_Item_RapidFireCannon"] },
  ],
  early: [
    { apiName: "TFT14_Alistar", hex: 2 },
    { apiName: "TFT14_DrMundo", hex: 3, carry: true, items: ["TFT_Item_WarmogsArmor"] },
    { apiName: "TFT14_Zyra", hex: 23 },
    { apiName: "TFT14_Seraphine", hex: 24 },
  ],
  augments: [
    "TFT_Augment_InvestmentStrategy2",
    "TFT_Augment_BeltOverflow",
    "TFT_Augment_CookingPot",
    "TFT6_Augment_PandorasItems",
    "TFT_Augment_Replication",
    "TFT6_Augment_PortableForge",
  ],
  tips: [
    "On carousels and early slams, look for Giant's Belt, Tear of the Goddess, Sparring Gloves and Needlessly Large Rod.",
    "Dr. Mundo can also hold Innervating Locket.",
    "Zyra can also hold Manazane.",
    "Favor item, economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-zyra-bruisers",
  },
} satisfies Comp;
