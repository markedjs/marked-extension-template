import { describe, test } from 'node:test';
import { Marked } from 'marked';
import '../lib/index.umd.js';

describe('this-extension', () => {
  test('no options', (t) => {
    const marked = new Marked();
    marked.use(globalThis.markedThisExtension());
    t.assert.snapshot(marked.parse('example markdown'));
  });
});
