import { describe, test } from 'node:test';
import { Marked } from 'marked';
import '../lib/index.umd.js';

describe('marked-extension-template umd', () => {
  test('no options', (t) => {
    const marked = new Marked();
    marked.use(globalThis.markedExtensionTemplate());
    t.assert.snapshot(marked.parse('example markdown'));
  });
});
