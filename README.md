# Sika's ESLint Config

* Install with `npm install eslint @sikaeducation/eslint-config-ts-react`
* Exports
	* [`javascript`](./lib/javascript.overrides.js)
	* [`typescript`](./lib/typescript.overrides.js)
	* [`react`](./lib/react.overrides.js)
	* [`reactTypeScript`](./lib/react.typescript.overrides.js)
	* [`jest`](./lib/jest.overrides.js)
	* [`storybook`](./lib/storybook.overrides.js)
	* [`formattng`](./lib/formatting.overrides.js)
* Publish updates by incrementing version (eg. `npm version patch`) and pushing

Example usage:

```js
// eslint.config.js
import { javascript, formatting } from "@sikaeducation/eslint-config-ts-react";

export default [
	...javascript,
	...formatting,
]
```
