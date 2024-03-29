// https://github.com/facebook/stylex/issues/281

import * as stylex from '@stylexjs/stylex';
import { color } from './color.stylex';
import { light } from './light.stylex';
import { dark } from './dark.stylex';
import { auto } from './auto.stylex';

export const lightTheme = stylex.createTheme(color, light);
export const darkTheme = stylex.createTheme(color, dark);
export const autoTheme = stylex.createTheme(color, auto);

