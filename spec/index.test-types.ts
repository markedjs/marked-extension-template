import { Marked } from 'marked';
import markedExtensionTemplate from 'marked-extension-template';

const marked = new Marked();

const options = {
  // default options
};

marked.use(markedExtensionTemplate(options));

const html: string = marked.parse('example markdown', { async: false });
console.log(html);
