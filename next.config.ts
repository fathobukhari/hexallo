import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Next.js dev indicator badge
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
