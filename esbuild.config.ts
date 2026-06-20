import * as esbuild from 'esbuild';
import { umdWrapper } from 'esbuild-plugin-umd-wrapper';

function config(options) {
  return {
    sourcemap: true,
    bundle: true,
    minify: true,
    ...options,
  };
}

await esbuild.build(config({
  entryPoints: ['./src/index.ts'],
  format: 'esm',
  outfile: 'lib/index.esm.js',
}));

await esbuild.build(config({
  stdin: {
    contents: 'module.exports = require("./src/index.ts").default',
    resolveDir: '.',
  },
  format: 'umd',
  outfile: 'lib/index.umd.js',
  plugins: [umdWrapper({
    libraryName: 'markedExtensionTemplate',
  })],
}));
