import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
export default {
  input: 'src/index.ts',
  output: [
    {
      file: "./dist/index.cjs",
      format: 'cjs',
      exports: 'named'
    },
    {
      file: "./dist/index.mjs",
      format: 'es'
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      extensions: ['.js', '.ts', '.json', '.tsx', '.jsx'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled', // 作一些填充
    }),
  ]
}
