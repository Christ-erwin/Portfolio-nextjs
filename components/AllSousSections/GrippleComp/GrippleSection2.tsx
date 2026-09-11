import React from "react";
import type { IconType } from "react-icons";
import { LuRefreshCw, LuBellRing, LuEye, LuWind, LuCheck } from "react-icons/lu";
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
    icon: LuRefreshCw,
    p: {
      en: "Infinite scroll and algorithmic feeds trap users in passive consumption loops.",
      fr: "Le scroll infini et les fils algorithmiques enferment les utilisateurs dans une consommation passive.",
    },
  },
  {
    icon: LuBellRing,
    p: {
      en: "Notification overload creates anxiety and compulsive checking.",
      fr: "La surcharge de notifications crée de l'anxiété et des vérifications compulsives.",
    },
  },
  {
    icon: LuEye,
    p: {
      en: "Public vanity metrics (likes, follower counts) distort self-expression and genuine connection.",
      fr: "Les métriques de vanité publiques (likes, abonnés) faussent l'expression de soi et la connexion sincère.",
    },
  },
  {
    icon: LuWind,
    p: {
      en: "Feature bloat — Stories, Reels, Shops, Ads — buries the core social experience.",
      fr: "L'empilement de fonctionnalités — Stories, Reels, Shops, Ads — enterre l'expérience sociale de base.",
    },
  },
];

const principles: { t: BiText; d: BiText }[] = [
  {
    t: { en: "Intentional by design", fr: "Intentionnel par conception" },
    d: {
      en: "No infinite scroll. The feed has a visible end. Users browse with purpose, not compulsion.",
      fr: "Pas de scroll infini. Le fil a une fin visible. On navigue avec une intention, pas par compulsion.",
    },
  },
  {
    t: { en: "Content first", fr: "Le contenu d'abord" },
    d: {
      en: "No like counts visible to others, no follower vanity metrics. Posts stand on their content alone.",
      fr: "Aucun compteur de likes visible par les autres, aucune métrique de vanité. Les publications tiennent sur leur seul contenu.",
    },
  },
  {
    t: { en: "Calm interface", fr: "Interface apaisée" },
    d: {
      en: "Generous whitespace, a muted palette, grouped notifications. An app that respects your attention.",
      fr: "Beaucoup d'espace blanc, une palette sourde, des notifications regroupées. Une app qui respecte votre attention.",
    },
  },
];

const features: BiText[] = [
  {
    en: "Sign up / login with a short, clean onboarding",
    fr: "Inscription / connexion avec un onboarding court et propre",
  },
  {
    en: "Create posts — text, photo, video — with minimal friction",
    fr: "Créer des publications — texte, photo, vidéo — avec un minimum de friction",
  },
  {
    en: "A minimalist feed with no algorithmic manipulation",
    fr: "Un fil minimaliste sans manipulation algorithmique",
  },
  {
    en: "Thoughtful reactions beyond a single like",
    fr: "Des réactions réfléchies au-delà d'un simple like",
  },
  {
    en: "A follow system built around mutual connection",
    fr: "Un système d'abonnement construit autour de la connexion mutuelle",
  },
  {
    en: "Profiles with bio and posts, no public vanity metrics",
    fr: "Des profils avec bio et publications, sans métrique de vanité publique",
  },
  {
    en: "A calm notification center with grouped alerts, not red badges",
    fr: "Un centre de notifications apaisé avec des alertes groupées, sans badges rouges",
  },
];

const screens = [
  { src: "/images/Project_Images/Details/Gripple/grippleReal2.png", label: { en: "Home Feed", fr: "Fil d'accueil" } },
  { src: "/images/Project_Images/Details/Gripple/grippleReal3.png", label: { en: "Post Detail", fr: "Détail publication" } },
  { src: "/images/Project_Images/Details/Gripple/grippleReal4.png", label: { en: "Profile", fr: "Profil" } },
  { src: "/images/Project_Images/Details/Gripple/grippleReal7.png", label: { en: "Create Post", fr: "Créer une publication" } },
];

