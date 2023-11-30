import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'scroll-up': {
          '25%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(-50%)' },
          '75%': { transform: 'translateY(-75%)' },
        }
      },
      animation: {
        // 'scroll-up': 'scroll-up 4s forwards'
        'scroll-up': 'scroll-up 4s infinite'
      }
    },
  },
  plugins: [],
}
export default config
