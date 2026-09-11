import React from "react";
import type { IconType } from "react-icons";
import {
  LuCompass,
  LuEye,
  LuAccessibility,
  LuUsers,
  LuPalette,
} from "react-icons/lu";
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

const audit: { icon: IconType; title: BiText; desc: BiText }[] = [
  {
    icon: LuCompass,
    title: { en: "Complex navigation", fr: "Navigation complexe" },
    desc: {
      en: "Core actions like sending money take too many steps. Users lose their place in long flows.",
      fr: "Les actions clés comme envoyer de l'argent demandent trop d'étapes. Les utilisateurs se perdent dans des parcours longs.",
    },
  },
  {
    icon: LuEye,
    title: { en: "Weak visual hierarchy", fr: "Hiérarchie visuelle faible" },
    desc: {
      en: "Balance, transactions and CTAs lack visual priority. Users scan but don't find what they need.",
      fr: "Le solde, les transactions et les CTA manquent de priorité visuelle. Les utilisateurs scannent l'écran sans trouver ce qu'ils cherchent.",
    },
  },
  {
    icon: LuAccessibility,
    title: { en: "Low accessibility", fr: "Faible accessibilité" },
    desc: {
      en: "Several text/background pairs fall short of WCAG AA contrast, hurting readability outdoors and for low-vision users.",
      fr: "Plusieurs paires texte/fond n'atteignent pas le contraste WCAG AA, nuisant à la lisibilité en extérieur et pour les malvoyants.",
    },
  },
  {
    icon: LuUsers,
    title: { en: "Poor contact management", fr: "Gestion des contacts insuffisante" },
    desc: {
      en: "No clear place to find, add or manage beneficiaries — a core, repeated task.",
      fr: "Aucun endroit clair pour trouver, ajouter ou gérer les bénéficiaires — une tâche centrale et répétée.",
    },
  },
  {
    icon: LuPalette,
    title: { en: "Weak brand identity", fr: "Identité de marque faible" },
    desc: {
      en: "Inconsistent visual language across screens; no design system holding it together.",
      fr: "Langage visuel incohérent d'un écran à l'autre ; aucun design system pour tenir l'ensemble.",
    },
  },
];

const strategy: { title: BiText; desc: BiText }[] = [
  {
    title: { en: "Navigation redesign", fr: "Refonte de la navigation" },
    desc: {
      en: "Surface the 3 most-used actions (Send, Receive, Balance) within one tap and cut steps out of the transfer flow.",
      fr: "Faire remonter les 3 actions les plus utilisées (Envoyer, Recevoir, Solde) en un tap et réduire les étapes du parcours de transfert.",
    },
  },
  {
    title: { en: "Visual hierarchy system", fr: "Système de hiérarchie visuelle" },
    desc: {
      en: "A clear type scale and spacing system. Balance becomes the hero element; CTAs are high-contrast and consistently placed.",
      fr: "Une échelle typographique et un système d'espacement clairs. Le solde devient l'élément héros ; les CTA sont à fort contraste et placés de façon cohérente.",
    },
  },
  {
    title: { en: "Accessible colour palette", fr: "Palette de couleurs accessible" },
    desc: {
      en: "Rebuilt the colour system to meet WCAG AA contrast at every text size — verified with a contrast checker.",
      fr: "Système de couleurs reconstruit pour atteindre le contraste WCAG AA à chaque taille de texte — vérifié avec un outil de contraste.",
    },
  },
  {
    title: { en: "Beneficiary management", fr: "Gestion des bénéficiaires" },
    desc: {
      en: "A dedicated contacts screen with search, recent contacts and clear add/manage actions to cut friction on repeat transfers.",
      fr: "Un écran contacts dédié avec recherche, contacts récents et actions claires d'ajout/gestion pour réduire la friction des transferts répétés.",
    },
  },
  {
    title: { en: "Consistent design system", fr: "Design system cohérent" },
    desc: {
      en: "A component library (buttons, cards, inputs, modals) so every screen stays visually consistent.",
      fr: "Une bibliothèque de composants (boutons, cartes, champs, modales) pour garder chaque écran visuellement cohérent.",
    },
  },
];

