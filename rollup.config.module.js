import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import sourcemaps from 'rollup-plugin-sourcemaps'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

const name = 'curlyq'
const globals = { react: 'React' }
const sourcemap = true

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name,
      globals,
      sourcemap,
      plugins: [
        terser({
          output: { comments: false }
        })
      ]
    },
    {
      file: pkg.module,
      format: 'es',
      name,
      globals,
      sourcemap
    }
  ],
  external: ['react'],
  plugins: [
    resolve({
      browser: true,
      extensions: ['.ts', '.tsx']
    }),
    commonjs(),
    typescript(),
    sourcemaps()
  ]
}
