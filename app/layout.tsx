import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Outfit } from "next/font/google";
import "./globals.css";

import AppWrapper from "@/components/AppWrapper";
import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const title = pick(
    locale,
    "Christ Erwin Fram — UI/UX Designer & Full-Stack Developer",
    "Christ Erwin Fram — Designer UI/UX & Développeur Full-Stack"
  );
  const description = pick(
    locale,
    "UI/UX Designer & Full-Stack Web & Mobile Developer based in Abidjan, Côte d'Ivoire. I design mobile and web products that are beautiful, usable, and buildable — from UX research to React Native.",
    "Designer UI/UX & Développeur Full-Stack Web & Mobile basé à Abidjan, Côte d'Ivoire. Je conçois des produits mobiles et web à la fois beaux, utilisables et réalisables — de la recherche UX à React Native."
  );
  const shortDescription = pick(
    locale,
    "I design mobile and web products that are beautiful, usable, and buildable — from UX research to React Native.",
    "Je conçois des produits mobiles et web beaux, utilisables et réalisables — de la recherche UX à React Native."
  );

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: "%s — Christ Erwin Fram" },
    description,
    keywords: [
      "UI/UX Designer",
      "Product Designer",
      "Frontend Developer",
      "Full-Stack Developer",
      "React Native Developer",
      "React Native",
      "Next.js",
      "Designer UI/UX",
      "Développeur Full-Stack",
      "Abidjan",
      "Côte d'Ivoire",
      "Remote",
    ],
    authors: [{ name: "Christ Erwin Fram" }],
    creator: "Christ Erwin Fram",
    icons: { icon: "/favicon.ico" },
    alternates: { languages: { en: siteUrl, fr: siteUrl } },
    openGraph: {
      type: "website",
      locale: pick(locale, "en_US", "fr_FR"),
      url: siteUrl,
      siteName: "Christ Erwin Fram",
      title,
      description: shortDescription,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: shortDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={outfit.variable}>
      <body>
        <AppWrapper locale={locale}>{children}</AppWrapper>
        <Analytics />
      </body>
    </html>
  );
}
