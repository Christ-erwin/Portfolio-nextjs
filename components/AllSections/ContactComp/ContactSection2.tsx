"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { LuMail, LuLinkedin, LuPhone, LuArrowRight } from "react-icons/lu";
import { pick, type Locale } from "@/lib/locale";

type Errors = Partial<Record<"user_name" | "user_email" | "subject" | "message", string>>;

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const fieldBase =
  "w-full bg-surface-alt border border-line rounded-xl px-4 py-3.5 text-ink placeholder-ink-subtle/70 text-sm transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/40";

function validate(data: FormData, locale: Locale): Errors {
  const errors: Errors = {};
  const name = String(data.get("user_name") ?? "").trim();
  const email = String(data.get("user_email") ?? "").trim();
  const subject = String(data.get("subject") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name)
    errors.user_name = pick(locale, "Please enter your name.", "Merci d'indiquer votre nom.");
  if (!email)
    errors.user_email = pick(
      locale,
      "Please enter your email address.",
      "Merci d'indiquer votre adresse e-mail."
    );
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.user_email = pick(
      locale,
      "Please enter a valid email address.",
      "Merci d'indiquer une adresse e-mail valide."
    );
  if (!subject)
    errors.subject = pick(locale, "Please add a subject.", "Merci d'ajouter un objet.");
  if (!message)
    errors.message = pick(
      locale,
      "Please tell me a bit about your project.",
      "Merci de me parler un peu de votre projet."
    );
  else if (message.length < 10)
    errors.message = pick(
      locale,
      "That message looks a little short — add a few more details.",
      "Ce message semble un peu court — ajoutez quelques détails."
    );

  return errors;
}

