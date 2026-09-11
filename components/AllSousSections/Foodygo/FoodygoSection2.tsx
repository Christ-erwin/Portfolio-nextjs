import React from "react";
import type { IconType } from "react-icons";
import { LuShoppingCart, LuUtensils, LuMapPin, LuRepeat } from "react-icons/lu";
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

const research: { icon: IconType; p: BiText }[] = [
  {
    icon: LuShoppingCart,
    p: {
      en: "Checkout flows run too long — users abandon at the payment step.",
      fr: "Les parcours de paiement sont trop longs — les utilisateurs abandonnent à l'étape du paiement.",
    },
  },
  {
    icon: LuUtensils,
    p: {
      en: "Poor menu organisation — no clear categories, no photo for every item.",
      fr: "Menu mal organisé — pas de catégories claires, pas de photo pour chaque plat.",
    },
  },
  {
    icon: LuMapPin,
    p: {
      en: "Order tracking is stressful — vague ETAs, no visual progress.",
      fr: "Le suivi de commande est stressant — ETA vagues, pas de progression visuelle.",
    },
  },
  {
    icon: LuRepeat,
    p: {
      en: "No easy reordering — users search from scratch every time.",
      fr: "Pas de recommande facile — les utilisateurs recherchent tout depuis zéro à chaque fois.",
    },
  },
];

const solutions: { t: BiText; d: BiText }[] = [
  {
    t: { en: "Category-based menu navigation", fr: "Navigation du menu par catégories" },
    d: {
      en: "Starters, Mains, Desserts, Drinks — segmented with sticky tabs. No scrolling through 50 items to find one.",
      fr: "Entrées, Plats, Desserts, Boissons — segmentés avec des onglets fixes. Plus besoin de scroller 50 plats pour en trouver un.",
    },
  },
  {
    t: { en: "Visual-first dish cards", fr: "Cartes plats orientées visuel" },
    d: {
      en: "Every dish has a hero photo, a short description and the price at a glance. Good food photography is the best conversion tool.",
      fr: "Chaque plat a une photo principale, une courte description et le prix visible d'un coup d'œil. Une bonne photo culinaire est le meilleur levier de conversion.",
    },
  },
  {
    t: { en: "Inline customisation", fr: "Personnalisation en ligne" },
    d: {
      en: "Cooking preferences, extras and modifications are handled before adding to cart — not as a confusing step at checkout.",
      fr: "Préférences de cuisson, suppléments et modifications gérés avant l'ajout au panier — pas comme une étape confuse au paiement.",
    },
  },
  {
    t: { en: "One-page checkout", fr: "Paiement sur une seule page" },
    d: {
      en: "Cart summary + delivery address + payment on a single screen. Fewer steps, lower abandonment.",
      fr: "Résumé du panier + adresse de livraison + paiement sur un seul écran. Moins d'étapes, moins d'abandon.",
    },
  },
  {
    t: { en: "Live order tracking", fr: "Suivi de commande en direct" },
    d: {
      en: "A visual tracker (Confirmed → Preparing → On the way → Delivered) with a real-time ETA. Less anxiety, fewer support messages.",
      fr: "Un suivi visuel (Confirmée → En préparation → En route → Livrée) avec un ETA en temps réel. Moins d'anxiété, moins de messages au support.",
    },
  },
  {
    t: { en: "Smart reordering", fr: "Recommande intelligente" },
    d: {
      en: '"Order again" on past orders, saved favourites, and frequent items surfaced on the home screen.',
      fr: '« Recommander » sur les commandes passées, favoris enregistrés, et plats fréquents mis en avant sur l\'accueil.',
    },
  },
];

const screens = [
  { src: "/images/Project_Images/Details/Foodygo/foodygoReal1.png", label: { en: "Home & Menu", fr: "Accueil & menu" } },
  { src: "/images/Project_Images/Details/Foodygo/foodygoReal2.png", label: { en: "Dish Detail", fr: "Détail plat" } },
  { src: "/images/Project_Images/Details/Foodygo/foodygoReal3.png", label: { en: "Cart & Checkout", fr: "Panier & paiement" } },
  { src: "/images/Project_Images/Details/Foodygo/foodygoReal4.png", label: { en: "Order Tracking", fr: "Suivi de commande" } },
  { src: "/images/Project_Images/Details/Foodygo/foodygoReal5.png", label: { en: "Profile", fr: "Profil" } },
];

