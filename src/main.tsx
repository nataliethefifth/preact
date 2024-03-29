import { render } from 'preact'
import { App } from './app.tsx'
// import './index.css'

// import * as stylex from '@stylexjs/stylex';
// import { autoTheme as theme } from './stylex/theme.stylex';

render(<App />, document.getElementById('app')!)
// render(<div {...stylex.props(theme)}><App /></div>, document.getElementById('app')!)
