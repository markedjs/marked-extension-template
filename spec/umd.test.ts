import { describe, test } from 'node:test';
import '../lib/index.umd.js';

describe('marked-extension-template umd', () => {
  test('test umd global', (t) => {
    t.assert.equal(typeof markedExtensionTemplate, 'function');
  });
});
