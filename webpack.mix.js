let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss')

mix.sass('src/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('tailwind.config.js') ],
  });

mix.copy('src/index.html', 'public');
mix.copy('src/js/**', 'public/js');
