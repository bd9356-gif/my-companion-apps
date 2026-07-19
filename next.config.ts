import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'recipe.mycompanionapps.com' }],
        destination: 'https://mycompanionapps.com/myrecipe',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
