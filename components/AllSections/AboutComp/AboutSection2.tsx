import React from "react";
import type { IconType } from "react-icons";
import CredentialCard from "@/components/CredentialCard";
import { pick, type Locale } from "@/lib/locale";
import {
  LuMapPin,
  LuGlobe,
  LuClock,
  LuMessagesSquare,
  LuPenTool,
  LuCodeXml,
  LuSearch,
  LuPalette,
  LuFrame,
  LuUsersRound,
  LuRocket,
  LuTarget,
  LuComponent,
  LuFileCheck,
  LuFlaskConical,
} from "react-icons/lu";

type BiText = { en: string; fr: string };

const quickFacts: { icon: IconType; k: BiText; v: BiText }[] = [
  {
    icon: LuMapPin,
    k: { en: "Based in", fr: "Basé à" },
    v: { en: "Abidjan, Côte d'Ivoire", fr: "Abidjan, Côte d'Ivoire" },
  },
  {
    icon: LuClock,
    k: { en: "Timezone", fr: "Fuseau horaire" },
    v: {
      en: "GMT (UTC+0) · async-friendly",
      fr: "GMT (UTC+0) · adapté à l'async",
    },
  },
  {
    icon: LuGlobe,
    k: { en: "Availability", fr: "Disponibilité" },
    v: { en: "Remote · Worldwide", fr: "Remote · Monde entier" },
  },
  {
    icon: LuMessagesSquare,
    k: { en: "Languages", fr: "Langues" },
    v: {
      en: "French (native) · English (B2)",
      fr: "Français (natif) · Anglais (B2)",
    },
  },
  {
    icon: LuPenTool,
    k: { en: "Primary tool", fr: "Outil principal" },
    v: { en: "Figma", fr: "Figma" },
  },
  {
    icon: LuCodeXml,
    k: { en: "Dev stack", fr: "Stack dev" },
    v: {
      en: "React Native · Next.js · Tailwind",
      fr: "React Native · Next.js · Tailwind",
    },
  },
];

const experience: {
  period: string;
  role: BiText;
  co: string;
  desc: BiText;
}[] = [
  {
    period: "2026",
    role: { en: "UI/UX Designer", fr: "UI/UX Designer" },
    co: "Orange Côte d'Ivoire (via Synelia)",
    desc: {
      en: "Designing and refining core user flows and interfaces for one of West Africa's largest telecom operators, alongside product and engineering.",
      fr: "Conception et amélioration des parcours et interfaces clés pour l'un des plus grands opérateurs télécom d'Afrique de l'Ouest, aux côtés des équipes produit et ingénierie.",
    },
  },
  {
    period: "2024 – 2026",
    role: { en: "UI/UX Designer — sole designer", fr: "UI/UX Designer — designer unique" },
    co: "Yoomi",
    desc: {
      en: "Full product design across four products (smart home, real-estate investment, property management, restaurant booking): research, information architecture, high-fidelity UI, design systems, and prototypes used directly in testing and dev handoff.",
      fr: "Design produit complet sur quatre produits (maison connectée, investissement immobilier, gestion locative, réservation de restaurant) : recherche, architecture de l'information, UI haute-fidélité, design systems et prototypes utilisés en tests et en handoff dev.",
    },
  },
  {
    period: "Feb – May 2025",
    role: { en: "Consultant UI/UX Designer", fr: "UI/UX Designer consultant" },
    co: "Dughu",
    desc: {
      en: "End-to-end UX audits with strategic recommendations for conversion and retention. Delivered wireframes, modern UI and interactive prototypes for web and mobile, aligned with business goals.",
      fr: "Audits UX de bout en bout avec recommandations stratégiques pour la conversion et la rétention. Wireframes, UI moderne et prototypes interactifs pour le web et le mobile, alignés sur les objectifs business.",
    },
  },
  {
    period: "2022 – 2024",
    role: { en: "Web Developer & UI/UX Designer", fr: "Développeur Web & UI/UX Designer" },
    co: "Wegam",
    desc: {
      en: "UX/UI mockups and prototypes for gaming-platform features used by active users. Worked with the frontend team to bridge design intent and implementation.",
      fr: "Maquettes UX/UI et prototypes pour des fonctionnalités utilisées par des utilisateurs actifs d'une plateforme gaming. Travail avec l'équipe frontend pour faire le pont entre intention design et implémentation.",
    },
  },
];

