import { describe, test } from 'node:test';
import { Marked } from 'marked';
import markedExtensionTemplate from '../src/index.ts';

describe('marked-extension-template', () => {
  test('no options', (t) => {
    const marked = new Marked();
    marked.use(markedExtensionTemplate());
    t.assert.snapshot(marked.parse('example markdown'));
  });

  test('markdown not using this extension', (t) => {
    const marked = new Marked();
    marked.use(markedExtensionTemplate());
    t.assert.snapshot(marked.parse('not example markdown'));
  });
});
