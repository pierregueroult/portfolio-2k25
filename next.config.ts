import type { NextConfig } from "next";

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

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

export default withNextIntl(nextConfig);
