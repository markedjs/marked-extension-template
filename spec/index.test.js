const marked = require('marked');
const thisExtension = require('../');

describe('this-extension', () => {
  beforeEach(() => {
    marked.setOptions(marked.getDefaults());
  });

  test('no options', () => {
    // test defaults
    marked.use(thisExtension());
    expect(marked('example.com')).toEqual(expect.stringMatching('href="http://example.com"'));
  });
});
