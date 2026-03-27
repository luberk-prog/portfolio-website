/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Sub-path: Only applicable for production build (GitHub Pages)
  basePath: isProd ? '/portfolio-website' : '',
  assetPrefix: isProd ? '/portfolio-website' : '',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/portfolio-website' : '',
  },
};

export default nextConfig;
