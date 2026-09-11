import React from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import { Snapshot, Outcomes } from "@/components/CaseStudy";
import { pick, type Locale } from "@/lib/locale";
import {
  LuShoppingCart,
  LuSettings,
  LuHouse,
  LuShoppingBag,
  LuWrench,
  LuSmartphone,
  LuZap,
  LuUser,
  LuArrowRight,
  LuWifi,
  LuWifiOff,
  LuBatteryLow,
  LuSiren,
} from "react-icons/lu";

type BiText = { en: string; fr: string };

function Step({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="step-badge" aria-hidden="true">
        {n}
      </span>
      <h2 className="font-semibold text-3xl md:text-4xl text-ink">{children}</h2>
    </div>
  );
}

function IconChip({ icon: Icon }: { icon: IconType }) {
  return (
    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-tint text-brand mb-3">
      <Icon className="w-5 h-5" aria-hidden="true" />
    </span>
  );
}

const challenge: { icon: IconType; title: BiText; desc: BiText }[] = [
  {
    icon: LuShoppingCart,
    title: { en: "Commerce", fr: "Commerce" },
    desc: {
      en: "Discovering and buying connected devices — a retail experience",
      fr: "Découvrir et acheter des appareils connectés — une expérience de commerce",
    },
  },
  {
    icon: LuSettings,
    title: { en: "Installation", fr: "Installation" },
    desc: {
      en: "Configuring a technical device — a guided, step-by-step experience",
      fr: "Configurer un appareil technique — une expérience guidée, étape par étape",
    },
  },
  {
    icon: LuHouse,
    title: { en: "Control", fr: "Contrôle" },
    desc: {
      en: "Managing the home daily — a dashboard and automation experience",
      fr: "Gérer la maison au quotidien — un tableau de bord et des automatisations",
    },
  },
];

const journey: { step: string; label: BiText; sub: BiText; icon: IconType }[] = [
  {
    step: "01",
    label: { en: "Discover", fr: "Découvrir" },
    sub: { en: "Browse & buy devices", fr: "Parcourir & acheter des appareils" },
    icon: LuShoppingBag,
  },
  {
    step: "02",
    label: { en: "Install", fr: "Installer" },
    sub: { en: "Guided device setup", fr: "Configuration guidée" },
    icon: LuWrench,
  },
  {
    step: "03",
    label: { en: "Control", fr: "Contrôler" },
    sub: { en: "Dashboard & remote control", fr: "Tableau de bord & contrôle à distance" },
    icon: LuSmartphone,
  },
  {
    step: "04",
    label: { en: "Automate", fr: "Automatiser" },
    sub: { en: "Create smart scenarios", fr: "Créer des scénarios intelligents" },
    icon: LuZap,
  },
];

const architecture: { name: BiText; sub: BiText; icon: IconType }[] = [
  {
    name: { en: "Home", fr: "Accueil" },
    sub: { en: "Dashboard — core of the experience", fr: "Tableau de bord — cœur de l'expérience" },
    icon: LuHouse,
  },
  {
    name: { en: "Store", fr: "Boutique" },
    sub: { en: "Discover & buy devices", fr: "Découvrir & acheter des appareils" },
    icon: LuShoppingCart,
  },
  {
    name: { en: "Scenarios", fr: "Scénarios" },
    sub: { en: "Manage automations", fr: "Gérer les automatisations" },
    icon: LuZap,
  },
  {
    name: { en: "Onboarding", fr: "Onboarding" },
    sub: { en: "Install new device", fr: "Installer un nouvel appareil" },
    icon: LuWrench,
  },
  {
    name: { en: "Profile", fr: "Profil" },
    sub: { en: "Account & settings", fr: "Compte & paramètres" },
    icon: LuUser,
  },
];

