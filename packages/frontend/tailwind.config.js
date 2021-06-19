const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: 'jit',
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
      // All colors wre extracted from Figma
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
      // TODO: something is not working with this fucking rainbow
      // All colors wre extracted from Figma
      rainbow: {
        '001': '#DF7070',
        '002': '#DFAC70',
        '003': '#DFC770',
        '004': '#DDDF70',
        '005': '#B5DF70',
        '006': '#90E788',
        '007': '#70DFA3',
        '008': '#70DFCB',
        '009': '#70D2DF',
        '010': '#70AADF',
        '011': '#7089DF',
        '012': '#8D70DF',
        '013': '#C970DF',
        '014': '#DF70C7',
        '015': '#DF709F',
        '016': '#DF7084',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
