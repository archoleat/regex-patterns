import { SPLIT_CHARS_PATTERN } from '../../common/split-chars.ts';

const VARIABLE_FONT_PATTERN = new RegExp(`${SPLIT_CHARS_PATTERN}?(var)`, 'i');

export { VARIABLE_FONT_PATTERN };
