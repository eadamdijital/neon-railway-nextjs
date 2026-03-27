import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};


module.exports = {
  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
}


export default nextConfig;
