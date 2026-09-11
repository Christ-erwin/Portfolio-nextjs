import Image from "next/image";
import React from "react";
import { LuExternalLink, LuGithub, LuFigma } from "react-icons/lu";

/* ------------------------------------------------------------------ */
/*  Snapshot — the scannable header every case study opens with        */
/* ------------------------------------------------------------------ */
export type ProjectLink = {
  kind: "prototype" | "repo" | "live";
  href: string;
  label?: string;
};

const linkMeta = {
  prototype: { icon: LuFigma, text: "Interactive prototype" },
  repo: { icon: LuGithub, text: "Source code" },
  live: { icon: LuExternalLink, text: "Live product" },
} as const;

export function Snapshot({
  role,
  timeline,
  type,
  platform,
  status,
  links = [],
}: {
  role: string;
  timeline: string;
  type: string;
  platform: string;
  status: string;
  links?: ProjectLink[];
}) {
  const rows: [string, string][] = [
    ["Role", role],
    ["Timeline", timeline],
    ["Type", type],
    ["Platform", platform],
    ["Status", status],
  ];
  const ready = (l: ProjectLink) => Boolean(l.href) && !l.href.startsWith("#");

  return (
    <div className="rounded-2xl border border-line bg-surface-alt p-6">
      <dl className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-5">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt className="text-xs text-ink-subtle font-semibold uppercase tracking-wider mb-1">
              {k}
            </dt>
            <dd className="text-sm font-semibold text-ink">{v}</dd>
          </div>
        ))}
      </dl>
      {links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3 border-t border-line pt-5">
          {links.map((l) => {
            const m = linkMeta[l.kind];
            const Icon = m.icon;
            if (!ready(l)) {
              return (
                <span
                  key={l.kind}
                  className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-4 py-2 text-sm font-medium text-ink-subtle"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {(l.label ?? m.text)} — on request
                </span>
              );
            }
            return (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-surface border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-brand/40 transition-colors"
              >
                <Icon className="w-4 h-4 text-brand" aria-hidden="true" />
                {l.label ?? m.text}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Outcomes — measurable targets + how the design was pressure-tested */
/* ------------------------------------------------------------------ */
export function Outcomes({
  criteria,
  tested,
  next,
}: {
  criteria: string[];
  tested: string[];
  next?: string;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-line p-6">
        <p className="font-semibold text-ink mb-3">
          Success criteria I designed against
        </p>
        <ul className="flex flex-col gap-2">
          {criteria.map((c) => (
            <li
              key={c}
              className="text-sm text-ink-muted leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-line p-6">
        <p className="font-semibold text-ink mb-3">
          How I pressure-tested the design
        </p>
        <ul className="flex flex-col gap-2">
          {tested.map((t) => (
            <li
              key={t}
              className="text-sm text-ink-muted leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand"
            >
              {t}
            </li>
          ))}
        </ul>
        {next && (
          <p className="mt-4 text-sm text-ink-subtle border-t border-line pt-4">
            <span className="font-semibold text-ink">Next step — </span>
            {next}
          </p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Primitives                                                         */
/* ------------------------------------------------------------------ */
export function Figure({
  src,
  alt,
  w = 280,
  ratio = 2,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  w?: number;
  ratio?: number;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`m-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={w}
        height={Math.round(w * ratio)}
        sizes={`(max-width: 640px) 45vw, ${w}px`}
        className="rounded-2xl w-full h-auto"
      />
      {caption && (
        <figcaption className="text-center text-xs text-ink-subtle mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function StepTitle({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="step-badge" aria-hidden="true">
        {n}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-ink">{title}</h2>
    </div>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-r-2xl border-l-4 border-brand bg-brand-tint p-5">
      <p className="text-brand-strong text-sm italic font-medium">{children}</p>
    </div>
  );
}

export function ConstraintList({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-3">
      {items.map((c) => (
        <li
          key={c}
          className="rounded-xl border border-line bg-surface-alt p-4 text-sm text-ink-muted leading-relaxed"
        >
          {c}
        </li>
      ))}
    </ul>
  );
}
