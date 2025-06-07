import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const extensions = ['.js', '.ts', '.json', '.tsx', '.jsx', '.mjs', '.mts', '.cjs'];
/**
 * @type {import('rollup').RollupOptions}
 */ 
export default {
  input: 'src/index.ts',
  output: [
    {
      file: './dist/index.cjs',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: './dist/index.cjs',
      format: 'es'
    },
  ],
  plugins: [
    resolve({
      extensions,
    }),
    commonjs(),
    babel({
      extensions,
      exclude: 'node_modules/**',
      babelHelpers: 'bundled', // 作一些填充
    }),
  ]
}
