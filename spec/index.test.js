import { describe, test } from 'node:test';
import { Marked } from 'marked';
import thisExtension from '../src/index.js';

describe('this-extension', () => {
  test('no options', (t) => {
    const marked = new Marked();
    marked.use(thisExtension());
    t.assert.snapshot(marked.parse('example markdown'));
  });

  test('markdown not using this extension', (t) => {
    const marked = new Marked();
    marked.use(thisExtension());
    t.assert.snapshot(marked.parse('not example markdown'));
  });
});
