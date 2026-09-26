import type { NextConfig } from "next";

// Safe to ship without live-testing every script/style source (they don't
// restrict scripts, styles or XHR, so EmailJS and Vercel Analytics keep
// working). A strict Content-Security-Policy is a good next step, but only
// after testing it against a real deployment — this is deliberately left out
// here to avoid silently breaking the contact form or analytics.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "drive.google.com" },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
