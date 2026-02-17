import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandGold: '#D4A853',
        brandNavy: '#0A1E2E'
      }
    }
  },
  plugins: []
};

export default config;
