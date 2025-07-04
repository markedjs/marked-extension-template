<!-- You may also delete any comments you don't need anymore. -->

# TODO:

- [ ] Replace information in `/README.md`
- [ ] Replace name in `/esbuild.config.js`
- [ ] Replace information in `/package.json`
- [ ] Write extension in `/src/index.js`
- [ ] Write tests in `/spec/index.test.js`
- [ ] Uncomment release in `/.github/workflows/main.yml`

<!-- Delete this line and above -->

# marked-extension-template
<!-- Description -->

# Usage
<!-- Show most examples of how to use this extension -->

```js
import {marked} from "marked";
import markedExtensionTemplate from "marked-extension-template";

// or UMD script
// <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/marked-extension-template/lib/index.umd.js"></script>

const options = {
	// default options
};

marked.use(markedExtensionTemplate(options));

marked.parse("example markdown");
// <p>example html</p>
```

## `options`

<!-- If there are no options you can delete this section -->
