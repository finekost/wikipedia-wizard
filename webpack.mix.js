let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss')

mix.sass('src/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('tailwind.config.js') ],
  });

mix.copy('src/index.html', 'public');
mix.copy('src/sitemap.php', 'public');
mix.copy('src/js/libs/', 'public/js/libs/');
mix.js('src/js/app.js', 'public/js/app.js');
