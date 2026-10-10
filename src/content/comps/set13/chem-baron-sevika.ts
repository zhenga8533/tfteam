import type { Comp } from "../../types";

export default {
  slug: "set13-chem-baron-sevika",
  name: "Chem-Baron Sevika",
  set: 13,
  tier: "A",
  playstyle: "Flex",
  difficulty: "Hard",
  summary:
    "Lose streaks through the early game, then stabilizes around Sevika. Sevika (Edge of Night and Hand Of Justice) carries. The board runs 6 Chem-Baron, 2 Dominator and 2 Sentinel.",
  board: [
    { apiName: "TFT13_Singed", hex: 0 },
    { apiName: "TFT13_Chainsaw", hex: 1, star: 3, items: ["TFT_Item_Redemption", "TFT_Item_RedBuff"] },
    { apiName: "TFT13_Gremlin", hex: 2, star: 3, items: ["TFT_Item_UnstableConcoction", "TFT_Item_TitansResolve"] },
    { apiName: "TFT13_Rumble", hex: 4 },
    { apiName: "TFT13_DrMundo", hex: 5 },
    {
      apiName: "TFT13_Lieutenant",
      hex: 10,
      carry: true,
      items: ["TFT_Item_GuardianAngel", "TFT_Item_UnstableConcoction"],
    },
    { apiName: "TFT13_Silco", hex: 21, items: ["TFT_Item_SpearOfShojin", "TFT_Item_Leviathan"] },
    { apiName: "TFT13_RenataGlasc", hex: 24, items: ["TFT_Item_StatikkShiv"] },
  ],
  early: [
    { apiName: "TFT13_Chainsaw", hex: 2 },
    { apiName: "TFT13_Singed", hex: 3 },
    { apiName: "TFT13_Gremlin", hex: 4 },
    { apiName: "TFT13_RenataGlasc", hex: 24 },
  ],
  augments: [
    "TFT13_Augment_Chembaron",
    "TFT_Augment_ForwardThinking",
    "TFT_Augment_TitanicTitan",
    "TFT6_Augment_PandorasItems",
    "TFT13_TeamupAugment_UnlikelyDuo",
  ],
  tips: [
    "On carousels and early slams, look for Spear of Shojin, Nashor's Tooth, Tear of the Goddess and B.F. Sword.",
    "Favor economy and combat augments, in that order.",
  ],
  updatedAt: "2026-04-03",
  source: {
    name: "TFT Academy",
    url: "https://tftacademy.com/tierlist/comps/set-13-chem-baron-legendaries",
  },
} satisfies Comp;
