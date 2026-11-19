import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fonts and the Chef Jen logo, read at runtime by the recipe-picture image routes.
  outputFileTracingIncludes: {
    '/api/og/recipe/[id]': ['./assets/og-fonts/**', './assets/og-brand/**'],
    '/api/og/recipe/[id]/tall': ['./assets/og-fonts/**', './assets/og-brand/**'],
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
