<?php
  header('Content-type: text/plain');

  $basePath = $_SERVER['HTTP_HOST'];
  $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";

  // extract and sanitze json string
  $jsConfigFileContent = file_get_contents('../src/js/wikiwizard/config.js');
  $jsConfigFileContent = str_replace("'", '"', $jsConfigFileContent);
  $jsConfigFileContent = strstr(  $jsConfigFileContent, '[');

  $config = json_decode($jsConfigFileContent);

  echo $protocol . $basePath . '/content/about' . "\n";
  echo $protocol . $basePath . '/content/contribute' . "\n";
  echo $protocol . $basePath . '/content/kudos' . "\n";

  foreach ($config as $key => $value) {
    echo $protocol . $basePath . '/parse/' . $value->lang . '/' . $value->url_snip . "\n";
  }
