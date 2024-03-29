import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateRows: {
        header: 'auto 10px auto',
      },
    },
    screens: {
      desktop: '1480px',
      laptop: { max: '1024px' },
      tablet: '640px',
      mobile: { max: '639px' },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};

export default config;
