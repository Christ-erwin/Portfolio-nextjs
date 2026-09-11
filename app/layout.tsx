import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Outfit } from "next/font/google";
import "./globals.css";

import AppWrapper from "@/components/AppWrapper";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Christ Erwin Fram — UI/UX Designer & Full-Stack Developer",
    template: "%s — Christ Erwin Fram",
  },
  description:
    "UI/UX Designer & Full-Stack Web & Mobile Developer based in Abidjan, Côte d'Ivoire. I design mobile and web products that are beautiful, usable, and buildable — from UX research to React Native.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React Native Developer",
    "React Native",
    "Next.js",
    "Abidjan",
    "Côte d'Ivoire",
    "Remote",
  ],
  authors: [{ name: "Christ Erwin Fram" }],
  creator: "Christ Erwin Fram",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Christ Erwin Fram",
    title: "Christ Erwin Fram — UI/UX Designer & Full-Stack Developer",
    description:
      "I design mobile and web products that are beautiful, usable, and buildable — from UX research to React Native.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christ Erwin Fram — UI/UX Designer & Full-Stack Developer",
    description:
      "I design mobile and web products that are beautiful, usable, and buildable — from UX research to React Native.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <AppWrapper>{children}</AppWrapper>
        <Analytics />
      </body>
    </html>
  );
}
