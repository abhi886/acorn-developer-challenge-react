import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging.acornlms.com',
        port: '',
      },
    ]
  },
  eslint: {
    // This will disable ESLint checks during `next build`
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
