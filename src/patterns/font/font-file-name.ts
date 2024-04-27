const LETTERS_PATTERN = '[A-Z][a-z]';
const FONT_FAMILY_PATTERN = `^${LETTERS_PATTERN}+(${LETTERS_PATTERN}+)?`;
const FONT_WEIGHT_PATTERNS = [
  'Thin',
  'Hairline',
  'ExtraLight',
  'UltraLight',
  'Light',
  'Regular',
  'Medium',
  'SemiBold',
  'DemiBold',
  'Bold',
  'ExtraBold',
  'UltraBold',
  'Black',
  'Heavy',
  'ExtraBlack',
  'UltraBlack',
].join('|');
const FONT_EXTENSION_PATTERNS = ['otf', 'ttf', 'woff', 'woff2'].join('|');
const FAMILY_PATTERN = `(${FONT_FAMILY_PATTERN})`;
const WEIGHT_PATTERNS = `(${FONT_WEIGHT_PATTERNS})`;
const EXTENSION_PATTERNS = `(${FONT_EXTENSION_PATTERNS})$`;
const FONT_FILE_NAME_PATTERN = new RegExp(
  `${FAMILY_PATTERN}-${WEIGHT_PATTERNS}\\.${EXTENSION_PATTERNS}`,
);

export { FONT_FILE_NAME_PATTERN };