const principles: { title: BiText; desc: BiText }[] = [
  {
    title: { en: "Simplicity", fr: "Simplicité" },
    desc: {
      en: "Key actions are accessible in 1–2 taps from the Dashboard. No buried menus.",
      fr: "Les actions clés sont accessibles en 1 à 2 taps depuis le tableau de bord. Aucun menu enfoui.",
    },
  },
  {
    title: { en: "Progressivity", fr: "Progressivité" },
    desc: {
      en: "Complex features like automations are presented step by step, never all at once.",
      fr: "Les fonctionnalités complexes comme les automatisations sont présentées étape par étape, jamais d'un bloc.",
    },
  },
  {
    title: { en: "Modularity", fr: "Modularité" },
    desc: {
      en: "The interface works equally well with 1 device or 30. It scales gracefully.",
      fr: "L'interface fonctionne aussi bien avec 1 appareil qu'avec 30. Elle s'adapte avec élégance.",
    },
  },
];

const states: { icon: IconType; state: BiText; color: string }[] = [
  {
    icon: LuWifi,
    state: { en: "Device Online", fr: "Appareil en ligne" },
    color: "bg-green-50 border-green-200 text-green-700",
  },
  {
    icon: LuWifiOff,
    state: { en: "Device Offline", fr: "Appareil hors ligne" },
    color: "bg-red-50 border-red-200 text-red-700",
  },
  {
    icon: LuBatteryLow,
    state: { en: "Low Battery", fr: "Batterie faible" },
    color: "bg-amber-50 border-amber-200 text-amber-700",
  },
  {
    icon: LuSiren,
    state: { en: "Security Alert", fr: "Alerte de sécurité" },
    color: "bg-brand-tint border-brand/20 text-brand-strong",
  },
];

