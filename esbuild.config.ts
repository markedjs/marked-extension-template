import * as esbuild from 'esbuild';
import type { BuildOptions, Format } from 'esbuild';
import { umdWrapper } from 'esbuild-plugin-umd-wrapper';

function config(options: BuildOptions) {
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
  format: 'umd' as Format,
  outfile: 'lib/index.umd.js',
  plugins: [umdWrapper({
    libraryName: 'markedExtensionTemplate',
  })],
}));
