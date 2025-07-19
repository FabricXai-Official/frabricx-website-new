import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    esmExternals: 'loose'
  },
  output: 'export',
  trailingSlash: true,
  transpilePackages: ['@chatscope/chat-ui-kit-react']
};

export default withFlowbiteReact(nextConfig);
