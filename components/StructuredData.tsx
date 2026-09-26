import { SITE_URL } from "@/lib/site";

/**
 * JSON-LD Person schema — lets Google show a richer result (name, role,
 * profile links) for the site owner. No visual output, no client JS.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Christ Erwin Fram",
    alternateName: "Fram Kablan Christ-Erwin Lionel",
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    jobTitle: "UI/UX Designer & Full-Stack Developer",
    description:
      "UI/UX Designer & Full-Stack Web & Mobile Developer based in Abidjan, Côte d'Ivoire.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abidjan",
      addressCountry: "CI",
    },
    email: "mailto:framchristerwintl@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/christ-erwin-fram-696a69257/",
      "https://www.behance.net/christerwinfram",
      "https://dribbble.com/erwin270",
      "https://github.com/Christ-erwin",
    ],
    knowsAbout: [
      "UI/UX Design",
      "Product Design",
      "React Native",
      "Next.js",
      "Design Systems",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
