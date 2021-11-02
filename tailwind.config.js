const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // We add colors here so we disable all other default Tailwind colors
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      // All colors were extracted from Figma
      blue: {
        100: '#F2F7FF',
        200: '#DAF0FF',
        300: '#C6E3F6',
        400: '#46B5FF',
        500: '#18A0FB',
        600: '#1E8ED9',
        700: '#2E7BAE',
        800: '#256189',
        900: '#22577A',
      },
      // All colors were extracted from Figma
      rainbow: {
        '010': '#DF7070',
        '020': '#DFAC70',
        '030': '#DFC770',
        '040': '#DDDF70',
        '050': '#B5DF70',
        '060': '#90E788',
        '070': '#70DFA3',
        '080': '#70DFCB',
        '090': '#70D2DF',
        '100': '#70AADF',
        '110': '#7089DF',
        '120': '#8D70DF',
        '130': '#C970DF',
        '140': '#DF70C7',
        '150': '#DF709F',
        '160': '#DF7084',
      },
    },
    extend: {
      fontFamily: {
        sans: [
          /**
           * Font faces for Montserrat were added in files below
           * Storybook: .storybook/preview-head.html
           * Next.js: pages/_app.tsx
           */
          'Montserrat',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      lineHeight: {
        11: '2.75rem',
        12: '3.00rem',
        13: '3.25rem',
        14: '3.50rem',
        15: '3.75rem',
        16: '4.00rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