export default function GrippleSection2({ locale }: { locale: Locale }) {
  const t = (b: BiText) => pick(locale, b.en, b.fr);

  return (
    <article className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Snapshot
          locale={locale}
          role={pick(locale, "Solo — concept, UX, UI, prototype", "Solo — concept, UX, UI, prototype")}
          timeline={pick(locale, "~3 weeks, self-initiated", "~3 semaines, auto-initié")}
          type={pick(locale, "Concept project", "Projet concept")}
          platform={pick(locale, "Mobile (iOS & Android)", "Mobile (iOS & Android)")}
          status={pick(locale, "Designed & prototyped · not shipped", "Designé & prototypé · non lancé")}
          links={[
            { kind: "prototype", href: "#" /* TODO: Figma prototype URL */ },
          ]}
        />

        <section>
          <StepTitle n="01" title={pick(locale, "Context", "Contexte")} />
          <p className="text-ink-muted text-lg leading-relaxed">
            {pick(
              locale,
              "Gripple started from a personal observation: mainstream social networks are engineered for time-on-app, not connection. Infinite scroll, algorithmic feeds and notification overload make them exhausting. The design question: what would a social app look like if it optimised for meaningful interaction instead of engagement time?",
              "Gripple est né d'une observation personnelle : les réseaux sociaux grand public sont conçus pour maximiser le temps passé, pas la connexion. Scroll infini, fils algorithmiques et surcharge de notifications les rendent épuisants. La question de design : à quoi ressemblerait une app sociale optimisée pour une interaction sincère plutôt que pour le temps d'engagement ?"
            )}
          </p>
        </section>

        <section>
          <StepTitle n="02" title={pick(locale, "Constraints & scope", "Contraintes & périmètre")} />
          <ConstraintList
            items={pick(
              locale,
              [
                "Self-initiated, solo, ~3 weeks — a focused MVP, not a full platform.",
                "In scope: onboarding, feed, post creation, reactions, profile, notifications.",
                "Out of scope: DMs, groups, discovery, moderation tooling, monetisation.",
                "Design thesis fixed up front: no infinite scroll, no public vanity metrics.",
                "No user research budget — direction is driven by well-documented attention-economy critique, to be validated later.",
              ],
              [
                "Auto-initié, solo, ~3 semaines — un MVP ciblé, pas une plateforme complète.",
                "Dans le périmètre : onboarding, fil, création de publication, réactions, profil, notifications.",
                "Hors périmètre : messages privés, groupes, découverte, outils de modération, monétisation.",
                "Thèse de design fixée en amont : pas de scroll infini, pas de métrique de vanité publique.",
                "Aucun budget de recherche utilisateur — direction guidée par une critique bien documentée de l'économie de l'attention, à valider ensuite.",
              ]
            )}
          />
        </section>

        <section>
          <StepTitle n="03" title={pick(locale, "Problem statement", "Énoncé du problème")} />
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
          <StepTitle n="04" title={pick(locale, "Design principles", "Principes de design")} />
          <div className="grid md:grid-cols-3 gap-4">
            {principles.map((p) => (
              <div key={p.t.en} className="bg-surface-alt rounded-2xl p-5">
                <p className="font-semibold text-ink mb-2">{t(p.t)}</p>
                <p className="text-ink-muted text-sm leading-relaxed">{t(p.d)}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="05" title={pick(locale, "What I designed", "Ce que j'ai conçu")} />
          <ul className="flex flex-col gap-3">
            {features.map((f) => (
              <li
                key={f.en}
                className="flex items-start gap-3 border border-line rounded-xl p-4"
              >
                <span className="w-5 h-5 rounded-full grad-bg flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <LuCheck className="w-3 h-3" aria-hidden="true" />
                </span>
                <p className="text-ink-muted text-sm">{t(f)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <StepTitle n="06" title={pick(locale, "Screens", "Écrans")} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {screens.map((s) => (
              <Figure key={s.label.en} src={s.src} alt={t(s.label)} w={220} caption={t(s.label)} />
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="07" title={pick(locale, "Outcomes", "Résultats")} />
          <Outcomes
            locale={locale}
            criteria={pick(
              locale,
              [
                "A session has a natural end — the feed stops instead of scrolling forever.",
                "No like counts or follower numbers are visible to other users anywhere in the UI.",
                "Notifications arrive grouped and calm — no red count badges.",
                "Posting a text update takes 2 screens and under 20 seconds.",
              ],
              [
                "Une session a une fin naturelle — le fil s'arrête au lieu de défiler à l'infini.",
                "Aucun compteur de likes ou d'abonnés n'est visible par les autres, nulle part dans l'UI.",
                "Les notifications arrivent groupées et apaisées — pas de badges rouges.",
                "Publier une mise à jour texte prend 2 écrans et moins de 20 secondes.",
              ]
            )}
            tested={pick(
              locale,
              [
                "Walked every screen against the two design-thesis rules to catch violations.",
                "Prototype run-through of the post, react and follow flows.",
                "Heuristic review focused on attention: what pulls the eye, what creates urgency, what can be removed.",
              ],
              [
                "Chaque écran passé au crible des deux règles de la thèse de design pour repérer les entorses.",
                "Parcours du prototype pour les flux de publication, réaction et abonnement.",
                "Revue heuristique centrée sur l'attention : ce qui attire l'œil, ce qui crée de l'urgence, ce qui peut être retiré.",
              ]
            )}
            next={pick(
              locale,
              "Diary study with 5–6 heavy social-media users trying Gripple for a week, measuring perceived calm and whether the missing metrics are actually missed.",
              "Étude en journal de bord avec 5 à 6 gros utilisateurs de réseaux sociaux testant Gripple pendant une semaine, en mesurant le calme perçu et si les métriques absentes manquent vraiment."
            )}
          />
        </section>

        <section>
          <StepTitle n="08" title={pick(locale, "Reflections & what I'd do next", "Réflexions & prochaines étapes")} />
          <p className="text-ink-muted text-lg leading-relaxed">
            {pick(
              locale,
              "Gripple taught me how much a clear thesis and a few hard constraints can do for a design — removing features (infinite scroll, public likes) made the interface calmer and more honest. Next I'd run the diary study, design the moderation and reporting flows I scoped out, and test whether a bounded feed keeps people coming back.",
              "Gripple m'a appris ce qu'une thèse claire et quelques contraintes fortes peuvent apporter à un design — retirer des fonctionnalités (scroll infini, likes publics) a rendu l'interface plus calme et plus honnête. Ensuite, je mènerais l'étude en journal de bord, concevrais les parcours de modération et de signalement laissés hors périmètre, et testerais si un fil borné fait quand même revenir les utilisateurs."
            )}
          </p>
          <Callout>
            {pick(
              locale,
              "“The most powerful decision on Gripple was what to leave out — every deletion was a deliberate act of respect for the user's attention.”",
              "«La décision la plus forte sur Gripple a été ce que j'ai choisi de ne pas faire — chaque suppression était un acte délibéré de respect pour l'attention de l'utilisateur.»"
            )}
          </Callout>
        </section>
      </div>
    </article>
  );
}
