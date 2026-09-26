import { PROJECT_OG_SIZE, projectOgAlt, projectOgImage } from "@/lib/project-og-image";

export const alt = projectOgAlt("foodygo");
export const size = PROJECT_OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return projectOgImage("foodygo");
}
