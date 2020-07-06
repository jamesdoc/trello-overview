const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

// Run mix
mix
  .postCss('./src/_assets/main.css', './dist/assets/main.css', [
    require('tailwindcss'),
  ])
  .minify('./dist/assets/main.css')
  .sourceMaps()
  .version();

