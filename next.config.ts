import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_YEAR: String(new Date().getFullYear()),
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
