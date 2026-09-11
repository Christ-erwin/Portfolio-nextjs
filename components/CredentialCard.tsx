import React from "react";
import { FcGoogle } from "react-icons/fc";
import { LuBadgeCheck, LuExternalLink } from "react-icons/lu";
import { pick, type Locale } from "@/lib/locale";

const COURSES_EN = [
  "Foundations of UX Design",
  "Empathize, Define & Ideate",
  "Wireframes & Low-Fidelity Prototypes",
  "UX Research & Testing Early Concepts",
  "High-Fidelity Designs & Prototypes in Figma",
  "Dynamic UI for Websites",
  "UX for Social Good & Job Prep",
  "Accelerate Your Job Search with AI",
];

const COURSES_FR = [
  "Fondamentaux du design UX",
  "Empathie, définition & idéation",
  "Wireframes & prototypes basse-fidélité",
  "Recherche UX & test des premiers concepts",
  "Design haute-fidélité & prototypes dans Figma",
  "Interfaces dynamiques pour le web",
  "UX pour le bien social & préparation à l'emploi",
  "Accélérer sa recherche d'emploi avec l'IA",
];

const VERIFY_URL =
  "https://coursera.org/verify/professional-cert/B11D2UKU5EYC";

/** Verified Google UX Design Professional Certificate. */
export default function CredentialCard({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const courses = pick(locale, COURSES_EN, COURSES_FR);

  return (
    <div className="rounded-2xl border border-line bg-surface p-6 md:p-7">
      <div className="flex items-start gap-4">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-line bg-white flex-shrink-0">
          <FcGoogle className="w-6 h-6" aria-hidden="true" />
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="font-bold text-ink">
              {pick(
                locale,
                "Google UX Design Professional Certificate",
                "Certificat professionnel Google UX Design"
              )}
            </h3>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-strong">
              <LuBadgeCheck className="w-3.5 h-3.5" aria-hidden="true" />
              {pick(locale, "Verified", "Vérifié")}
            </span>
          </div>

          <p className="text-sm text-ink-subtle mt-0.5">
            {pick(
              locale,
              "Google · Coursera · 8 courses · Completed 2026",
              "Google · Coursera · 8 cours · Obtenu en 2026"
            )}
          </p>

          <p className="text-sm text-ink-muted mt-3 leading-relaxed">
            {pick(
              locale,
              "An 8-course program covering the full design process end to end — user empathy, problem definition, ideation, wireframing, prototyping, usability testing, and high-fidelity design in Figma.",
              "Un programme de 8 cours couvrant tout le processus de design — empathie utilisateur, définition du problème, idéation, wireframing, prototypage, tests d'utilisabilité et design haute-fidélité dans Figma."
            )}
          </p>

          {!compact && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {courses.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-line bg-surface-alt px-3 py-1 text-xs text-ink-muted"
                >
                  {c}
                </li>
              ))}
            </ul>
          )}

          <a
            href={VERIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong hover:underline"
          >
            {pick(locale, "Verify credential", "Vérifier le certificat")}
            <LuExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="sr-only">
              ({pick(locale, "opens in a new tab", "ouvre un nouvel onglet")})
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
