import type { Comp } from "../../types";

export default {
  slug: "set16-slayer-bel-veth-ambessa",
  name: "Slayer Bel'Veth & Ambessa",
  set: 16,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Hard",
  summary:
    "A level 8 comp that rolls for Bel'Veth. Bel'Veth (Quicksilver, Kraken's Fury and Giant Slayer) carries alongside Ambessa (Sterak's Gage, Hand Of Justice and Deathblade). The board runs 3 Noxus, 2 Bruiser and 2 Juggernaut.",
  board: [
    { apiName: "TFT16_Swain", hex: 1 },
    { apiName: "TFT16_Sion", hex: 2 },
    { apiName: "TFT16_Shyvana", hex: 3 },
    {
      apiName: "TFT16_Aatrox",
      hex: 4,
      carry: true,
      items: ["TFT_Item_Bloodthirster", "TFT_Item_SteraksGage", "TFT_Item_TitansResolve"],
    },
    {
      apiName: "TFT16_RiftHerald",
      hex: 5,
      items: ["TFT_Item_RedBuff", "TFT_Item_SpectralGauntlet", "TFT_Item_FrozenHeart"],
    },
    {
      apiName: "TFT16_Ambessa",
      hex: 6,
      carry: true,
      items: ["TFT_Item_SteraksGage", "TFT_Item_UnstableConcoction", "TFT_Item_Deathblade"],
    },
    {
      apiName: "TFT16_BelVeth",
      hex: 13,
      carry: true,
      items: ["TFT_Item_Quicksilver", "TFT_Item_RunaansHurricane", "TFT_Item_MadredsBloodrazor"],
    },
    { apiName: "TFT16_Fiddlesticks", hex: 17 },
    { apiName: "TFT16_Lucian", hex: 27 },
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
    "At level 9, add Cho'Gath, Rek'Sai, Gangplank and Taric to the board.",
    "Bel'Veth can also hold Rapid Firecannon and Flickerblades.",
    "Bel'Veth can also hold Guinsoo's Rageblade, Titan's Resolve and Kraken's Fury.",
    "Favor economy, item and combat augments, in that order.",
  ],
  updatedAt: "2026-08-13",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-16-belveth-dive",
  },
} satisfies Comp;
