import type { Comp } from "../../types";

export default {
  slug: "set14-street-demon-brand",
  name: "Street Demon Brand",
  set: 14,
  tier: "A",
  playstyle: "Fast 8",
  difficulty: "Easy",
  summary:
    "A level 8 comp that rolls for Brand. Brand (Spear of Shojin, Striker's Flail and Jeweled Gauntlet) carries alongside Samira (Spear of Shojin, Infinity Edge and Last Whisper). The board runs 7 Street Demon, 3 Strategist and 2 Bruiser.",
  board: [
    { apiName: "TFT14_Ekko", hex: 3 },
    { apiName: "TFT14_Neeko", hex: 4, items: ["TFT_Item_Crownguard", "TFT_Item_Redemption", "TFT_Item_WarmogsArmor"] },
    { apiName: "TFT14_Kobuko", hex: 5 },
    { apiName: "TFT14_DrMundo", hex: 6 },
    {
      apiName: "TFT14_Samira",
      hex: 20,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_InfinityEdge", "TFT_Item_LastWhisper"],
    },
    { apiName: "TFT14_Jinx", hex: 21 },
    { apiName: "TFT14_Zyra", hex: 23 },
    { apiName: "TFT14_Ziggs", hex: 25, items: ["TFT_Item_StatikkShiv", "TFT_Item_RapidFireCannon"] },
    {
      apiName: "TFT14_Brand",
      hex: 27,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_PowerGauntlet", "TFT_Item_JeweledGauntlet"],
    },
  ],
  early: [
    { apiName: "TFT14_Ekko", hex: 2 },
    { apiName: "TFT14_DrMundo", hex: 3 },
    { apiName: "TFT14_Zyra", hex: 23 },
    { apiName: "TFT14_Seraphine", hex: 24, items: ["TFT_Item_SpearOfShojin", "TFT_Item_JeweledGauntlet"] },
  ],
  augments: [
    "TFT_Augment_FiresalePlus",
    "TFT_Augment_BlazingSoul2",
    "TFT14_Augment_StreetDemon_Freestyling",
    "TFT10_Augment_LittleBuddies",
    "TFT_Augment_ClimbTheLadder2",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Jeweled Gauntlet, Giant's Belt and Sparring Gloves.",
    "Brand can also hold Manazane and Sniper's Focus.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-14-boulevard-of-broken-demons",
  },
} satisfies Comp;
