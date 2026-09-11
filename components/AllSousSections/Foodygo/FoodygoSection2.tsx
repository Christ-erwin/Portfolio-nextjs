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

const research: { icon: IconType; p: string }[] = [
  {
    icon: LuShoppingCart,
    p: "Checkout flows run too long — users abandon at the payment step.",
  },
  {
    icon: LuUtensils,
    p: "Poor menu organisation — no clear categories, no photo for every item.",
  },
  {
    icon: LuMapPin,
    p: "Order tracking is stressful — vague ETAs, no visual progress.",
  },
  {
    icon: LuRepeat,
    p: "No easy reordering — users search from scratch every time.",
  },
];

const solutions = [
  {
    t: "Category-based menu navigation",
    d: "Starters, Mains, Desserts, Drinks — segmented with sticky tabs. No scrolling through 50 items to find one.",
  },
  {
    t: "Visual-first dish cards",
    d: "Every dish has a hero photo, a short description and the price at a glance. Good food photography is the best conversion tool.",
  },
  {
    t: "Inline customisation",
    d: "Cooking preferences, extras and modifications are handled before adding to cart — not as a confusing step at checkout.",
  },
  {
    t: "One-page checkout",
    d: "Cart summary + delivery address + payment on a single screen. Fewer steps, lower abandonment.",
  },
  {
    t: "Live order tracking",
    d: "A visual tracker (Confirmed → Preparing → On the way → Delivered) with a real-time ETA. Less anxiety, fewer support messages.",
  },
  {
    t: "Smart reordering",
    d: '"Order again" on past orders, saved favourites, and frequent items surfaced on the home screen.',
  },
];

const screens = [
  { src: "/images/Project_Images/Details/Foodygo/foodygoReal1.png", label: "Home & Menu" },
  { src: "/images/Project_Images/Details/Foodygo/foodygoReal2.png", label: "Dish Detail" },
  { src: "/images/Project_Images/Details/Foodygo/foodygoReal3.png", label: "Cart & Checkout" },
  { src: "/images/Project_Images/Details/Foodygo/foodygoReal4.png", label: "Order Tracking" },
  { src: "/images/Project_Images/Details/Foodygo/foodygoReal5.png", label: "Profile" },
];

export default function FoodygoSection2() {
  return (
    <article className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Snapshot
          role="Solo — brand identity, UX, UI, prototype"
          timeline="~4 weeks, self-initiated"
          type="Concept project (fictional restaurant)"
          platform="Mobile (iOS & Android)"
          status="Designed & prototyped · not shipped"
          links={[
            { kind: "prototype", href: "#" /* TODO: Figma prototype URL */ },
          ]}
        />

        <section>
          <StepTitle n="01" title="Context" />
          <p className="text-ink-muted text-lg leading-relaxed">
            FoodyGo is a self-initiated concept: an ordering app for a fictional
            local restaurant going digital. I ran it as a brand-to-product
            exercise — logo, palette and typography first, then the product — so
            every screen decision traces back to a defined identity. The goal:
            make ordering feel effortless, fast and a little joyful.
          </p>
        </section>

        <section>
          <StepTitle n="02" title="Constraints & scope" />
          <ConstraintList
            items={[
              "Solo, ~4 weeks — brand identity plus a shippable MVP scope.",
              "In scope: browse menu, dish detail + customisation, cart, one-page checkout, order tracking, profile & reorder.",
              "Out of scope: multi-restaurant marketplace, courier app, loyalty program, in-app chat.",
              "Single restaurant, single city — no location picker or delivery-zone logic.",
              "Competitor analysis of 3 delivery apps stands in for primary research on this pass.",
            ]}
          />
        </section>

        <section>
          <StepTitle n="03" title="Research" />
          <p className="text-ink-muted mb-6">
            I analysed 3 delivery apps (Uber Eats, Deliveroo, a local competitor)
            and pulled out the friction users complain about most:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {research.map(({ icon: Icon, p }) => (
              <div key={p} className="flex gap-4 bg-surface-alt rounded-2xl p-5">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand flex-shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <p className="text-ink-muted text-sm leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="04" title="Visual identity" />
          <div className="bg-surface-alt rounded-2xl p-6">
            <p className="text-ink-muted mb-4 leading-relaxed">
              Before any screens, I fixed the brand so every later decision had a
              reference:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-bold text-ink-subtle uppercase tracking-wider mb-2">
                  Colour palette
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
                  Tone
                </p>
                <p className="text-ink-muted text-sm">
                  Warm, energetic, appetising — colours that make food look
                  good.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-ink-subtle uppercase tracking-wider mb-2">
                  Typography
                </p>
                <p className="text-ink-muted text-sm">
                  Bold headlines for dishes, clean body text for descriptions
                  and prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <StepTitle n="05" title="Design decisions & rationale" />
          <div className="flex flex-col gap-4">
            {solutions.map((s, i) => (
              <div
                key={s.t}
                className="flex gap-4 border border-line rounded-2xl p-5 hover:border-brand/30 transition-colors"
              >
                <span className="text-sm font-bold text-brand flex-shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink mb-1">{s.t}</p>
                  <p className="text-ink-muted text-sm leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="06" title="Screens" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {screens.map((s) => (
              <Figure key={s.label} src={s.src} alt={s.label} w={220} caption={s.label} />
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="07" title="Outcomes" />
          <Outcomes
            criteria={[
              "From \"I'm hungry\" to \"order confirmed\" in under 90 seconds for a repeat order.",
              "Checkout completed on a single screen — no multi-step wizard.",
              "Every dish card shows photo, description and price without a tap.",
              "Reordering a past order takes 2 taps from the home screen.",
            ]}
            tested={[
              "Timed prototype run of first-order and reorder tasks against the 90-second target.",
              "Step-count comparison of the one-page checkout vs the 3 apps analysed.",
              "Heuristic review of the tracking screen for clarity of status and ETA.",
            ]}
            next="Unmoderated first-click and timed-task testing with 6–8 people who order delivery weekly, focused on checkout completion and reorder discovery."
          />
        </section>

        <section>
          <StepTitle n="08" title="Reflections & what I'd do next" />
          <p className="text-ink-muted text-lg leading-relaxed">
            FoodyGo gave me practice in e-commerce UX — the psychology of
            conversion at each step of a funnel — and in running brand and
            product together so they reinforce each other. I learned that in food
            apps, content quality (photography) carries as much weight as
            structure, and that collapsing checkout to one screen is often the
            single highest-impact move. Next: the timed testing above, plus the
            empty, error and out-of-stock states.
          </p>
          <Callout>
            &ldquo;In food ordering, every extra step is a potential exit — the
            whole design fought to remove them.&rdquo;
          </Callout>
        </section>
      </div>
    </article>
  );
}
