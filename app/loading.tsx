import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

export default async function Loading() {
  const locale = await getLocale();

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div
        role="status"
        aria-label={pick(locale, "Loading", "Chargement")}
        className="h-10 w-10 rounded-full border-[3px] border-line border-t-brand animate-spin motion-reduce:animate-none"
      />
    </div>
  );
}