export default function ContactSection2({ locale }: { locale: Locale }) {
  const form = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const clearError = (name: keyof Errors) =>
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const found = validate(new FormData(form.current), locale);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error(
        pick(
          locale,
          "The contact form isn't configured yet. Please email me directly.",
          "Le formulaire de contact n'est pas encore configuré. Merci de m'écrire directement par e-mail."
        )
      );
      return;
    }

    try {
      setSubmitting(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      toast.success(
        pick(
          locale,
          "Message sent — I'll get back to you within 24 hours.",
          "Message envoyé — je reviens vers vous sous 24 heures."
        )
      );
      form.current.reset();
    } catch {
      toast.error(
        pick(
          locale,
          "Something went wrong. Please try again or email me directly.",
          "Une erreur s'est produite. Réessayez ou écrivez-moi directement par e-mail."
        )
      );
    } finally {
      setSubmitting(false);
    }
  };

  const errorEntries = Object.entries(errors) as [keyof Errors, string][];

  return (
    <section className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 items-start">
        {/* Left — form */}
        <div className="md:col-span-3">
          <h2 className="text-2xl font-bold text-ink mb-6">
            {pick(locale, "Send a message", "Envoyer un message")}
          </h2>

          {errorEntries.length > 0 && (
            <div
              ref={summaryRef}
              tabIndex={-1}
              role="alert"
              aria-labelledby="form-error-title"
              className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4"
            >
              <p id="form-error-title" className="text-sm font-semibold text-red-800">
                {pick(
                  locale,
                  "There is a problem with your submission",
                  "Il y a un problème avec votre envoi"
                )}
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-red-700">
                {errorEntries.map(([key, msg]) => (
                  <li key={key}>
                    <a href={`#${key}`} className="underline">
                      {msg}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <form
            ref={form}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-ink mb-1.5"
                >
                  {pick(locale, "Name", "Nom")}
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  autoComplete="name"
                  placeholder={pick(locale, "Your name", "Votre nom")}
                  aria-invalid={!!errors.user_name}
                  aria-describedby={errors.user_name ? "user_name-error" : undefined}
                  onInput={() => clearError("user_name")}
                  className={fieldBase}
                />
                {errors.user_name && (
                  <p id="user_name-error" className="mt-1.5 text-xs text-red-600">
                    {errors.user_name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-ink mb-1.5"
                >
                  Email
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.user_email}
                  aria-describedby={
                    errors.user_email ? "user_email-error" : undefined
                  }
                  onInput={() => clearError("user_email")}
                  className={fieldBase}
                />
                {errors.user_email && (
                  <p id="user_email-error" className="mt-1.5 text-xs text-red-600">
                    {errors.user_email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-ink mb-1.5"
              >
                {pick(locale, "Subject", "Objet")}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder={pick(
                  locale,
                  "e.g. Remote contract, freelance project",
                  "ex. Contrat remote, mission freelance"
                )}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                onInput={() => clearError("subject")}
                className={fieldBase}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1.5 text-xs text-red-600">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ink mb-1.5"
              >
                {pick(locale, "Message", "Message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder={pick(
                  locale,
                  "Tell me about your project, timeline, and budget…",
                  "Parlez-moi de votre projet, du calendrier et du budget…"
                )}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                onInput={() => clearError("message")}
                className={`${fieldBase} resize-y`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 grad-bg text-white font-semibold py-4 rounded-xl text-sm transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin motion-reduce:animate-none"
                  />
                  {pick(locale, "Sending…", "Envoi…")}
                </>
              ) : (
                <>
                  {pick(locale, "Send message", "Envoyer le message")}{" "}
                  <LuArrowRight className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right — info */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div>
            <p className="section-tag">{pick(locale, "Direct contact", "Contact direct")}</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:framchristerwintl@gmail.com"
                className="flex items-center gap-3 bg-surface-alt rounded-xl px-4 py-3.5 hover:bg-surface-sunken transition-colors"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-tint text-brand flex-shrink-0">
                  <LuMail className="w-4 h-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-ink-subtle">Email</span>
                  <span className="block text-sm font-medium text-ink">
                    framchristerwintl@gmail.com
                  </span>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/christ-erwin-fram-696a69257/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-surface-alt rounded-xl px-4 py-3.5 hover:bg-surface-sunken transition-colors"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-tint text-brand flex-shrink-0">
                  <LuLinkedin className="w-4 h-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-ink-subtle">LinkedIn</span>
                  <span className="block text-sm font-medium text-ink">
                    Christ Erwin Fram
                  </span>
                </span>
                <span className="sr-only">
                  ({pick(locale, "opens in a new tab", "ouvre un nouvel onglet")})
                </span>
              </a>
              <a
                href="tel:+2250153220544"
                className="flex items-center gap-3 bg-surface-alt rounded-xl px-4 py-3.5 hover:bg-surface-sunken transition-colors"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-tint text-brand flex-shrink-0">
                  <LuPhone className="w-4 h-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-ink-subtle">
                    {pick(locale, "Phone", "Téléphone")}
                  </span>
                  <span className="block text-sm font-medium text-ink">
                    +225 01 53 22 05 44
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="bg-black rounded-2xl p-6">
            <p className="text-white font-semibold mb-1">
              {pick(locale, "How I work", "Ma façon de travailler")}
            </p>
            <ul className="text-white/70 text-sm flex flex-col gap-1.5">
              <li>
                {pick(
                  locale,
                  "Reply within 24 hours on business days",
                  "Réponse sous 24 heures les jours ouvrés"
                )}
              </li>
              <li>
                {pick(
                  locale,
                  "Based in GMT (UTC+0) — async-first, overlap with EU & US",
                  "Basé en GMT (UTC+0) — async-first, chevauchement avec l'Europe & les US"
                )}
              </li>
              <li>Figma-native · Notion, Slack, Linear, Jira</li>
            </ul>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 motion-safe:animate-pulse" />
              <span className="text-green-300 text-xs font-medium">
                {pick(locale, "Available for new projects", "Disponible pour de nouveaux projets")}
              </span>
            </div>
          </div>

          <div className="bg-surface-alt rounded-2xl p-5">
            <p className="font-semibold text-ink mb-3 text-sm">
              {pick(locale, "I'm open to", "Je suis ouvert à")}
            </p>
            <ul className="flex flex-col gap-1.5">
              {[
                pick(
                  locale,
                  "Remote contracts (part or full time)",
                  "Contrats remote (temps partiel ou plein)"
                ),
                pick(
                  locale,
                  "Freelance missions (short or long term)",
                  "Missions freelance (courtes ou longues)"
                ),
                pick(locale, "Full-time remote roles", "Postes remote à temps plein"),
                pick(locale, "Collaborations with agencies", "Collaborations avec des agences"),
              ].map((t) => (
                <li key={t} className="text-ink-muted text-xs">
                  → {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
