const { themeColors } = require ('./config.js');

module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.njk',
    ],
    theme: {
      extend: {
        colors: themeColors,
        height: {
          'full-excludeBanner': 'calc(100vh - 43px - 1rem)'
        },
        minWidth: {
          '0': '0',
          '1/6': 'calc(16.6% - 1rem)',
          '1/5': 'calc(20% - 1rem)',
          '1/4': 'calc(25% - 1rem)',
          '1/3': 'calc(33.3% - 1rem)',
          '1/2': 'calc(50% - 1rem)',
          '3/4': '75%',
          'full': '100%',
        },
        boxShadow: theme => ({
          outline: '0 0 0 2px ' + theme('colors.primary.dark')
        }),
      },
    },
    variants: {
      minWidth: ['responsive']
    },
    plugins: [],
};
