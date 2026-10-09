import type { NextConfig } from "next";

// Static build for a GitHub Pages phone test: front-end only, no API or database.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/website-testing",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
