const HTML_EXTENSION_PATTERN = '.html';
const PUG_EXTENSION_PATTERN = '.pug';

const extensions = {
  HTML_EXTENSION_PATTERN,
  PUG_EXTENSION_PATTERN,
  FILE_EXTENSION_PATTERN: /\.[^.]+$/,
  JS_EXTENSION_PATTERN: /.js$/,
  PUG_EXTENSION_PATTERN_PATTERN: new RegExp(`${PUG_EXTENSION_PATTERN}$`),
  SCSS_EXTENSION_PATTERN: /.s[ac]ss$/,

  NODE_MODULES_PATTERN: /node_modules/,
};

export { extensions };
