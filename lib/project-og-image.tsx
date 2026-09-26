import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getProject, projectOgAlt } from "@/lib/projects";
import { OG_SIZE } from "@/lib/og-image";

export const PROJECT_OG_SIZE = OG_SIZE;

export { projectOgAlt };

/**
 * Open Graph / Twitter card for a case study: the project's cover visual on
 * the right, its name and subtitle on the left. Locale-neutral (English
 * subtitle) because the image URL is shared by both languages.
 */
export async function projectOgImage(slug: string) {
  const p = getProject(slug);
  const cover = await readFile(join(process.cwd(), "public", p.cover));
  const coverSrc = `data:image/png;base64,${cover.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0b0b0e",
          backgroundImage: "linear-gradient(135deg, #0b0b0e 0%, #1a0b2e 45%, #0b0b0e 100%)",
        }}
      >
        <div
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 70px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: 5,
              textTransform: "uppercase",
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            Case study
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, color: "#ffffff", lineHeight: 1.05 }}>
            {p.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              marginTop: 20,
              color: "rgba(255,255,255,0.8)",
              fontWeight: 500,
            }}
          >
            {p.subtitle.en}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 48,
              height: 6,
              width: 120,
              borderRadius: 999,
              backgroundImage: "linear-gradient(90deg,#FD23E3,#8021E8,#0619EA)",
            }}
          />
          <div style={{ display: "flex", marginTop: 20, fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
            Christ Erwin Fram — UI/UX Designer
          </div>
        </div>
        <div style={{ width: "45%", display: "flex", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverSrc}
            alt=""
            width={540}
            height={630}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
