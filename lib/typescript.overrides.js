/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */

module.exports = {
	files: ["**/*.{ts,tsx}"],
	extends: [
		"./javascript.overrides.js",
		"plugin:@typescript-eslint/recommended-type-checked",
	],
	plugins: [
		"@typescript-eslint",
		"import",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		tsconfigRootDir: __dirname,
		project: true,
	},
	env: {
		node: true,
		browser: true,
		es6: true,
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [
				".ts",
				".tsx",
			],
		},
		"import/resolver": {
			typescript: {
				extensions: [
					".ts",
					".tsx",
				],
			},
		},
	},
	rules: {
		"@typescript-eslint/no-var-requires": "off",
	},
};