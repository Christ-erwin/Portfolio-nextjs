import React from "react";
import { FcGoogle } from "react-icons/fc";
import { LuBadgeCheck, LuExternalLink } from "react-icons/lu";

const COURSES = [
  "Foundations of UX Design",
  "Empathize, Define & Ideate",
  "Wireframes & Low-Fidelity Prototypes",
  "UX Research & Testing Early Concepts",
  "High-Fidelity Designs & Prototypes in Figma",
  "Dynamic UI for Websites",
  "UX for Social Good & Job Prep",
  "Accelerate Your Job Search with AI",
];

const VERIFY_URL =
  "https://coursera.org/verify/professional-cert/B11D2UKU5EYC";

/** Verified Google UX Design Professional Certificate. */
export default function CredentialCard({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 md:p-7">
      <div className="flex items-start gap-4">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-line bg-white flex-shrink-0">
          <FcGoogle className="w-6 h-6" aria-hidden="true" />
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="font-bold text-ink">
              Google UX Design Professional Certificate
            </h3>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-strong">
              <LuBadgeCheck className="w-3.5 h-3.5" aria-hidden="true" />
              Verified
            </span>
          </div>

          <p className="text-sm text-ink-subtle mt-0.5">
            Google · Coursera · 8 courses · Completed 2026
          </p>

          <p className="text-sm text-ink-muted mt-3 leading-relaxed">
            An 8-course program covering the full design process end to end —
            user empathy, problem definition, ideation, wireframing, prototyping,
            usability testing, and high-fidelity design in Figma.
          </p>

          {!compact && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {COURSES.map((c) => (
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
            Verify credential
            <LuExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
