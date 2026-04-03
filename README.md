# marked-extension-template

<!-- You may also delete any comments you don't need anymore. -->

## TODO:

- [ ] Replace all `marked-extension-template` with your extension npm name
- [ ] Replace all `markedExtensionTemplate` with your extension global name
- [ ] Update description in `/README.md`
- [ ] Update usage in `/README.md`
- [ ] Update options in `/README.md`
- [ ] Write extension in `/src/index.ts`
- [ ] Write tests in `/spec/index.test.js`
- [ ] Write typescript tests in `/spec/index.test-types.ts`
- [ ] (Optionally) uncomment release in `/.github/workflows/main.yml` to enable automated semantic
      releases when changes are added to `main`

## Notes

By default, projects created using this template are configured to automatically merge dev dependency
updates as soon as they are released. Be aware that this may put your repository at risk of
supply-chain attacks if dependencies are compromised. You should decide whether the reduced 
maintenance burden of this decision is worthwhile given this risk.

* If you wish to disable the automatic merging of dev dependency updates, delete `.github/workflows/automerge.yml`
* Consider adding a [cooldown time](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#cooldown-)
  for Dependabot dependency updates

<!-- Delete this line and above -->

# Your extension name
<!-- Description -->

## Usage
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
