import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 
    output: "standalone" is required for optimal deployment on Vercel 
    and Docker environments. It drastically reduces the build size.
  */
  output: "standalone",
  
  transpilePackages: ["motion"],

  images: {
    // Allows external images if you decide to use a CMS or CDN later
    remotePatterns: [],
  },
};

export default nextConfig;
