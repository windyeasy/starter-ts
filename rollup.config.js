import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/main.ts',
  output: {
    format: 'umd',
    file: 'dist/bundle.umd.js',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ]
}
