import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   esmExternals: 'loose'
  // },
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  transpilePackages: ['@chatscope/chat-ui-kit-react'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // experimental: {
    turbopack: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.jsx',
        },
      },
    },
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Improve browser compatibility
  compiler: {
    // Remove console.log in production for better compatibility
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
};

export default withFlowbiteReact(nextConfig);
