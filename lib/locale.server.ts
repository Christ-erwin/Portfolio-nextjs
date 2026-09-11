import { cookies } from "next/headers";
import { LOCALE_COOKIE, type Locale } from "./locale";

/** Reads the visitor's locale from the cookie set by middleware.ts. */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return value === "en" || value === "fr" ? value : "fr";
}
