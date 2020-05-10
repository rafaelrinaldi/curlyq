import { preserveShebangs as shebang } from 'rollup-plugin-preserve-shebangs'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

export default {
  input: 'src/cli.ts',
  output: [
    {
      file: pkg.bin,
      format: 'cjs'
    }
  ],
  plugins: [shebang(), commonjs(), json(), typescript()]
}
