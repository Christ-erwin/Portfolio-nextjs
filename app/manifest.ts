import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Christ Erwin Fram — UI/UX Designer & Full-Stack Developer",
    short_name: "CE Fram",
    description:
      "Product design and front-end development portfolio of Christ Erwin Fram.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f0f12",
    icons: [
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
      { src: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
    ],
  };
}
