<!-- You may also delete any comments you don't need anymore. -->

# TODO:

- [ ] Replace all `marked-extension-template` with your extension npm name
- [ ] Replace all `markedExtensionTemplate` with your extension global name
- [ ] Update description in `/README.md`
- [ ] Update usage in `/README.md`
- [ ] Update options in `/README.md`
- [ ] Write extension in `/src/index.ts`
- [ ] Write tests in `/spec/index.test.js`
- [ ] Update UMD test in `/spec/umd.test.js`
- [ ] Write typescript tests in `/spec/index.test-types.ts`
- [ ] Uncomment release in `/.github/workflows/main.yml`

<!-- Delete this line and above -->

# marked-extension-template
<!-- Description -->

# Usage
<!-- Show most examples of how to use this extension -->

```js
import {Marked} from "marked";
import markedExtensionTemplate from "marked-extension-template";

// or UMD script
// <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/marked-extension-template/lib/index.umd.js"></script>
// const Marked = marked.Marked;

const marked = new Marked();

const options = {
	// default options
};

marked.use(markedExtensionTemplate(options));

marked.parse("example markdown");
// <p>example html</p>
```

## `options`

<!-- If there are no options you can delete this section -->