const education: { period: string; title: BiText; org: BiText }[] = [
  {
    period: "2026",
    title: {
      en: "Google UX Design Professional Certificate",
      fr: "Certificat professionnel Google UX Design",
    },
    org: { en: "Coursera", fr: "Coursera" },
  },
  {
    period: "2022 – Present",
    title: {
      en: "Self-directed UX/UI design training",
      fr: "Formation UX/UI en autodidacte",
    },
    org: {
      en: "Coursera · YouTube · personal projects",
      fr: "Coursera · YouTube · projets personnels",
    },
  },
  {
    period: "2021 – 2022",
    title: { en: "Bachelor's Degree (Licence 3)", fr: "Licence 3" },
    org: { en: "ESMA, Abidjan", fr: "ESMA, Abidjan" },
  },
  {
    period: "2020 – 2021",
    title: {
      en: "BTS — Application Development (IT)",
      fr: "BTS — Développement d'Applications (Informatique)",
    },
    org: { en: "ESMA, Abidjan", fr: "ESMA, Abidjan" },
  },
  {
    period: "2018 – 2019",
    title: { en: "Baccalauréat", fr: "Baccalauréat" },
    org: {
      en: "Collège le Figuier, Abidjan",
      fr: "Collège le Figuier, Abidjan",
    },
  },
];

const principles: { icon: IconType; t: BiText; d: BiText }[] = [
  {
    icon: LuTarget,
    t: {
      en: "Start with the problem, not the screen",
      fr: "Partir du problème, pas de l'écran",
    },
    d: {
      en: "I map the flow and its failure points before opening Figma. If I can't state the problem in one sentence, the design isn't ready.",
      fr: "Je cartographie le parcours et ses points de rupture avant d'ouvrir Figma. Si je ne peux pas résumer le problème en une phrase, le design n'est pas prêt.",
    },
  },
  {
    icon: LuComponent,
    t: { en: "Design in systems", fr: "Designer en système" },
    d: {
      en: "Tokens, components, and every state — empty, loading, error, edge. The product stays coherent as it grows and as the team changes.",
      fr: "Tokens, composants, et chaque état — vide, chargement, erreur, cas limite. Le produit reste cohérent à mesure qu'il grandit et que l'équipe change.",
    },
  },
  {
    icon: LuFileCheck,
    t: { en: "Build for handoff", fr: "Concevoir pour le handoff" },
    d: {
      en: "Realistic content, specified states, annotated decisions. Engineers get a spec that builds without a dozen clarification threads.",
      fr: "Contenu réaliste, états spécifiés, décisions annotées. Les développeurs reçoivent une spec qui se construit sans dizaine d'allers-retours.",
    },
  },
  {
    icon: LuFlaskConical,
    t: { en: "Ship and learn", fr: "Livrer et apprendre" },
    d: {
      en: "I'd rather test a rough version with five people than polish a guess. The goal is a product that works, not a portfolio shot.",
      fr: "Je préfère tester une version brute avec cinq personnes que polir une supposition. L'objectif est un produit qui marche, pas une jolie capture pour portfolio.",
    },
  },
];

const services: { icon: IconType; t: BiText; d: BiText }[] = [
  {
    icon: LuSearch,
    t: { en: "UX Research & Audits", fr: "Recherche UX & audits" },
    d: {
      en: "User interviews, competitive analysis, usability audits, personas, and journey mapping.",
      fr: "Interviews utilisateurs, analyse concurrentielle, audits d'utilisabilité, personas et parcours utilisateurs.",
    },
  },
  {
    icon: LuPalette,
    t: { en: "UI Design", fr: "Design UI" },
    d: {
      en: "High-fidelity mockups, design systems, component libraries, and Figma handoff.",
      fr: "Maquettes haute-fidélité, design systems, bibliothèques de composants et handoff Figma.",
    },
  },
  {
    icon: LuFrame,
    t: { en: "Wireframing & Prototyping", fr: "Wireframing & prototypage" },
    d: {
      en: "Low to high fidelity wireframes, interactive prototypes for user testing.",
      fr: "Wireframes basse à haute-fidélité, prototypes interactifs pour les tests utilisateurs.",
    },
  },
  {
    icon: LuCodeXml,
    t: { en: "Frontend Implementation", fr: "Implémentation frontend" },
    d: {
      en: "React Native, React JS, Next.js, Tailwind — I ship what I design.",
      fr: "React Native, React JS, Next.js, Tailwind — je livre ce que je designe.",
    },
  },
  {
    icon: LuUsersRound,
    t: { en: "Remote Collaboration", fr: "Collaboration à distance" },
    d: {
      en: "Async-first, Figma-native, comfortable with Notion, Slack, Jira, Linear.",
      fr: "Async-first, natif Figma, à l'aise avec Notion, Slack, Jira, Linear.",
    },
  },
  {
    icon: LuRocket,
    t: { en: "MVP Design", fr: "Design de MVP" },
    d: {
      en: "Fast, focused design for early-stage products that need to ship and learn.",
      fr: "Design rapide et ciblé pour des produits early-stage qui doivent livrer et apprendre vite.",
    },
  },
];