export default function HomeLinkSection2({ locale }: { locale: Locale }) {
  const t = (b: BiText) => pick(locale, b.en, b.fr);

  return (
    <div className="w-full h-auto bg-surface rounded-t-[80px] flex flex-col gap-16 px-6 py-16 md:px-[5%]">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-16">
        {/* 01 · Project Overview */}
        <section className="flex flex-col gap-5">
          <Step n="01">{pick(locale, "Project Overview", "Vue d'ensemble du projet")}</Step>
          <Snapshot
            locale={locale}
            role={pick(
              locale,
              "Solo Product Designer — research to final UI",
              "Product Designer solo — de la recherche à l'UI finale"
            )}
            timeline={pick(locale, "Client engagement", "Mission client")}
            type={pick(locale, "Client project · Pommy", "Projet client · Pommy")}
            platform="iOS & Android (React Native)"
            status={pick(locale, "Delivered to development", "Livré au développement")}
            links={[
              { kind: "prototype", href: "#" /* TODO: shareable prototype, if client permits */ },
            ]}
          />
          <p className="text-ink-muted leading-relaxed mt-2">
            {pick(
              locale,
              "HomeLink is a mobile application that transforms any home into a smart home. It unifies three distinct experiences — buying connected devices, installing them, and controlling them daily — into a single, coherent product. I led the full design process solo, from initial UX research to the final UI delivered to development. Screens are published with the client's permission.",
              "HomeLink est une application mobile qui transforme n'importe quelle maison en maison connectée. Elle unifie trois expériences distinctes — acheter des appareils connectés, les installer et les contrôler au quotidien — en un produit unique et cohérent. J'ai mené seul tout le processus de design, de la recherche UX initiale jusqu'à l'UI finale livrée au développement. Les écrans sont publiés avec l'autorisation du client."
            )}
          </p>
        </section>

        {/* 02 · The Challenge */}
        <section className="flex flex-col gap-5">
          <Step n="02">{pick(locale, "The Challenge", "Le défi")}</Step>
          <p className="text-ink-muted leading-relaxed">
            {pick(
              locale,
              "The core UX problem: how do you merge three fundamentally different mental models — e-commerce, technical setup, and home automation — into one experience that feels natural?",
              "Le problème UX central : comment fusionner trois modèles mentaux fondamentalement différents — e-commerce, configuration technique et domotique — en une seule expérience qui paraisse naturelle ?"
            )}
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-2">
            {challenge.map((item) => (
              <div key={item.title.en} className="border border-line rounded-2xl p-5">
                <IconChip icon={item.icon} />
                <p className="font-bold text-ink mb-1">{t(item.title)}</p>
                <p className="text-ink-muted text-sm">{t(item.desc)}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl mt-2">
            <p className="font-bold text-amber-900 mb-1">
              {pick(locale, "Main UX Risk", "Principal risque UX")}
            </p>
            <p className="text-amber-800 text-sm">
              {pick(
                locale,
                "Users could feel lost switching between a shopping logic and a home control logic. The challenge was to create a seamless journey across these three modes without jarring transitions.",
                "Les utilisateurs pourraient se sentir perdus en passant d'une logique d'achat à une logique de contrôle domestique. Le défi était de créer un parcours fluide entre ces trois modes, sans transitions brusques."
              )}
            </p>
          </div>
        </section>

        {/* 03 · UX Research */}
        <section className="flex flex-col gap-5">
          <Step n="03">{pick(locale, "UX Research & User Persona", "Recherche UX & persona")}</Step>
          <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-ink-muted leading-relaxed">
                {pick(
                  locale,
                  "I defined the primary persona to guide every design decision throughout the project.",
                  "J'ai défini le persona principal pour guider chaque décision de design tout au long du projet."
                )}
              </p>
              <div className="bg-brand-tint rounded-2xl p-6 border border-brand/15">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full grad-bg flex items-center justify-center text-white">
                    <LuUser className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-ink">
                      {pick(locale, "Primary User", "Utilisateur principal")}
                    </p>
                    <p className="text-ink-subtle text-sm">
                      {pick(
                        locale,
                        "Homeowner or head of household · 30–50 years old",
                        "Propriétaire ou chef de foyer · 30 à 50 ans"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="font-semibold text-ink text-sm mb-1">
                      {pick(locale, "Motivations", "Motivations")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pick(
                        locale,
                        ["Secure the home", "Improve comfort", "Save energy"],
                        ["Sécuriser la maison", "Améliorer le confort", "Économiser l'énergie"]
                      ).map((m) => (
                        <span
                          key={m}
                          className="bg-white text-ink-muted text-xs px-3 py-1 rounded-full border border-brand/15"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm mb-1">
                      {pick(locale, "Frustrations", "Frustrations")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pick(
                        locale,
                        [
                          "Complex installation",
                          "Unclear app interface",
                          "Automations too hard to set up",
                        ],
                        [
                          "Installation complexe",
                          "Interface de l'app peu claire",
                          "Automatisations trop difficiles à configurer",
                        ]
                      ).map((f) => (
                        <span
                          key={f}
                          className="bg-white text-red-600 text-xs px-3 py-1 rounded-full border border-red-200"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/Project_Images/Details/HomeLink/personaVisuel.png"
                alt={pick(
                  locale,
                  "Primary persona for HomeLink — a homeowner aged 30 to 50",
                  "Persona principal de HomeLink — un propriétaire de 30 à 50 ans"
                )}
                width={280}
                height={320}
                sizes="(max-width: 640px) 80vw, 280px"
                className="w-full max-w-[280px] h-auto rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* 04 · User Journey */}
        <section className="flex flex-col gap-5">
          <Step n="04">
            {pick(locale, "User Journey & Information Architecture", "Parcours utilisateur & architecture de l'information")}
          </Step>
          <p className="text-ink-muted leading-relaxed">
            {pick(
              locale,
              "I structured the entire experience around a logical four-step cycle that mirrors how users naturally think about their smart home:",
              "J'ai structuré toute l'expérience autour d'un cycle logique en quatre étapes qui reflète la façon dont les utilisateurs pensent naturellement leur maison connectée :"
            )}
          </p>
          <ol className="flex flex-wrap md:flex-nowrap items-stretch gap-3 mt-2">
            {journey.map((item, i, arr) => (
              <React.Fragment key={item.step}>
                <li className="flex-1 bg-surface-alt rounded-2xl p-5 text-center">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand mb-2">
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <p className="text-xs text-ink-subtle font-bold">{item.step}</p>
                  <p className="font-bold text-ink">{t(item.label)}</p>
                  <p className="text-ink-muted text-xs mt-1">{t(item.sub)}</p>
                </li>
                {i < arr.length - 1 && (
                  <li
                    aria-hidden="true"
                    className="hidden md:flex items-center text-ink-subtle"
                  >
                    <LuArrowRight className="w-5 h-5" />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ol>
          <div className="mt-4">
            <p className="font-semibold text-ink mb-3">
              {pick(
                locale,
                "App Architecture — 5 main sections:",
                "Architecture de l'app — 5 sections principales :"
              )}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {architecture.map((s) => (
                <div
                  key={s.name.en}
                  className="bg-white border border-line rounded-xl p-3 text-center shadow-sm"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-tint text-brand mb-1">
                    <s.icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <p className="font-bold text-ink text-sm">{t(s.name)}</p>
                  <p className="text-ink-subtle text-xs">{t(s.sub)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Image
              src="/images/Project_Images/Details/HomeLink/sitemap.png"
              alt={pick(
                locale,
                "HomeLink information architecture sitemap",
                "Plan de l'architecture de l'information de HomeLink"
              )}
              width={700}
              height={300}
              sizes="(max-width: 768px) 100vw, 700px"
              className="w-full max-w-[700px] h-auto rounded-2xl"
            />
          </div>
        </section>

        {/* 05 · Design System */}
        <section className="flex flex-col gap-5">
          <Step n="05">{pick(locale, "Design Principles & System", "Principes & système de design")}</Step>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.title.en} className="bg-surface-alt rounded-2xl p-5">
                <p className="font-bold text-ink text-lg mb-2">{t(p.title)}</p>
                <p className="text-ink-muted text-sm leading-relaxed">{t(p.desc)}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Image
              src="/images/Project_Images/Details/HomeLink/designSystem.png"
              alt={pick(
                locale,
                "HomeLink design system — colours, typography and components",
                "Design system HomeLink — couleurs, typographie et composants"
              )}
              width={700}
              height={280}
              sizes="(max-width: 768px) 100vw, 700px"
              className="w-full max-w-[700px] h-auto rounded-2xl"
            />
          </div>
        </section>

        {/* 06 · Key Screens */}
        <section className="flex flex-col gap-5">
          <Step n="06">{pick(locale, "Key Screens", "Écrans clés")}</Step>

          <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">
            <div className="flex-1">
              <h3 className="font-bold text-ink text-xl mb-2">
                {pick(locale, "Dashboard — Home Control Hub", "Tableau de bord — hub de contrôle")}
              </h3>
              <p className="text-ink-muted leading-relaxed">
                {pick(
                  locale,
                  "The Dashboard is the heart of HomeLink. At a glance, users see the status of all devices (online/offline, battery low, security alert), control rooms, and trigger their most-used automations. Every critical state is surfaced immediately — no digging required.",
                  "Le tableau de bord est le cœur de HomeLink. D'un coup d'œil, l'utilisateur voit le statut de tous les appareils (en ligne/hors ligne, batterie faible, alerte de sécurité), contrôle les pièces et déclenche ses automatisations les plus utilisées. Chaque état critique est remonté immédiatement — aucune recherche nécessaire."
                )}
              </p>
            </div>
            <div className="flex gap-4">
              <Image
                src="/images/Project_Images/Details/HomeLink/dashboardPage.png"
                alt={pick(locale, "HomeLink dashboard screen", "Écran tableau de bord HomeLink")}
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
              <Image
                src="/images/Project_Images/Details/HomeLink/detailDevicesPage.png"
                alt={pick(locale, "HomeLink device detail screen", "Écran détail appareil HomeLink")}
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-wrap-reverse md:flex-nowrap gap-8 items-start mt-6">
            <div className="flex gap-4">
              <Image
                src="/images/Project_Images/Details/HomeLink/productsPage.png"
                alt={pick(locale, "HomeLink store product list screen", "Écran liste produits de la boutique HomeLink")}
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
              <Image
                src="/images/Project_Images/Details/HomeLink/productDetailPage.png"
                alt={pick(locale, "HomeLink store product detail screen", "Écran détail produit de la boutique HomeLink")}
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-ink text-xl mb-2">
                {pick(locale, "Store — Buy Connected Devices", "Boutique — acheter des appareils connectés")}
              </h3>
              <p className="text-ink-muted leading-relaxed">
                {pick(
                  locale,
                  "The Store allows users to discover and purchase compatible connected devices directly in the app. After purchase, the app guides them seamlessly into the Onboarding flow — the transition is invisible and intentional.",
                  "La boutique permet de découvrir et d'acheter des appareils connectés compatibles directement dans l'app. Après l'achat, l'app guide sans couture vers le parcours d'onboarding — la transition est invisible et intentionnelle."
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-8 items-start mt-6">
            <div className="flex-1">
              <h3 className="font-bold text-ink text-xl mb-2">
                {pick(locale, "Onboarding — Guided Device Setup", "Onboarding — configuration guidée")}
              </h3>
              <p className="text-ink-muted leading-relaxed">
                {pick(
                  locale,
                  "Installing a connected device is typically a pain point for non-technical users. I designed a step-by-step onboarding flow with clear progress indicators, visual instructions, and contextual help — making a complex technical process feel as simple as following a recipe.",
                  "Installer un appareil connecté est souvent un point de friction pour les utilisateurs non techniques. J'ai conçu un parcours d'onboarding étape par étape avec des indicateurs de progression clairs, des instructions visuelles et une aide contextuelle — rendant un processus technique complexe aussi simple qu'une recette de cuisine."
                )}
              </p>
            </div>
            <div className="flex gap-4">
              <Image
                src="/images/Project_Images/Details/HomeLink/onBoardingPage.png"
                alt={pick(locale, "HomeLink onboarding step one", "Étape 1 de l'onboarding HomeLink")}
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
              <Image
                src="/images/Project_Images/Details/HomeLink/onBoardingTwo.png"
                alt={pick(locale, "HomeLink onboarding step two", "Étape 2 de l'onboarding HomeLink")}
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-wrap-reverse md:flex-nowrap gap-8 items-start mt-6">
            <div className="flex gap-4">
              <Image
                src="/images/Project_Images/Details/HomeLink/automatisationPage.png"
                alt={pick(locale, "HomeLink automations list screen", "Écran liste des automatisations HomeLink")}
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
              <Image
                src="/images/Project_Images/Details/HomeLink/automatisationStep.png"
                alt={pick(locale, "HomeLink automation creation step", "Étape de création d'automatisation HomeLink")}
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-ink text-xl mb-2">
                {pick(locale, "Scenarios — Smart Automations", "Scénarios — automatisations intelligentes")}
              </h3>
              <p className="text-ink-muted leading-relaxed">
                {pick(
                  locale,
                  "Automations are the most powerful — and most intimidating — feature of any smart home app. I broke the creation flow into small, digestible steps using plain language and visual cues, so users build confident automations without needing technical knowledge.",
                  "Les automatisations sont la fonctionnalité la plus puissante — et la plus intimidante — de toute app domotique. J'ai découpé le parcours de création en petites étapes digestes, avec un langage simple et des repères visuels, pour que chacun crée des automatisations en confiance sans connaissance technique."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* 07 · System States */}
        <section className="flex flex-col gap-5">
          <Step n="07">{pick(locale, "System State Management", "Gestion des états système")}</Step>
          <p className="text-ink-muted">
            {pick(
              locale,
              "A smart home app must always communicate what's happening. I designed clear, accessible states for all critical device conditions:",
              "Une app domotique doit toujours communiquer ce qui se passe. J'ai conçu des états clairs et accessibles pour toutes les conditions critiques des appareils :"
            )}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {states.map((s) => (
              <div
                key={s.state.en}
                className={`${s.color} border rounded-2xl p-4 text-center`}
              >
                <s.icon className="w-7 h-7 mx-auto mb-2" aria-hidden="true" />
                <p className="font-semibold text-ink text-sm">{t(s.state)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 07b · Outcomes */}
        <section className="flex flex-col gap-5">
          <Step n="08">{pick(locale, "Outcomes", "Résultats")}</Step>
          <Outcomes
            locale={locale}
            criteria={pick(
              locale,
              [
                "Key daily actions reachable in 1–2 taps from the Dashboard.",
                "A single design system covering commerce, onboarding and control — no visual seams between the three modes.",
                "Automation creation broken into steps a non-technical user can complete without help.",
                "Every critical device state (offline, low battery, alert) surfaced on the Dashboard, not buried.",
              ],
              [
                "Actions quotidiennes clés accessibles en 1 à 2 taps depuis le tableau de bord.",
                "Un seul design system couvrant commerce, onboarding et contrôle — aucune couture visuelle entre les trois modes.",
                "Création d'automatisation découpée en étapes qu'un non-technicien peut réaliser sans aide.",
                "Chaque état critique d'appareil (hors ligne, batterie faible, alerte) remonté sur le tableau de bord, jamais enfoui.",
              ]
            )}
            tested={pick(
              locale,
              [
                "Persona-driven walkthroughs of the four-step journey (discover → install → control → automate).",
                "Design-system audit for consistency across all 5 sections and 20+ screens.",
                "Final UI delivered to the development team as the build spec.",
              ],
              [
                "Parcours guidés par le persona sur le cycle en quatre étapes (découvrir → installer → contrôler → automatiser).",
                "Audit du design system pour la cohérence sur les 5 sections et 20+ écrans.",
                "UI finale livrée à l'équipe de développement comme spécification de build.",
              ]
            )}
            next={pick(
              locale,
              "Post-launch usability testing on the onboarding and automation flows, and analytics on activation (first device connected) and automation adoption.",
              "Tests d'utilisabilité post-lancement sur les parcours d'onboarding et d'automatisation, avec suivi analytics de l'activation (premier appareil connecté) et de l'adoption des automatisations."
            )}
          />
        </section>

        {/* 09 · Reflections */}
        <section className="flex flex-col gap-5">
          <Step n="09">{pick(locale, "Reflections & Learnings", "Réflexions & apprentissages")}</Step>
          <p className="text-ink-muted leading-relaxed">
            {pick(
              locale,
              "HomeLink was the most complex product I've designed to date — not because of the visual challenge, but because of the mental model challenge. Merging commerce, installation, and control into one coherent experience required constant user empathy and ruthless simplification. Every screen had to earn its place.",
              "HomeLink est le produit le plus complexe que j'aie conçu à ce jour — non pas à cause du défi visuel, mais du défi de modèle mental. Fusionner commerce, installation et contrôle en une expérience cohérente a exigé une empathie constante et une simplification sans concession. Chaque écran devait mériter sa place."
            )}
          </p>
          <p className="text-ink-muted leading-relaxed">
            {pick(
              locale,
              "Working solo end-to-end also sharpened my ability to make fast, confident decisions with limited feedback loops — a skill I now consider one of my core strengths for remote work.",
              "Travailler seul de bout en bout a aussi affiné ma capacité à prendre des décisions rapides et sûres avec des boucles de feedback limitées — une compétence que je considère désormais comme l'une de mes forces clés pour le travail à distance."
            )}
          </p>
          <div className="rounded-r-2xl border-l-4 border-brand bg-brand-tint p-5">
            <p className="font-bold text-ink mb-2">
              {pick(locale, "Key takeaway", "Ce qu'il faut retenir")}
            </p>
            <p className="text-brand-strong italic">
              {pick(
                locale,
                "“The best product experiences feel like they were always meant to work exactly that way. HomeLink taught me that getting there requires designing for the user's mental model, not the product's technical structure.”",
                "«Les meilleures expériences produit donnent l'impression d'avoir toujours dû fonctionner exactement ainsi. HomeLink m'a appris qu'y parvenir demande de designer pour le modèle mental de l'utilisateur, pas pour la structure technique du produit.»"
              )}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
