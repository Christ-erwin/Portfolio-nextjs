import React from "react";
import type { IconType } from "react-icons";
import { LuLayoutGrid, LuTarget, LuSearch, LuClapperboard } from "react-icons/lu";
import {
  Snapshot,
  StepTitle,
  Callout,
  Figure,
  ConstraintList,
  Outcomes,
} from "@/components/CaseStudy";
import { pick, type Locale } from "@/lib/locale";

type BiText = { en: string; fr: string };

const problems: { icon: IconType; p: BiText }[] = [
  {
    icon: LuLayoutGrid,
    p: {
      en: "Cluttered home screens that overwhelm rather than guide the user toward content.",
      fr: "Des écrans d'accueil surchargés qui submergent l'utilisateur au lieu de le guider vers le contenu.",
    },
  },
  {
    icon: LuTarget,
    p: {
      en: "Poor content recommendation — “continue watching” buried deep, no smart suggestions.",
      fr: "Recommandations de contenu médiocres — « reprendre la lecture » enfoui, aucune suggestion intelligente.",
    },
  },
  {
    icon: LuSearch,
    p: {
      en: "Weak search and filter — hard to find content by genre, language, or mood.",
      fr: "Recherche et filtres faibles — difficile de trouver un contenu par genre, langue ou humeur.",
    },
  },
  {
    icon: LuClapperboard,
    p: {
      en: "No visual distinction between movies, series, and documentaries at a glance.",
      fr: "Aucune distinction visuelle immédiate entre films, séries et documentaires.",
    },
  },
];

const solutions: { t: BiText; d: BiText }[] = [
  {
    t: { en: "Smart Home Screen", fr: "Écran d'accueil intelligent" },
    d: {
      en: 'Organized into clear zones: "Continue Watching" at the top, then "Trending", "New Releases", and "For You" — each with a clear visual hierarchy so users find content in seconds.',
      fr: 'Organisé en zones claires : « Reprendre » en haut, puis « Tendances », « Nouveautés » et « Pour vous » — chacune avec une hiérarchie visuelle claire pour trouver un contenu en quelques secondes.',
    },
  },
  {
    t: { en: "Advanced Filter System", fr: "Système de filtres avancé" },
    d: {
      en: "Search by genre, format (movie/series/doc), duration, language, and mood. Users can discover by what they feel like watching, not just what they know.",
      fr: "Recherche par genre, format (film/série/doc), durée, langue et humeur. On découvre selon son envie du moment, pas seulement ce qu'on connaît déjà.",
    },
  },
  {
    t: { en: "Immersive Detail Page", fr: "Page détail immersive" },
    d: {
      en: "Full-bleed hero with trailer preview, synopsis, cast, user ratings, and content tags. A prominent play button with resume detection.",
      fr: "Hero plein écran avec aperçu de bande-annonce, synopsis, casting, notes et tags. Un bouton lecture bien visible avec détection de reprise.",
    },
  },
  {
    t: { en: "Dark-First Design System", fr: "Design system dark-first" },
    d: {
      en: "Built a full dark-mode design system optimized for evening/low-light viewing — high contrast content cards, muted backgrounds, cinematic feel.",
      fr: "Un design system dark-mode complet optimisé pour le visionnage en soirée — cartes à fort contraste, fonds sourds, ambiance cinéma.",
    },
  },
  {
    t: { en: "Mini-Player & Continuity", fr: "Mini-lecteur & continuité" },
    d: {
      en: 'A floating mini-player persists while browsing. "Continue Watching" is always visible on the home screen — no hunting required.',
      fr: 'Un mini-lecteur flottant reste actif pendant la navigation. « Reprendre » est toujours visible sur l\'accueil — plus besoin de chercher.',
    },
  },
];

const screens = [
  {
    src: "/images/Project_Images/Details/MoovyFlix/moovyReal1.png",
    label: { en: "Onboarding", fr: "Onboarding" },
  },
  { src: "/images/Project_Images/Details/MoovyFlix/moovyReal2.png", label: { en: "Home", fr: "Accueil" } },
  {
    src: "/images/Project_Images/Details/MoovyFlix/moovyReal3.png",
    label: { en: "Content Detail", fr: "Détail contenu" },
  },
  {
    src: "/images/Project_Images/Details/MoovyFlix/moovyReal4.png",
    label: { en: "Search & Filter", fr: "Recherche & filtres" },
  },
  { src: "/images/Project_Images/Details/MoovyFlix/moovyReal5.png", label: { en: "Profile", fr: "Profil" } },
  { src: "/images/Project_Images/Details/MoovyFlix/moovyReal6.png", label: { en: "Player", fr: "Lecteur" } },
];

