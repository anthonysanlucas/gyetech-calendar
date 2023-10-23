/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#CAED65'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      animation: {
        'slide-circle': 'slide-circle 2.5s ease-in-out infinite alternate'
      },
      keyframes: {
        'slide-circle': {
          '0%': { transform: 'translateY(-16px)' },
          '100%': { transform: 'translateY(16px)' }
        }
      }
    }
  },
  plugins: []
}
