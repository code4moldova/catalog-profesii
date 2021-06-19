const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  // TODO: https://github.com/nrwl/nx/issues/5627
  // mode: 'jit',
  purge: [
    './packages/frontend/pages/**/*.{js,ts,jsx,tsx}',
    './packages/frontend/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: '#F6F6F6',
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
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
};
