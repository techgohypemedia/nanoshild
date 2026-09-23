import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/protective-wrap",
        destination: "/protective-film",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