export default function WaveSection2({ locale }: { locale: Locale }) {
  const t = (b: BiText) => pick(locale, b.en, b.fr);

  return (
    <article className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Snapshot
          locale={locale}
          role={pick(
            locale,
            "Solo — UX audit, redesign, UI, design system",
            "Solo — audit UX, refonte, UI, design system"
          )}
          timeline={pick(locale, "~3 weeks, self-initiated", "~3 semaines, auto-initié")}
          type={pick(locale, "Redesign concept", "Concept de refonte")}
          platform={pick(locale, "Mobile (iOS & Android)", "Mobile (iOS & Android)")}
          status={pick(
            locale,
            "Not affiliated with Wave · concept only",
            "Non affilié à Wave · concept uniquement"
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
              "Wave is one of the most widely used mobile-money apps in West Africa. I use it daily, and I kept hitting the same friction points — so I ran a structured UX audit and redesigned the core experience. This is an independent concept, not commissioned by or affiliated with Wave.",
              "Wave est l'une des applications mobile money les plus utilisées en Afrique de l'Ouest. Je l'utilise au quotidien et je rencontrais toujours les mêmes points de friction — j'ai donc mené un audit UX structuré et refondu l'expérience principale. C'est un concept indépendant, ni commandité ni affilié à Wave."
            )}
          </p>
        </section>

        <section>
          <StepTitle n="02" title={pick(locale, "Constraints & scope", "Contraintes & périmètre")} />
          <ConstraintList
            items={pick(
              locale,
              [
                "Independent project — no access to Wave's users, analytics or roadmap.",
                "In scope: onboarding, home/balance, send & receive, beneficiaries, transaction history.",
                "Out of scope: KYC, agent network, savings products, cross-border transfer.",
                "Had to preserve the low-bandwidth, low-end-device reality of the user base.",
                "Findings are based on my own heuristic audit and public app-store reviews, not primary research.",
              ],
              [
                "Projet indépendant — aucun accès aux utilisateurs, analytics ou roadmap de Wave.",
                "Dans le périmètre : onboarding, accueil/solde, envoi & réception, bénéficiaires, historique des transactions.",
                "Hors périmètre : KYC, réseau d'agents, produits d'épargne, transfert transfrontalier.",
                "Contrainte de préserver la réalité bas débit / appareils bas de gamme de la base utilisateur.",
                "Constats basés sur mon propre audit heuristique et les avis publics de l'app store, pas sur une recherche primaire.",
              ]
            )}
          />
        </section>

        <section>
          <StepTitle n="03" title={pick(locale, "UX audit — what's broken", "Audit UX — ce qui ne va pas")} />
          <p className="text-ink-muted mb-6 leading-relaxed">
            {pick(
              locale,
              "I walked every core flow and scored it against usability heuristics and WCAG. Five issues came up repeatedly:",
              "J'ai parcouru chaque parcours clé et l'ai évalué selon les heuristiques d'utilisabilité et les WCAG. Cinq problèmes revenaient sans cesse :"
            )}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {audit.map(({ icon: Icon, title, desc }) => (
              <div
                key={title.en}
                className="flex gap-4 bg-surface-alt rounded-2xl p-5"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand flex-shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-ink mb-1">{t(title)}</p>
                  <p className="text-ink-muted text-sm leading-relaxed">{t(desc)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Figure
              src="/images/Project_Images/Details/Wave/waveOld.png"
              alt={pick(
                locale,
                "Original Wave interface, annotated during the audit",
                "Interface originale de Wave, annotée pendant l'audit"
              )}
              w={300}
              caption={pick(locale, "Original interface — audited screen", "Interface d'origine — écran audité")}
              className="w-full max-w-sm"
            />
          </div>
        </section>

        <section>
          <StepTitle n="04" title={pick(locale, "Strategy & design decisions", "Stratégie & décisions de design")} />
          <p className="text-ink-muted mb-6 leading-relaxed">
            {pick(
              locale,
              "Each audit finding maps to a specific design response:",
              "Chaque constat de l'audit correspond à une réponse de design précise :"
            )}
          </p>
          <div className="flex flex-col gap-4">
            {strategy.map((s, i) => (
              <div
                key={s.title.en}
                className="flex gap-4 border border-line rounded-2xl p-5 hover:border-brand/30 transition-colors"
              >
                <span className="text-sm font-bold text-brand flex-shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink mb-1">{t(s.title)}</p>
                  <p className="text-ink-muted text-sm leading-relaxed">{t(s.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="05" title={pick(locale, "Redesigned screens", "Écrans repensés")} />
          <div className="flex flex-wrap justify-around gap-6 mb-6">
            <Figure
              src="/images/Project_Images/Details/Wave/wavaPresent1.png"
              alt={pick(locale, "Wave redesign — home and balance", "Refonte Wave — accueil et solde")}
              w={180}
            />
            <Figure
              src="/images/Project_Images/Details/Wave/wavaPresent2.png"
              alt={pick(locale, "Wave redesign — transfer flow", "Refonte Wave — parcours de transfert")}
              w={180}
            />
          </div>
          <div className="flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-label={pick(
                locale,
                "Screen recording of the redesigned Wave transfer flow",
                "Enregistrement d'écran du parcours de transfert Wave repensé"
              )}
              className="w-full max-w-xs h-auto rounded-2xl shadow-lg"
            >
              <source
                src="https://res.cloudinary.com/docanichi/video/upload/v1752175194/waveRecord_qoi5g5.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        <section>
          <StepTitle n="06" title={pick(locale, "Outcomes", "Résultats")} />
          <Outcomes
            locale={locale}
            criteria={pick(
              locale,
              [
                "Send-money flow reduced from its current step count to 3 screens.",
                "Balance and primary CTA meet WCAG AA contrast (4.5:1) at every size.",
                "Add / find a beneficiary reachable in 2 taps from home.",
                "One documented component library covering every screen in the redesign.",
              ],
              [
                "Parcours d'envoi d'argent réduit à 3 écrans.",
                "Solde et CTA principal atteignent le contraste WCAG AA (4,5:1) à toute taille.",
                "Ajouter / trouver un bénéficiaire accessible en 2 taps depuis l'accueil.",
                "Une bibliothèque de composants documentée couvrant tous les écrans de la refonte.",
              ]
            )}
            tested={pick(
              locale,
              [
                "Before/after step-count comparison of the transfer flow.",
                "Contrast audit of the new palette with a WCAG contrast checker (all text ≥ 4.5:1).",
                "Prototype walkthrough of send, receive and beneficiary tasks.",
              ],
              [
                "Comparaison avant/après du nombre d'étapes du parcours de transfert.",
                "Audit de contraste de la nouvelle palette avec un outil WCAG (tout texte ≥ 4,5:1).",
                "Parcours guidé du prototype pour les tâches d'envoi, réception et bénéficiaires.",
              ]
            )}
            next={pick(
              locale,
              "Moderated testing with 5–8 current Wave users on low-end Android devices, comparing task time and error rate against the live app.",
              "Test modéré avec 5 à 8 utilisateurs actuels de Wave sur des Android bas de gamme, en comparant temps de tâche et taux d'erreur avec l'app en production."
            )}
          />
        </section>

        <section>
          <StepTitle n="07" title={pick(locale, "Reflections & what I'd do next", "Réflexions & prochaines étapes")} />
          <p className="text-ink-muted leading-relaxed text-lg">
            {pick(
              locale,
              "This redesign deepened my understanding of financial UX — trust signals, security perception, and accessibility on low-end hardware — and gave me practice building a design system from zero across 20+ screens. With more time I'd run the moderated test above, design the error and edge states in full, and validate the new navigation with a first-click test.",
              "Cette refonte a approfondi ma compréhension de l'UX financière — signaux de confiance, perception de la sécurité, accessibilité sur matériel bas de gamme — et m'a fait pratiquer la construction d'un design system de zéro sur 20+ écrans. Avec plus de temps, je mènerais le test modéré ci-dessus, designerais entièrement les états d'erreur et cas limites, et validerais la nouvelle navigation avec un test de premier clic."
            )}
          </p>
          <Callout>
            {pick(
              locale,
              "“The best fintech UX feels invisible — the user moves money without ever feeling like they're operating software.”",
              "«La meilleure UX fintech se fait oublier — l'utilisateur déplace son argent sans jamais avoir l'impression de manipuler un logiciel.»"
            )}
          </Callout>
        </section>
      </div>
    </article>
  );
}
