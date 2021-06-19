const rootMain = require('../../../.storybook/main');

rootMain.addons.push({
  name: '@storybook/addon-postcss',
  options: {
    postcssLoaderOptions: {
      implementation: require('postcss'),
    },
  },
});

rootMain.stories.push(...['../**/*.stories.@(js|jsx|ts|tsx|mdx)']);

module.exports = rootMain;
