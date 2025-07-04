import * as esbuild from 'esbuild';
import { umdWrapper } from 'esbuild-plugin-umd-wrapper';

function config(options) {
  return {
    entryPoints: ['src/index.js'],
    sourcemap: true,
    bundle: true,
    minify: true,
    ...options,
  };
}

await esbuild.build(config({
  format: 'umd',
  outfile: 'lib/index.umd.js',
  plugins: [umdWrapper({
    libraryName: 'marked|thisExtension|',
  })],
}));
