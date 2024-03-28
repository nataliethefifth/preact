import * as stylex from '@stylexjs/stylex';

// A constant can be used to avoid repeating the media query
const DARK = '@media (prefers-color-scheme: dark)';
console.log('DARK', DARK);

export const colors = stylex.defineVars({
  primaryText: {default: 'black', [DARK]: 'white'},
  secondaryText: {default: '#333', [DARK]: '#ccc'},
  accent: {default: 'blue', [DARK]: 'lightblue'},
  background: {default: 'white', [DARK]: 'black'},
  lineColor: {default: 'gray', [DARK]: 'lightgray'},
});

export const sizes = stylex.defineVars({

});
