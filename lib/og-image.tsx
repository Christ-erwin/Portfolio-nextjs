export const OG_ALT =
  "Christ Erwin Fram — UI/UX Designer & Full-Stack Developer";
export const OG_SIZE = { width: 1200, height: 630 };

const TAGS = ["Product Design", "React Native", "Next.js"];

/** Shared brand card used for both the Open Graph and Twitter images. */
export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "90px",
        backgroundColor: "#0b0b0e",
        backgroundImage:
          "linear-gradient(135deg, #0b0b0e 0%, #1a0b2e 45%, #0b0b0e 100%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: 700,
            color: "#0b0b0e",
            backgroundImage: "linear-gradient(90deg,#FD23E3,#8021E8,#0619EA)",
          }}
        >
          CE
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Portfolio
        </div>
      </div>

      <div style={{ display: "flex", fontSize: 74, fontWeight: 800, color: "#ffffff", lineHeight: 1.05 }}>
        Christ Erwin Fram
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 34,
          marginTop: 22,
          color: "rgba(255,255,255,0.78)",
          fontWeight: 500,
        }}
      >
        UI/UX Designer &amp; Full-Stack Developer
      </div>

      <div style={{ display: "flex", gap: 14, marginTop: 48 }}>
        {TAGS.map((t) => (
          <div
            key={t}
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.85)",
              fontSize: 20,
            }}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
