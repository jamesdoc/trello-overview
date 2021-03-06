const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const svgSprite = require('@ayctor/laravel-mix-svg-sprite');

// Run mix
mix
  .setPublicPath(`dist/assets`)
  .sourceMaps()
  .postCss('./src/_assets/main.css', '', [
    require('tailwindcss'),
  ])
  .js('./src/_assets/main.js', '')
  .extract()
  .minify([
    './dist/assets/vendor.js',
    './dist/assets/manifest.js',
    './dist/assets/main.js',
    './dist/assets/main.css'
  ])
  .svgSprite('./src/_assets/svg/**/*.svg', 'sprite.svg')
  .version();