export default function MoovyFlixSection2({ locale }: { locale: Locale }) {
  const t = (b: BiText) => pick(locale, b.en, b.fr);

  return (
    <article className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Snapshot
          locale={locale}
          role={pick(
            locale,
            "Solo — research, UX, UI, design system, prototype",
            "Solo — recherche, UX, UI, design system, prototype"
          )}
          timeline={pick(locale, "~4 weeks, self-initiated", "~4 semaines, auto-initié")}
          type={pick(locale, "Concept project", "Projet concept")}
          platform="iOS & Android"
          status={pick(
            locale,
            "Designed & prototyped · not shipped",
            "Designé & prototypé · non lancé"
          )}
          links={[
            { kind: "prototype", href: "#" /* TODO: Figma prototype URL */ },
          ]}
        />

        <section>
          <StepTitle n="01" title={pick(locale, "Context", "Contexte")} />
          <p className="text-ink-muted leading-relaxed text-lg">
            {pick(
              locale,
              "MoovyFlix is a self-initiated concept: design a streaming app from scratch that fixes the UX problems the big platforms still ship. I used it to practice the full process — from problem framing to a polished, interactive prototype with a complete design system.",
              "MoovyFlix est un concept auto-initié : concevoir une app de streaming de zéro qui corrige les problèmes UX que les grandes plateformes n'ont toujours pas résolus. Je m'en suis servi pour pratiquer tout le processus — du cadrage du problème à un prototype interactif abouti avec un design system complet."
            )}
          </p>
        </section>

        <section>
          <StepTitle n="02" title={pick(locale, "Constraints & scope", "Contraintes & périmètre")} />
          <ConstraintList
            items={pick(
              locale,
              [
                "Solo project, ~4 weeks part-time — scope had to stay tight.",
                "In scope: browse, search/filter, content detail, resume playback, profile.",
                "Out of scope: account/billing, downloads, social features, live TV.",
                "Mobile-first, dark UI, single design system — no tablet or TV layouts.",
                "No access to real platform analytics — decisions are based on heuristic analysis and my own audit of 3 competitors.",
              ],
              [
                "Projet solo, ~4 semaines à temps partiel — le périmètre devait rester serré.",
                "Dans le périmètre : navigation, recherche/filtres, détail contenu, reprise de lecture, profil.",
                "Hors périmètre : compte/facturation, téléchargements, fonctions sociales, TV en direct.",
                "Mobile-first, UI sombre, un seul design system — pas de mise en page tablette ou TV.",
                "Aucun accès à des analytics réelles — décisions basées sur une analyse heuristique et mon propre audit de 3 concurrents.",
              ]
            )}
          />
        </section>

        <section>
          <StepTitle n="02b" title={pick(locale, "Problem statement", "Énoncé du problème")} />
          <p className="text-ink-muted mb-6">
            {pick(
              locale,
              "After auditing 3 major streaming platforms as a user, I grouped the recurring friction into four themes:",
              "Après avoir audité 3 grandes plateformes de streaming en tant qu'utilisateur, j'ai regroupé les frictions récurrentes en quatre thèmes :"
            )}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map(({ icon: Icon, p }) => (
              <div key={p.en} className="flex gap-4 bg-surface-alt rounded-2xl p-5">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand flex-shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <p className="text-ink-muted text-sm leading-relaxed">{t(p)}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="03" title={pick(locale, "Who I designed for", "Pour qui j'ai designé")} />
          <div className="bg-gradient-to-br from-surface-alt to-brand-tint rounded-2xl p-6 border border-brand/15">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-strong mb-3">
              {pick(
                locale,
                "Proto-persona — assumption-based, to be validated",
                "Proto-persona — basé sur des hypothèses, à valider"
              )}
            </p>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full grad-bg flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <div>
                <p className="font-bold text-ink">
                  {pick(locale, "Kofi, 27 — Urban Professional", "Kofi, 27 ans — jeune actif urbain")}
                </p>
                <p className="text-ink-subtle text-sm">
                  {pick(
                    locale,
                    "Watches 2–3h of content per evening after work",
                    "Regarde 2 à 3h de contenu chaque soir après le travail"
                  )}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold text-ink-subtle uppercase tracking-wider mb-2">
                  {pick(locale, "Goals", "Objectifs")}
                </p>
                {pick(
                  locale,
                  [
                    "Find something good to watch fast",
                    "Pick up where he left off easily",
                    "Discover new content without effort",
                  ],
                  [
                    "Trouver rapidement quelque chose de bien à regarder",
                    "Reprendre facilement là où il s'est arrêté",
                    "Découvrir du nouveau contenu sans effort",
                  ]
                ).map((g) => (
                  <p key={g} className="text-ink-muted text-sm mb-1">
                    → {g}
                  </p>
                ))}
              </div>
              <div>
                <p className="text-xs font-bold text-ink-subtle uppercase tracking-wider mb-2">
                  {pick(locale, "Frustrations", "Frustrations")}
                </p>
                {pick(
                  locale,
                  [
                    "Spends 15 min choosing, then gives up",
                    "Forgets where he stopped in a series",
                    "Recommendations are irrelevant",
                  ],
                  [
                    "Passe 15 min à choisir, puis abandonne",
                    "Oublie où il s'est arrêté dans une série",
                    "Les recommandations ne sont pas pertinentes",
                  ]
                ).map((f) => (
                  <p key={f} className="text-red-600 text-sm mb-1">
                    ✗ {f}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <StepTitle n="04" title={pick(locale, "Design decisions & rationale", "Décisions de design & justification")} />
          <div className="flex flex-col gap-4">
            {solutions.map((s, i) => (
              <div
                key={s.t.en}
                className="flex gap-4 border border-line rounded-2xl p-5 hover:border-brand/30 transition-colors"
              >
                <span className="text-sm font-bold text-brand flex-shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink mb-1">{t(s.t)}</p>
                  <p className="text-ink-muted text-sm leading-relaxed">{t(s.d)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="05" title={pick(locale, "Screens", "Écrans")} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {screens.map((s) => (
              <Figure key={s.label.en} src={s.src} alt={t(s.label)} w={200} caption={t(s.label)} />
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="06" title={pick(locale, "Outcomes", "Résultats")} />
          <Outcomes
            locale={locale}
            criteria={pick(
              locale,
              [
                "Time-to-first-play under 20 seconds from cold open for a returning user.",
                '"Continue watching" reachable in one tap from any main screen.',
                "Content type (movie / series / doc) identifiable without reading a label.",
                "Filter flow completable in under 15 seconds for a specific mood + genre.",
              ],
              [
                "Temps avant première lecture inférieur à 20 secondes pour un utilisateur récurrent.",
                "« Reprendre la lecture » accessible en un tap depuis n'importe quel écran principal.",
                "Type de contenu (film / série / doc) identifiable sans lire de label.",
                "Parcours de filtrage réalisable en moins de 15 secondes pour une humeur + un genre donnés.",
              ]
            )}
            tested={pick(
              locale,
              [
                "Heuristic evaluation of every screen against Nielsen's 10 usability heuristics.",
                "Click-through walkthroughs of the 3 core tasks (resume, discover, search) in the Figma prototype.",
                "Competitive teardown of Netflix, Prime Video and Disney+ to check each decision against a real baseline.",
              ],
              [
                "Évaluation heuristique de chaque écran selon les 10 heuristiques de Nielsen.",
                "Parcours guidés des 3 tâches clés (reprendre, découvrir, rechercher) dans le prototype Figma.",
                "Démontage concurrentiel de Netflix, Prime Video et Disney+ pour comparer chaque décision à une référence réelle.",
              ]
            )}
            next={pick(
              locale,
              "Unmoderated testing with 5–8 regular streamers to measure time-to-first-play and filter success on the prototype, then iterate the home hierarchy.",
              "Test non modéré avec 5 à 8 utilisateurs réguliers de streaming pour mesurer le temps avant lecture et le succès du filtrage sur le prototype, puis itérer sur la hiérarchie de l'accueil."
            )}
          />
        </section>

        <section>
          <StepTitle n="07" title={pick(locale, "Reflections & what I'd do next", "Réflexions & prochaines étapes")} />
          <p className="text-ink-muted text-lg leading-relaxed">
            {pick(
              locale,
              "MoovyFlix sharpened my ability to design complex information architectures and content-heavy interfaces, and to build a dark-mode design system that holds contrast and readability at scale. If I took it further, I'd validate the home-screen zoning with real users, pressure-test the recommendation model with content metadata, and design the account and download flows I scoped out.",
              "MoovyFlix a affiné ma capacité à concevoir des architectures d'information complexes et des interfaces riches en contenu, et à construire un design system dark-mode qui tient le contraste et la lisibilité à l'échelle. Si j'allais plus loin, je validerais le zonage de l'accueil avec de vrais utilisateurs, mettrais à l'épreuve le modèle de recommandation avec des métadonnées, et concevrais les parcours compte et téléchargement laissés hors périmètre."
            )}
          </p>
          <Callout>
            {pick(
              locale,
              "“In entertainment UX, time-to-first-play is the metric that matters most — every screen was tested against it.”",
              "«En UX divertissement, le temps avant la première lecture est la métrique qui compte le plus — chaque écran a été testé par rapport à elle.»"
            )}
          </Callout>
        </section>
      </div>
    </article>
  );
}
