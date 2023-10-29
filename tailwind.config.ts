import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/shared/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-montserrat)'],
    },
    colors: {
      white: '#fff',
      black: '#000',
      gray: {
        100: '#b3b3b3',
        200: '#292929',
        300: '#2a2a2a',
        400: '#242424',
        500: '#1a1a1a',
        600: '#121212',
      },
      green: {
        100: '#1ed760',
        200: '#1fdf64',
        300: '#169c46',
      },
    },
  },
  plugins: [],
}
export default config
