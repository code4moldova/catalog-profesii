module.exports = {
  mode: 'jit',
  purge: [
    './packages/frontend/pages/**/*.{js,ts,jsx,tsx}',
    './packages/frontend/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
