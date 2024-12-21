import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    webpackMemoryOptimizations: true,
    authInterrupts: false,
    cssChunking: true,
    typedRoutes: true,
    typedEnv: true,
  },
  devIndicators: {
    buildActivity: true,
    appIsrStatus: true,
  }
};

export default nextConfig;
