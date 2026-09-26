import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(135deg,#FD23E3,#8021E8,#0619EA)",
          borderRadius: 40,
        }}
      >
        <div style={{ display: "flex", color: "#fff", fontSize: 84, fontWeight: 800 }}>
          CE
        </div>
      </div>
    ),
    { ...size }
  );
}
