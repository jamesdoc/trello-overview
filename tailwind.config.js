const { themeColors } = require ('./config.js');

module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.njk',
    ],
    theme: {
      extend: {
        colors: themeColors,
      },
    },
    variants: {},
    plugins: [],
};
