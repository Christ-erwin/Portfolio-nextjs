export type Locale = "en" | "fr";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const FRENCH_COUNTRIES = new Set([
  // Europe
  "FR", "BE", "CH", "LU", "MC",
  // West & Central Africa (francophone)
  "CI", "SN", "ML", "BF", "NE", "TG", "BJ", "GN", "CM", "CD", "CG", "GA",
  "TD", "MR", "GQ",
  // East & North Africa
  "DJ", "KM", "RW", "BI", "CF", "MG", "DZ", "MA", "TN",
  // Americas / Pacific
  "HT", "VU", "SC",
]);

/** Pick the value matching the given locale. Works in server and client code. */
export function pick<T>(locale: Locale, en: T, fr: T): T {
  return locale === "fr" ? fr : en;
}
