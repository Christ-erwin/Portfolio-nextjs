import Link from "next/link";
import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

export default async function NotFound() {
  const locale = await getLocale();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center bg-surface">
      <p className="section-tag">{pick(locale, "Error 404", "Erreur 404")}</p>
      <h1 className="text-4xl md:text-5xl font-bold text-ink">
        {pick(locale, "This page ", "Cette page ")}
        <span className="grad-text">
          {pick(locale, "doesn't exist", "n'existe pas")}
        </span>
      </h1>
      <p className="text-ink-muted max-w-md">
        {pick(
          locale,
          "The link may be broken, or the page may have been moved.",
          "Le lien est peut-être rompu, ou la page a été déplacée."
        )}
      </p>
      <Link
        href="/"
        className="grad-bg text-white font-semibold px-7 py-3.5 rounded-full text-sm"
      >
        {pick(locale, "Back to home", "Retour à l'accueil")}
      </Link>
    </div>
  );
}
