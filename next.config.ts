import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || true;

const repo = "nilesh_institute";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
