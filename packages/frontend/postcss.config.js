module.exports = {
  plugins: {
    'tailwindcss': require('./tailwind.config'),
    'postcss-flexbugs-fixes': {},
    'autoprefixer': {
      flexbox: 'no-2009',
    },
  },
};
