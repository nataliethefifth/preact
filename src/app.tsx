import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
// import './app.css'

import * as stylex from '@stylexjs/stylex';
import { fonts } from "@stylexjs/open-props/lib/fonts.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import { autoTheme, lightTheme } from './stylex/theme.stylex';
// import { light } from './stylex/light.stylex';
// import { auto } from './stylex/auto.stylex';
import { color } from './stylex/color.stylex';

// export const autoTheme = stylex.createTheme(color, light);

const styles = stylex.create({
  base: {
    fontSize: 36,
    lineHeight: 1.5,
    color: 'rgb(60,60,60)',
    fontFamily: fonts.serif,
  },
  highlighted: {
    // color: 'rebeccapurple',
    color: colors.choco9,
  },
  test1: {
    backgroundColor: color.backgroundColor
  }
});

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div {...stylex.props(autoTheme)}> */}
      <div {...stylex.props(lightTheme, styles.test1)}>
      {/* <div {...stylex.props(styles.test1)}> */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
      <p {...stylex.props(styles.base, styles.highlighted)}>
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
