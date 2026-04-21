import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permitem calitățile standard + 90 și 100 pentru imagini premium
    qualities: [25, 50, 75, 90, 100],
  },
};

export default nextConfig;
