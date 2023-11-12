const path = require('path');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const terser = require('@rollup/plugin-terser');
const { babel } = require('@rollup/plugin-babel');

const outputFileName = 'lzx-test-plugin';
const inputFile = './src/index.js';
const external = [];

module.exports = async () => {

  const es5 = false;
  const minified = true;

  return [
    {
      input: inputFile,
      output: {
        file: minified ? `dist/esm/${outputFileName}.min.js` : `dist/esm/${outputFileName}.js`,
        format: 'esm',
        exports: 'named',
        // generatedCode: {
        //   constBindings: true,
        // },
        sourcemap: true,
      },
      plugins: [
        json(),
        resolve({ extensions: ['.js', '.jsx'] }),
        [
          babel({
            babelHelpers: 'bundled',
            exclude: /node_modules/,
            presets: [['@babel/preset-env', { loose: true }], '@babel/preset-react'],
            extensions: ['.js', '.jsx'],
          }),
        ],
        commonjs(),
        minified && terser(),
      ],
    },
    {
      input: inputFile,
      output: {
        file: minified ? `dist/browser/${outputFileName}.min.js` : `dist/browser/${outputFileName}.js`,
        format: 'cjs',
        exports: 'auto',
        sourcemap: true,
      },
      plugins: [
        json(),
        resolve({ extensions: ['.js', '.jsx'] }),
        [
          babel({
            babelHelpers: 'bundled',
            exclude: /node_modules/,
            presets: [['@babel/preset-env', { loose: true }], '@babel/preset-react'],
            extensions: ['.js', '.jsx'],
          }),
        ],
        commonjs(),
        minified && terser(),
      ],
    },
  ];
};
