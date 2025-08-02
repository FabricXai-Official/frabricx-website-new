import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        chillax: ["var(--font-chillax)", "sans-serif"],
        jakarta: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
      colors: {
        primary: {
          yellow: "#F2F827",
          dark: "#13191D",
        },
      },
    },
  },
  plugins: [],
};

export default config; 