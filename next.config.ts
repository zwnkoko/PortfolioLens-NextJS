import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.parqet.com',
        port: '',
        pathname: '/logos/symbol/**',
      }
    ]
  }
};

export default nextConfig;
