import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Text"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"SF Pro Display"', 'Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
