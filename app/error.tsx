"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { pick, type Locale } from "@/lib/locale";

function readLocale(): Locale {
  if (typeof document === "undefined") return "fr";
  const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=(en|fr)/);
  return match?.[1] === "en" ? "en" : "fr";
}

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [locale, setLocale] = useState<Locale>("fr");

  useEffect(() => {
    setLocale(readLocale());
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center bg-surface">
      <p className="section-tag">{pick(locale, "Error", "Erreur")}</p>
      <h1 className="text-4xl md:text-5xl font-bold text-ink">
        {pick(locale, "Something went wrong", "Une erreur est survenue")}
      </h1>
      <p className="text-ink-muted max-w-md">
        {pick(
          locale,
          "Please try again, or head back to the homepage.",
          "Réessayez, ou retournez à l'accueil."
        )}
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        <button
          type="button"
          onClick={reset}
          className="grad-bg text-white font-semibold px-7 py-3.5 rounded-full text-sm"
        >
          {pick(locale, "Try again", "Réessayer")}
        </button>
        <Link
          href="/"
          className="text-sm font-semibold text-ink border border-ink/15 px-7 py-3.5 rounded-full hover:bg-surface-alt transition-colors"
        >
          {pick(locale, "Back to home", "Retour à l'accueil")}
        </Link>
      </div>
    </div>
  );
}
