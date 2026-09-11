import React from "react";
import { LuLock, LuArrowRight } from "react-icons/lu";
import { pick, type Locale } from "@/lib/locale";

type Engagement = {
  company: string;
  period: string;
  role: { en: string; fr: string };
  domain: { en: string; fr: string };
  work: { en: string; fr: string };
};

const engagements: Engagement[] = [
  {
    company: "Orange Côte d'Ivoire",
    period: "2026 – Present",
    role: { en: "UI/UX Designer (via Synelia)", fr: "UI/UX Designer (via Synelia)" },
    domain: { en: "Telecom · self-service", fr: "Télécom · self-service" },
    work: {
      en: "Designing and refining core user flows and interfaces for one of West Africa's largest telecom operators, working alongside product and engineering.",
      fr: "Conception et amélioration des parcours et interfaces clés pour l'un des plus grands opérateurs télécom d'Afrique de l'Ouest, en lien avec les équipes produit et ingénierie.",
    },
  },
  {
    company: "Yoomi",
    period: "2024 – 2026",
    role: { en: "UI/UX Designer — sole designer", fr: "UI/UX Designer — designer unique" },
    domain: {
      en: "Smart home · real-estate investment · property management · restaurant booking",
      fr: "Maison connectée · investissement immobilier · gestion locative · réservation de restaurant",
    },
    work: {
      en: "Full product design across four products: UX research, information architecture, high-fidelity UI, design systems and interactive prototypes used directly in user-testing sessions and dev handoff.",
      fr: "Design produit complet sur quatre produits : recherche UX, architecture de l'information, UI haute-fidélité, design systems et prototypes interactifs utilisés en tests utilisateurs et en handoff dev.",
    },
  },
  {
    company: "Dughu",
    period: "Feb – May 2025",
    role: { en: "Consultant UI/UX Designer", fr: "UI/UX Designer consultant" },
    domain: { en: "Web & mobile products", fr: "Produits web & mobile" },
    work: {
      en: "End-to-end UX audits with strategic recommendations for conversion and retention, plus wireframes, UI and interactive prototypes aligned with business goals.",
      fr: "Audits UX de bout en bout avec recommandations stratégiques pour la conversion et la rétention, ainsi que wireframes, UI et prototypes interactifs alignés sur les objectifs business.",
    },
  },
  {
    company: "Wegam",
    period: "2022 – 2024",
    role: { en: "Web Developer & UI/UX Designer", fr: "Développeur Web & UI/UX Designer" },
    domain: { en: "Gaming platform", fr: "Plateforme gaming" },
    work: {
      en: "UX/UI mockups and prototypes for platform features used by active users, implemented in collaboration with the frontend team.",
      fr: "Maquettes UX/UI et prototypes de fonctionnalités utilisées par des utilisateurs actifs, implémentées en collaboration avec l'équipe frontend.",
    },
  },
];

export default function ClientWork({ locale }: { locale: Locale }) {
  return (
    <section className="w-full bg-surface-alt px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="section-tag">{pick(locale, "Client work", "Travail client")}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">
          {pick(
            locale,
            "Under NDA — available on request",
            "Sous NDA — disponible sur demande"
          )}
        </h2>
        <p className="text-ink-muted max-w-2xl leading-relaxed">
          {pick(
            locale,
            "My work for Orange, Yoomi and Dughu is covered by confidentiality agreements, so I can't publish the screens here. Below is the shape of each engagement. I'm happy to walk through the process, my decisions and the outcomes in a call or portfolio review.",
            "Mon travail pour Orange, Yoomi et Dughu est couvert par des accords de confidentialité, donc je ne peux pas publier les écrans ici. Voici la nature de chaque mission. Je peux volontiers détailler le processus, mes décisions et les résultats lors d'un appel ou d'une revue de portfolio."
          )}
        </p>

        <ul className="mt-8 flex flex-col gap-3">
          {engagements.map((e) => (
            <li
              key={e.company}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-bold text-ink">
                  {e.company} ·{" "}
                  <span className="font-semibold text-ink-muted">
                    {pick(locale, e.role.en, e.role.fr)}
                  </span>
                </p>
                <span className="text-xs text-ink-subtle bg-surface-alt px-3 py-1 rounded-full">
                  {e.period}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-strong mt-2">
                {pick(locale, e.domain.en, e.domain.fr)}
              </p>
              <p className="text-sm text-ink-muted leading-relaxed mt-2">
                {pick(locale, e.work.en, e.work.fr)}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-2 text-sm text-ink-subtle">
          <LuLock className="w-4 h-4" aria-hidden="true" />
          <span>
            {pick(
              locale,
              "Need to see confidential work?",
              "Besoin de voir du travail confidentiel ?"
            )}{" "}
            <a
              href="/contact"
              className="font-semibold text-brand-strong hover:underline"
            >
              {pick(locale, "Request a walkthrough", "Demander une présentation")}
            </a>
            <LuArrowRight className="inline w-3.5 h-3.5 ml-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  );
}
