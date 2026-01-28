/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        gold: {
          primary: 'rgb(var(--gold-primary))',
          light: 'rgb(var(--gold-light))',
          accent: 'rgb(var(--gold-accent))',
        },
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          'to': { opacity: '1' },
        },
        slideUp: {
          'to': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
