import type { Comp } from "../../types";

export default {
  slug: "set16-slayer-bel-veth",
  name: "Slayer Bel'Veth",
  set: 16,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Bel'Veth. Bel'Veth (Quicksilver, Kraken's Fury and Giant Slayer) carries alongside Ambessa (Striker's Flail, Deathblade and Edge of Night). The board runs 4 Juggernaut, 4 Slayer and 3 Noxus.",
  board: [
    { apiName: "TFT16_ChoGath", hex: 0 },
    { apiName: "TFT16_Briar", hex: 1 },
    { apiName: "TFT16_Gangplank", hex: 2 },
    { apiName: "TFT16_Shyvana", hex: 3 },
    {
      apiName: "TFT16_Ambessa",
      hex: 4,
      carry: true,
      items: ["TFT_Item_PowerGauntlet", "TFT_Item_Deathblade", "TFT_Item_GuardianAngel"],
    },
    { apiName: "TFT16_Swain", hex: 5, items: ["TFT_Item_SpectralGauntlet", "TFT_Item_FrozenHeart"] },
    {
      apiName: "TFT16_Aatrox",
      hex: 6,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_SteraksGage", "TFT_Item_TitansResolve"],
    },
    {
      apiName: "TFT16_BelVeth",
      hex: 13,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor"],
    },
  ],
  early: [
    { apiName: "TFT16_Sion", hex: 1 },
    { apiName: "TFT16_Illaoi", hex: 2 },
    { apiName: "TFT16_Briar", hex: 3 },
    { apiName: "TFT16_Qiyana", hex: 4, items: ["TFT_Item_Quicksilver", "TFT_Item_SteraksGage"] },
  ],
  augments: [
    "TFT_Augment_ChallengerDash",
    "TFT16_Augment_TheDarkinForge",
    "TFT9_Augment_LearningFromExperience2",
    "TFT6_Augment_PortableForge",
    "TFT_Augment_BoxingLessons",
    "TFT_Augment_SweetTreats",
    "TFT_Augment_InfinityProtection",
  ],
  tips: [
    "On carousels and early slams, look for Negatron Cloak, Sparring Gloves, B.F. Sword and Recurve Bow.",
    "At level 9, add Nautilus, Fiddlesticks and Ornn to the board.",
    "Bel'Veth can also hold Rapid Firecannon and Flickerblades.",
    "Bel'Veth can also hold Guinsoo's Rageblade, Titan's Resolve and Kraken's Fury.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-442-belveth",
  },
} satisfies Comp;
