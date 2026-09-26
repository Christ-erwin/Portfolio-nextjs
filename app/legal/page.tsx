import type { Metadata } from "next";
import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, "Privacy & Legal", "Confidentialité & mentions légales"),
    description: pick(
      locale,
      "What data this site collects, why, and how to exercise your rights.",
      "Quelles données ce site collecte, pourquoi, et comment exercer vos droits."
    ),
    robots: { index: false, follow: true },
  };
}

export default async function LegalPage() {
  const locale = await getLocale();
  const t = (en: string, fr: string) => pick(locale, en, fr);

  return (
    <div className="flex flex-col bg-surface">
      <section className="w-full px-6 pt-32 pb-16 bg-surface-alt">
        <div className="max-w-3xl mx-auto">
          <p className="section-tag">{t("Legal", "Mentions légales")}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink leading-[1.1]">
            {t("Privacy & Legal Notice", "Confidentialité & mentions légales")}
          </h1>
          <p className="text-ink-muted mt-4 text-lg leading-relaxed">
            {t(
              "Short, plain-language version: this is a personal portfolio. It collects the minimum needed to reply to you, and nothing to track or sell.",
              "Version courte, en langage clair : ce site est un portfolio personnel. Il ne collecte que le minimum nécessaire pour vous répondre — rien n'est suivi ni revendu."
            )}
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-12 text-ink-muted leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-ink mb-3">
              {t("Who runs this site", "Qui édite ce site")}
            </h2>
            <p>
              {t(
                "This site is published by Christ Erwin Fram, an individual based in Abidjan, Côte d'Ivoire.",
                "Ce site est édité par Christ Erwin Fram, une personne physique basée à Abidjan, Côte d'Ivoire."
              )}{" "}
              {t("Contact:", "Contact :")}{" "}
              <a
                href="mailto:framchristerwintl@gmail.com"
                className="font-semibold text-brand-strong hover:underline"
              >
                framchristerwintl@gmail.com
              </a>
              . {t("Hosted by Vercel Inc.", "Hébergé par Vercel Inc.")}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-3">
              {t("What data is collected", "Quelles données sont collectées")}
            </h2>
            <ul className="flex flex-col gap-2 list-disc pl-5">
              <li>
                {t(
                  "Contact form: the name, email address, subject and message you choose to submit — used only to reply to you, sent via the EmailJS service to my inbox.",
                  "Formulaire de contact : le nom, l'e-mail, l'objet et le message que vous soumettez volontairement — utilisés uniquement pour vous répondre, envoyés via le service EmailJS vers ma boîte mail."
                )}
              </li>
              <li>
                {t(
                  "Anonymous, cookieless analytics (Vercel Analytics): aggregate page-view counts and general location/device category. No individual profile is built, no cross-site tracking.",
                  "Analytics anonymes, sans cookies (Vercel Analytics) : nombre de vues agrégé et catégorie générale d'appareil/localisation. Aucun profil individuel n'est construit, aucun suivi inter-sites."
                )}
              </li>
              <li>
                {t(
                  "One functional cookie (NEXT_LOCALE): remembers whether you chose French or English. Strictly necessary for the site to work as you set it — no consent banner is shown because this cookie isn't used for tracking or advertising.",
                  "Un cookie fonctionnel (NEXT_LOCALE) : mémorise si vous avez choisi le français ou l'anglais. Strictement nécessaire au fonctionnement du site — aucun bandeau de consentement n'est affiché car ce cookie ne sert ni au suivi ni à la publicité."
                )}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-3">
              {t("How long it's kept", "Durée de conservation")}
            </h2>
            <p>
              {t(
                "Contact-form messages are kept in my inbox as long as needed to handle the conversation, then deleted. The language cookie expires after 1 year or when you clear your browser data.",
                "Les messages du formulaire de contact sont conservés dans ma boîte mail le temps nécessaire pour traiter l'échange, puis supprimés. Le cookie de langue expire après 1 an ou dès que vous effacez les données de votre navigateur."
              )}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-3">
              {t("Your rights", "Vos droits")}
            </h2>
            <p>
              {t(
                "If you're in the EU/EEA or another jurisdiction with data-protection law, you can ask to access, correct, or delete any personal data you've sent me — just email the address above.",
                "Si vous êtes dans l'UE/EEE ou une autre juridiction disposant d'une loi sur la protection des données, vous pouvez demander l'accès, la correction ou la suppression de toute donnée personnelle que vous m'avez transmise — il suffit d'écrire à l'adresse ci-dessus."
              )}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-3">
              {t("Third parties", "Tiers")}
            </h2>
            <p>
              {t(
                "This site uses Vercel (hosting & analytics), EmailJS (contact-form delivery), and Cloudinary (image hosting). None of them receive more than what's described above.",
                "Ce site utilise Vercel (hébergement & analytics), EmailJS (envoi du formulaire de contact) et Cloudinary (hébergement d'images). Aucun d'eux ne reçoit plus que ce qui est décrit ci-dessus."
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
