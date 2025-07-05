// node:coverage ignore next
import type { MarkedExtension } from 'marked';

export default function(options = {}): MarkedExtension {
  // extension code here

  return {
    tokenizer: {
      paragraph(src) {
        if (src !== 'example markdown') {
          return false;
        }

        const text = 'example html';

        return {
          type: 'paragraph',
          raw: src,
          text,
          tokens: this.lexer.inline(text),
        };
      },
    },
  };
}
