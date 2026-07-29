import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      basePath: "/FOX-project-page",
      assetPrefix: "/FOX-project-page",
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
