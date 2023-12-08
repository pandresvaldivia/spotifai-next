import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-montserrat)'],
    },
    colors: {
      white: '#fff',
      black: '#000',
      gray: {
        100: '#b3b3b3',
        200: '#a7a7a7',
        300: '#292929',
        400: '#2a2a2a',
        500: '#242424',
        600: '#1a1a1a',
        700: '#121212',
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
