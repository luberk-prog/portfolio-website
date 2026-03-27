import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a sub-path, uncomment and set the repo name below
  // basePath: '/portfolio-website',
};

export default nextConfig;
