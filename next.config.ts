import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  // IMPORTANTE: Cambia 'prueba-landign' por el nombre exacto de tu repositorio
  basePath: '/prueba-landign',
  assetPrefix: '/prueba-landign/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
