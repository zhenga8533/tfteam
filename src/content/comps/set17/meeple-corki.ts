import type { Comp } from "../../types";

export default {
  slug: "set17-meeple-corki",
  name: "Meeple Corki",
  set: 17,
  tier: "B",
  playstyle: "Fast 8",
  difficulty: "Medium",
  summary:
    "A level 8 comp that rolls for Corki. Corki (Last Whisper, Deathblade and Striker's Flail) carries alongside Milio (Spear of Shojin, Void Staff and Rabadon's Deathcap). The board runs 5 Meeple, 2 Bastion and 2 Fateweaver.",
  board: [
    {
      apiName: "TFT17_Rammus",
      hex: 2,
      items: ["TFT_Item_FrozenHeart", "TFT_Item_Crownguard", "TFT_Item_GargoyleStoneplate"],
    },
    { apiName: "TFT17_Galio", hex: 3 },
    { apiName: "TFT17_Fizz", hex: 4 },
    { apiName: "TFT17_Poppy", hex: 5 },
    { apiName: "TFT17_IvernMinion", hex: 6 },
    {
      apiName: "TFT17_Corki",
      hex: 21,
      carry: true,
      items: ["TFT_Item_LastWhisper", "TFT_Item_Deathblade", "TFT_Item_PowerGauntlet"],
    },
    {
      apiName: "TFT17_Milio",
      hex: 22,
      carry: true,
      items: ["TFT_Item_SpearOfShojin", "TFT_Item_StatikkShiv", "TFT_Item_RabadonsDeathcap"],
    },
    { apiName: "TFT17_Riven", hex: 23, items: ["TFT_Item_ThiefsGloves"] },
  ],
  early: [
    { apiName: "TFT17_Pantheon", hex: 2, items: ["TFT_Item_FrozenHeart", "TFT_Item_Crownguard"] },
    { apiName: "TFT17_RekSai", hex: 3 },
    { apiName: "TFT17_Gnar", hex: 23 },
    { apiName: "TFT17_Ezreal", hex: 24, items: ["TFT_Item_LastWhisper", "TFT_Item_Deathblade"] },
  ],
  augments: [
    "TFT_Augment_ComponentQuestSword",
    "TFT_Augment_TraitTree",
    "TFT_Augment_HomeCooking",
    "TFT9_Augment_BigGrabBag",
    "TFT_Augment_SwordOverflow",
    "TFT_Augment_ForgeSword",
    "TFT_Augment_ForgedInStrength",
    "TFT6_Augment_PortableForge",
  ],
  tips: [
    "On carousels and early slams, look for Deathblade, Last Whisper, Chain Vest and B.F. Sword.",
    "At level 9, add Bard and Shen to the board.",
    "Corki can also hold Rogue Emblem, Fishbones and Gold Collector.",
    "Corki can also hold Silvermere Dawn, Blue Buff and Striker's Flail.",
    "Favor item, combat and economy augments, in that order.",
  ],
  updatedAt: "2026-08-21",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-17-corki-riven",
  },
} satisfies Comp;
