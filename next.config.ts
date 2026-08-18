import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits plain HTML/CSS/JS into `out/`
  output: "export",
  trailingSlash: true,
  images: {
    // Required for static export (no server-side image optimizer)
    unoptimized: true,
  },
};

export default nextConfig;
