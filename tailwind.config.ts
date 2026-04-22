import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 80px rgba(34, 211, 238, 0.18)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      colors: {
        brand: {
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
        },
      },
    },
  },
  plugins: [],
};

export default config;
