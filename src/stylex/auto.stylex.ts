// https://github.com/facebook/stylex/issues/281

import * as stylex from '@stylexjs/stylex';
import { light } from './light.stylex';
import { dark } from './dark.stylex';

// A constant can be used to avoid repeating the media query
const DARK = '@media (prefers-color-scheme: dark)';

export const auto = stylex.defineVars({
  primaryText: {default: light.primaryText, [DARK]: dark.primaryText},
  backgroundColor: {default: light.backgroundColor, [DARK]: dark.backgroundColor},
});

