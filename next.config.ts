import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles output automatically — standalone is only for self-hosted
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ['*'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "api.leadconnectorhq.com",
      },
    ],
  },
};

export default nextConfig;
