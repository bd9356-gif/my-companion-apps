import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fonts read at runtime by the Facebook recipe-card image route.
  outputFileTracingIncludes: {
    '/api/og/recipe/[id]': ['./assets/og-fonts/**'],
  },
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
