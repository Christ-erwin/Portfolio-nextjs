import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const base = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/projects",
    "/about",
    "/skills",
    "/contact",
    "/projects/homelink",
    "/projects/wave",
    "/projects/moovyflix",
    "/projects/gripple",
    "/projects/foodygo",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
