import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Настройки для кастомного документа
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
};

export default nextConfig;
