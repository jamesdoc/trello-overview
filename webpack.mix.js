const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

// Run mix

mix
  .setPublicPath(`dist`)
  .postCss('./src/_assets/main.css', 'assets', [
    require('tailwindcss'),
  ])
  .js('./src/_assets/main.js', 'assets')
  .extract()
  .minify([
    './dist/assets/vendor.js',
    './dist/assets/manifest.js',
    './dist/assets/main.js',
    './dist/assets/main.css'
  ])
  .sourceMaps()
  .version();

