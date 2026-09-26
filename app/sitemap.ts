import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { projects } from "@/lib/projects";

const base = SITE_URL;

// FR and EN are served on the same URL (locale comes from a cookie), so there
// are no per-language alternates to declare.
const staticRoutes = ["", "/projects", "/about", "/skills", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...staticRoutes, ...projects.map((p) => `/projects/${p.slug}`)];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