export default function AboutSection2({ locale }: { locale: Locale }) {
  const t = (b: BiText) => pick(locale, b.en, b.fr);

  return (
    <section className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        {/* Bio */}
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 flex flex-col gap-5">
            <p className="text-ink text-lg leading-relaxed">
              {pick(
                locale,
                <>
                  I started in code. I studied application development and
                  built apps in React Native and Next.js — but the problems I
                  found most interesting were upstream: not <em>how</em> to
                  build a screen, but <em>why</em> a product confuses the
                  people using it. So I moved into product design and never
                  looked back.
                </>,
                <>
                  J&apos;ai commencé par le code. J&apos;ai étudié le
                  développement d&apos;applications et construit des apps en
                  React Native et Next.js — mais les problèmes qui
                  m&apos;intéressaient le plus étaient en amont : pas{" "}
                  <em>comment</em> construire un écran, mais{" "}
                  <em>pourquoi</em> un produit déroute les gens qui
                  l&apos;utilisent. Je suis donc passé au product design, sans
                  jamais regarder en arrière.
                </>
              )}
            </p>
            <p className="text-ink-muted leading-relaxed">
              {pick(
                locale,
                "That background is my advantage. I design with implementation in mind — components, constraints, edge cases, handoff. When I give an engineering team a spec, it builds without a dozen back-and-forth threads, and the product ships closer to what was designed.",
                "Ce parcours est mon avantage. Je designe en pensant implémentation — composants, contraintes, cas limites, handoff. Quand je donne une spec à une équipe d'ingénierie, elle se construit sans dizaine d'allers-retours, et le produit livré est plus proche de ce qui a été designé."
              )}
            </p>
            <p className="text-ink-muted leading-relaxed">
              {pick(
                locale,
                "Over 4+ years I've worked solo end-to-end (research → wireframes → UI → prototype, sometimes the front-end build too) and inside product teams at Orange, Yoomi and Dughu. I'm based in Abidjan and work async with distributed teams anywhere.",
                "En 4+ ans, j'ai travaillé en solo de bout en bout (recherche → wireframes → UI → prototype, parfois jusqu'au développement front-end) et au sein d'équipes produit chez Orange, Yoomi et Dughu. Je suis basé à Abidjan et je travaille en async avec des équipes distribuées partout."
              )}
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-surface-alt rounded-2xl p-6 flex flex-col gap-4">
              <p className="font-semibold text-ink">
                {pick(locale, "Quick facts", "En bref")}
              </p>
              {quickFacts.map(({ icon: Icon, k, v }) => (
                <div
                  key={k.en}
                  className="flex justify-between items-start gap-3 border-b border-line pb-3 last:border-0 last:pb-0"
                >
                  <span className="flex items-center gap-2 text-sm text-ink-subtle flex-shrink-0">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    {t(k)}
                  </span>
                  <span className="text-sm font-medium text-ink text-right">
                    {t(v)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How I work */}
        <div>
          <p className="section-tag">{pick(locale, "How I work", "Ma façon de travailler")}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map(({ icon: Icon, t: title, d }) => (
              <div
                key={title.en}
                className="rounded-2xl border border-line p-6 hover:border-brand/30 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand mb-3">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <p className="font-semibold text-ink mb-1">{t(title)}</p>
                <p className="text-ink-muted text-sm leading-relaxed">{t(d)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <p className="section-tag">{pick(locale, "Experience", "Expérience")}</p>
          <ol className="flex flex-col gap-0">
            {experience.map((e, i) => (
              <li
                key={i}
                className="flex gap-6 pb-8 border-l-2 border-line pl-6 relative last:border-transparent"
              >
                <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full grad-bg flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <p className="font-semibold text-ink">
                      {t(e.role)} · <span className="grad-text">{e.co}</span>
                    </p>
                    <span className="text-xs text-ink-subtle bg-surface-alt px-3 py-1 rounded-full">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {t(e.desc)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-ink-subtle mt-2">
            {pick(locale, "Client screens are under NDA —", "Les écrans client sont sous NDA —")}{" "}
            <a
              href="/projects"
              className="font-semibold text-brand-strong hover:underline"
            >
              {pick(locale, "see the redacted summary", "voir le résumé caviardé")}
            </a>
            .
          </p>
        </div>

        {/* Education & Certifications */}
        <div>
          <p className="section-tag">
            {pick(locale, "Education & Certifications", "Formation & certifications")}
          </p>
          <CredentialCard locale={locale} />
          <ul className="mt-4 flex flex-col divide-y divide-line rounded-2xl border border-line">
            {education.map((e) => (
              <li
                key={e.title.en}
                className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1 p-4"
              >
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {t(e.title)}
                  </span>
                  <span className="block text-sm text-ink-subtle">{t(e.org)}</span>
                </span>
                <span className="text-xs text-ink-subtle bg-surface-alt px-3 py-1 rounded-full">
                  {e.period}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* What I offer */}
        <div>
          <p className="section-tag">{pick(locale, "Services", "Services")}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map(({ icon: Icon, t: title, d }) => (
              <div
                key={title.en}
                className="flex gap-4 border border-line rounded-2xl p-5 hover:border-brand/30 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand flex-shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-ink mb-1">{t(title)}</p>
                  <p className="text-ink-muted text-sm leading-relaxed">{t(d)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