export default function FoodygoSection2({ locale }: { locale: Locale }) {
  const t = (b: BiText) => pick(locale, b.en, b.fr);

  return (
    <article className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Snapshot
          locale={locale}
          role={pick(
            locale,
            "Solo — brand identity, UX, UI, prototype",
            "Solo — identité de marque, UX, UI, prototype"
          )}
          timeline={pick(locale, "~4 weeks, self-initiated", "~4 semaines, auto-initié")}
          type={pick(
            locale,
            "Concept project (fictional restaurant)",
            "Projet concept (restaurant fictif)"
          )}
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
              "FoodyGo is a self-initiated concept: an ordering app for a fictional local restaurant going digital. I ran it as a brand-to-product exercise — logo, palette and typography first, then the product — so every screen decision traces back to a defined identity. The goal: make ordering feel effortless, fast and a little joyful.",
              "FoodyGo est un concept auto-initié : une app de commande pour un restaurant local fictif qui se digitalise. Je l'ai mené comme un exercice de la marque au produit — logo, palette et typographie d'abord, puis le produit — pour que chaque décision d'écran découle d'une identité définie. L'objectif : rendre la commande fluide, rapide et un peu joyeuse."
            )}
          </p>
        </section>

        <section>
          <StepTitle n="02" title={pick(locale, "Constraints & scope", "Contraintes & périmètre")} />
          <ConstraintList
            items={pick(
              locale,
              [
                "Solo, ~4 weeks — brand identity plus a shippable MVP scope.",
                "In scope: browse menu, dish detail + customisation, cart, one-page checkout, order tracking, profile & reorder.",
                "Out of scope: multi-restaurant marketplace, courier app, loyalty program, in-app chat.",
                "Single restaurant, single city — no location picker or delivery-zone logic.",
                "Competitor analysis of 3 delivery apps stands in for primary research on this pass.",
              ],
              [
                "Solo, ~4 semaines — identité de marque plus un périmètre MVP livrable.",
                "Dans le périmètre : parcourir le menu, détail plat + personnalisation, panier, paiement en une page, suivi de commande, profil & recommande.",
                "Hors périmètre : marketplace multi-restaurants, app coursier, programme de fidélité, chat intégré.",
                "Un seul restaurant, une seule ville — pas de sélecteur de localisation ni de logique de zone de livraison.",
                "L'analyse concurrentielle de 3 apps de livraison tient lieu de recherche primaire sur cette itération.",
              ]
            )}
          />
        </section>

        <section>
          <StepTitle n="03" title={pick(locale, "Research", "Recherche")} />
          <p className="text-ink-muted mb-6">
            {pick(
              locale,
              "I analysed 3 delivery apps (Uber Eats, Deliveroo, a local competitor) and pulled out the friction users complain about most:",
              "J'ai analysé 3 apps de livraison (Uber Eats, Deliveroo, un concurrent local) et relevé les frictions les plus fréquemment citées :"
            )}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {research.map(({ icon: Icon, p }) => (
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
          <StepTitle n="04" title={pick(locale, "Visual identity", "Identité visuelle")} />
          <div className="bg-surface-alt rounded-2xl p-6">
            <p className="text-ink-muted mb-4 leading-relaxed">
              {pick(
                locale,
                "Before any screens, I fixed the brand so every later decision had a reference:",
                "Avant tout écran, j'ai fixé la marque pour que chaque décision suivante ait une référence :"
              )}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-bold text-ink-subtle uppercase tracking-wider mb-2">
                  {pick(locale, "Colour palette", "Palette de couleurs")}
                </p>
                <div className="flex gap-2">
                  <span className="w-10 h-10 rounded-lg bg-red-500" />
                  <span className="w-10 h-10 rounded-lg bg-yellow-400" />
                  <span className="w-10 h-10 rounded-lg bg-gray-900" />
                  <span className="w-10 h-10 rounded-lg bg-white border border-line" />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-ink-subtle uppercase tracking-wider mb-2">
                  {pick(locale, "Tone", "Ton")}
                </p>
                <p className="text-ink-muted text-sm">
                  {pick(
                    locale,
                    "Warm, energetic, appetising — colours that make food look good.",
                    "Chaleureux, énergique, appétissant — des couleurs qui mettent la nourriture en valeur."
                  )}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-ink-subtle uppercase tracking-wider mb-2">
                  {pick(locale, "Typography", "Typographie")}
                </p>
                <p className="text-ink-muted text-sm">
                  {pick(
                    locale,
                    "Bold headlines for dishes, clean body text for descriptions and prices.",
                    "Titres en gras pour les plats, texte courant propre pour les descriptions et les prix."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <StepTitle n="05" title={pick(locale, "Design decisions & rationale", "Décisions de design & justification")} />
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
          <StepTitle n="06" title={pick(locale, "Screens", "Écrans")} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                'From "I\'m hungry" to "order confirmed" in under 90 seconds for a repeat order.',
                "Checkout completed on a single screen — no multi-step wizard.",
                "Every dish card shows photo, description and price without a tap.",
                "Reordering a past order takes 2 taps from the home screen.",
              ],
              [
                "De « j'ai faim » à « commande confirmée » en moins de 90 secondes pour une recommande.",
                "Paiement finalisé sur un seul écran — pas d'assistant multi-étapes.",
                "Chaque carte plat affiche photo, description et prix sans avoir à taper.",
                "Recommander une commande passée prend 2 taps depuis l'accueil.",
              ]
            )}
            tested={pick(
              locale,
              [
                "Timed prototype run of first-order and reorder tasks against the 90-second target.",
                "Step-count comparison of the one-page checkout vs the 3 apps analysed.",
                "Heuristic review of the tracking screen for clarity of status and ETA.",
              ],
              [
                "Parcours chronométré du prototype pour la première commande et la recommande, face à l'objectif de 90 secondes.",
                "Comparaison du nombre d'étapes du paiement en une page vs les 3 apps analysées.",
                "Revue heuristique de l'écran de suivi pour la clarté du statut et de l'ETA.",
              ]
            )}
            next={pick(
              locale,
              "Unmoderated first-click and timed-task testing with 6–8 people who order delivery weekly, focused on checkout completion and reorder discovery.",
              "Test non modéré de premier clic et de tâches chronométrées avec 6 à 8 personnes commandant chaque semaine, centré sur la finalisation du paiement et la découverte de la recommande."
            )}
          />
        </section>

        <section>
          <StepTitle n="08" title={pick(locale, "Reflections & what I'd do next", "Réflexions & prochaines étapes")} />
          <p className="text-ink-muted text-lg leading-relaxed">
            {pick(
              locale,
              "FoodyGo gave me practice in e-commerce UX — the psychology of conversion at each step of a funnel — and in running brand and product together so they reinforce each other. I learned that in food apps, content quality (photography) carries as much weight as structure, and that collapsing checkout to one screen is often the single highest-impact move. Next: the timed testing above, plus the empty, error and out-of-stock states.",
              "FoodyGo m'a fait pratiquer l'UX e-commerce — la psychologie de la conversion à chaque étape d'un tunnel — et menée marque et produit ensemble pour qu'ils se renforcent mutuellement. J'ai appris que dans les apps food, la qualité du contenu (photographie) pèse autant que la structure, et que réduire le paiement à un seul écran est souvent la décision à plus fort impact. Ensuite : le test chronométré ci-dessus, plus les états vides, d'erreur et de rupture de stock."
            )}
          </p>
          <Callout>
            {pick(
              locale,
              "“In food ordering, every extra step is a potential exit — the whole design fought to remove them.”",
              "«Dans la commande de nourriture, chaque étape en plus est une sortie potentielle — tout le design s'est battu pour les supprimer.»"
            )}
          </Callout>
        </section>
      </div>
    </article>
  );
}
