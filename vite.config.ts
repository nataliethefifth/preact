import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import styleX from "vite-plugin-stylex"

export default defineConfig({
  plugins: [preact(), styleX()],
})
