/**
 * Canonical production URL. Override per-environment with
 * NEXT_PUBLIC_SITE_URL (e.g. a Vercel preview URL) — this is only the
 * fallback, so metadata (og:url, sitemap, canonical links...) never
 * silently points to localhost in production.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.uiuxchristerwinfram.com";
