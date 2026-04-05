import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    'preview-chat-d6ea615d-9576-417f-952e-ac1b10b2141c.space.z.ai',
    'localhost:3000',
  ],
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
