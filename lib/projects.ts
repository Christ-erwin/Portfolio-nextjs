import type { Metadata } from "next";
import { pick, type Locale } from "@/lib/locale";
import { SITE_URL } from "@/lib/site";
import { OG_ALT, OG_SIZE } from "@/lib/og-image";

type BiText = { en: string; fr: string };

export type Project = {
  slug: string;
  name: string;
  subtitle: BiText;
  description: BiText;
  /** Cover visual under /public, used for the Open Graph image. */
  cover: string;
};

/** Single source of truth for case-study routes (sitemap, metadata, OG images). */
export const projects: Project[] = [
  {
    slug: "homelink",
    name: "HomeLink",
    subtitle: { en: "Smart Home App", fr: "App maison connectée" },
    description: {
      en: "Full product design for a smart home app — buy, install and control connected devices from one place. Product discovery to final UI.",
      fr: "Design produit complet pour une app maison connectée — acheter, installer et contrôler des appareils connectés depuis un seul endroit. De la découverte produit à l'UI finale.",
    },
    cover: "/images/Project_Images/homelinkBg.png",
  },
  {
    slug: "wave",
    name: "Wave",
    subtitle: { en: "Unsolicited Concept Redesign", fr: "Refonte conceptuelle non sollicitée" },
    description: {
      en: "An unsolicited concept redesign of a mobile money app used by millions across West Africa — not affiliated with or endorsed by Wave.",
      fr: "Une refonte conceptuelle non sollicitée d'une application mobile money utilisée par des millions de personnes en Afrique de l'Ouest — non affiliée à Wave.",
    },
    cover: "/images/Project_Images/waveBg.png",
  },
  {
    slug: "moovyflix",
    name: "MoovyFlix",
    subtitle: { en: "Streaming App Concept", fr: "Concept d'app de streaming" },
    description: {
      en: "Designing a modern streaming experience from scratch — immersive, personalized and intuitive.",
      fr: "Concevoir une expérience de streaming moderne de zéro — immersive, personnalisée et intuitive.",
    },
    cover: "/images/Project_Images/moovyflixBg.png",
  },
  {
    slug: "gripple",
    name: "Gripple",
    subtitle: { en: "Social Network Concept", fr: "Concept de réseau social" },
    description: {
      en: "A minimalist social network designed for meaningful, distraction-free interaction.",
      fr: "Un réseau social minimaliste conçu pour des interactions sincères, sans distraction.",
    },
    cover: "/images/Project_Images/grippleBg.png",
  },
  {
    slug: "foodygo",
    name: "FoodyGo",
    subtitle: { en: "Restaurant Ordering App", fr: "App de commande de restaurant" },
    description: {
      en: "A smart restaurant ordering app — from menu browsing to real-time delivery tracking.",
      fr: "Une app de commande de restaurant intelligente — de la navigation au menu au suivi de livraison en temps réel.",
    },
    cover: "/images/Project_Images/foodygoBg.png",
  },
];

export function getProject(slug: string): Project {
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project slug: ${slug}`);
  return project;
}

/** Alt text of a project's Open Graph image (locale-neutral, like the image). */
export function projectOgAlt(slug: string) {
  const p = getProject(slug);
  return `${p.name} — ${p.subtitle.en} | Christ Erwin Fram`;
}

/**
 * Page-specific canonical / og:url / twitter metadata. Child `openGraph` and
 * `twitter` objects replace the layout's, so everything is restated here.
 * Images default to the site-wide card unless `image` points to the route's
 * own opengraph-image / twitter-image files.
 */
export function pageMetadata({
  path,
  title,
  description,
  locale,
  type = "website",
  absoluteTitle = false,
  image,
}: {
  path: string;
  title: string;
  description: string;
  locale: Locale;
  type?: "website" | "article";
  absoluteTitle?: boolean;
  /** Route prefix owning opengraph-image / twitter-image files, plus alt text. */
  image?: { base: string; alt: string };
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const socialTitle = absoluteTitle ? title : `${title} — Christ Erwin Fram`;
  const imgBase = image?.base ?? "";
  const imgAlt = image?.alt ?? OG_ALT;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      locale: pick(locale, "en_US", "fr_FR"),
      siteName: "Christ Erwin Fram",
      title: socialTitle,
      description,
      images: [{ url: `${imgBase}/opengraph-image`, ...OG_SIZE, alt: imgAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: `${imgBase}/twitter-image`, ...OG_SIZE, alt: imgAlt }],
    },
  };
}

export function projectMetadata(slug: string, locale: Locale): Metadata {
  const p = getProject(slug);
  const path = `/projects/${p.slug}`;
  return pageMetadata({
    path,
    title: `${p.name} — ${pick(locale, p.subtitle.en, p.subtitle.fr)} | Christ Erwin Fram`,
    description: pick(locale, p.description.en, p.description.fr),
    locale,
    type: "article",
    absoluteTitle: true,
    image: { base: path, alt: projectOgAlt(slug) },
  });
}
