import { describe, expect, it } from "vitest";
import { hasCompFilters, parseCompFilters, passesCompFilters } from "./filters";

const comp = {
  name: "Blossom Ahri",
  units: ["Ahri", "Sett"],
  traits: ["Blossom", "Spellweaver"],
  items: ["Guinsoo", "BlossomEmblem"],
};
const name = (apiName: string) => apiName;

describe("comp filters", () => {
  it("needs every picked item, on any champion", () => {
    expect(passesCompFilters(comp, { items: ["Guinsoo", "BlossomEmblem"] }, name)).toBe(true);
    expect(passesCompFilters(comp, { items: ["Guinsoo", "Bloodthirster"] }, name)).toBe(false);
  });

  it("needs every picked champion and trait", () => {
    expect(passesCompFilters(comp, { champions: ["Ahri", "Sett"], traits: ["Blossom"] }, name)).toBe(true);
    expect(passesCompFilters(comp, { champions: ["Ahri", "Zyra"] }, name)).toBe(false);
    expect(passesCompFilters(comp, { traits: ["Blossom", "Brawler"] }, name)).toBe(false);
  });

  it("matches the search against the comp's name or its champions", () => {
    expect(passesCompFilters(comp, { q: "blossom" }, name)).toBe(true);
    expect(passesCompFilters(comp, { q: "sett" }, name)).toBe(true);
    expect(passesCompFilters(comp, { q: "zyra" }, name)).toBe(false);
  });

  it("reads lists from the URL", () => {
    expect(parseCompFilters({ champions: ["Ahri", "Sett"], traits: ["Blossom"], items: ["Guinsoo"] })).toEqual({
      q: undefined,
      champions: ["Ahri", "Sett"],
      traits: ["Blossom"],
      items: ["Guinsoo"],
    });
  });

  it("knows when filters are set", () => {
    expect(hasCompFilters({})).toBe(false);
    expect(hasCompFilters({ traits: ["Blossom"] })).toBe(true);
    expect(hasCompFilters({ items: ["Guinsoo"] })).toBe(true);
  });
});
