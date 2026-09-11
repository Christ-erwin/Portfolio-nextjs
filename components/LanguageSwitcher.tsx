"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LOCALE_COOKIE, type Locale } from "@/lib/locale";

const YEAR = 60 * 60 * 24 * 365;

export default function LanguageSwitcher({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${YEAR}; SameSite=Lax`;
    startTransition(() => router.refresh());
  };

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-line bg-surface p-0.5 text-xs font-bold transition-opacity ${
        isPending ? "opacity-60" : ""
      } ${className}`}
    >
      {(["fr", "en"] as Locale[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-pressed={locale === l}
          aria-label={l === "fr" ? "Passer en français" : "Switch to English"}
          disabled={isPending}
          className={`px-2.5 py-1.5 rounded-full transition-colors ${
            locale === l
              ? "bg-ink text-white"
              : "text-ink-subtle hover:text-ink"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
