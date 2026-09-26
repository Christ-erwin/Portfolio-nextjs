import { PROJECT_OG_SIZE, projectOgAlt, projectOgImage } from "@/lib/project-og-image";

export const alt = projectOgAlt("wave");
export const size = PROJECT_OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return projectOgImage("wave");
}
