import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "merle.es",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  allowedDevOrigins: ["http://127.0.0.1:3000", "http://localhost:3000"],
};

export default nextConfig;
