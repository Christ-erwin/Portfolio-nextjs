import { NextResponse, type NextRequest } from "next/server";
import { FRENCH_COUNTRIES, LOCALE_COOKIE, type Locale } from "@/lib/locale";

const YEAR = 60 * 60 * 24 * 365;

function detectLocale(request: NextRequest): Locale {
  // 1. Explicit browser/OS language preference wins — it's the most direct signal.
  const acceptLanguage = request.headers.get("accept-language");
  const primaryTag = acceptLanguage?.split(",")[0]?.trim().toLowerCase();
  if (primaryTag?.startsWith("fr")) return "fr";
  if (primaryTag?.startsWith("en")) return "en";

  // 2. Otherwise fall back to the visitor's country (populated by Vercel's edge network).
  const country = request.headers.get("x-vercel-ip-country");
  if (country) return FRENCH_COUNTRIES.has(country) ? "fr" : "en";

  // 3. No signal at all — default to French.
  return "fr";
}

export function middleware(request: NextRequest) {
  const existing = request.cookies.get(LOCALE_COOKIE)?.value;
  if (existing === "en" || existing === "fr") {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: YEAR,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|cv/|sitemap.xml|robots.txt).*)",
  ],
};
