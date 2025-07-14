
import { Outfit } from "next/font/google";
import "./globals.css";

import AppWrapper from "@/components/AppWrapper"; // nouveau composant client

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-outfit",
});

// ✅ METADATA OK ici
export const metadata = {
  title: "Portfolio de Christ",
  description: "UI/UX Designer & Développeur web basé en Côte d’Ivoire",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${outfit.variable} antialiased`}>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}