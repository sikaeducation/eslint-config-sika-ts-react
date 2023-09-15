module.exports = {
	files: ["**/*.tsx"],
	settings: {
		"import/resolver": {
			typescript: {
				extensions: [
					".ts",
					".tsx",
				],
			},
			node: {
				extensions: [
					".js",
					".jsx",
					".json",
				],
			},
		},
		"import/parsers": {
			"@typescript-eslint/parser": [
				".ts",
				".tsx",
			],
		},
	},
	overrides: [
		require("@sikaeducation/eslint-config/react"),
		{
			files: ["**/slices/*.{ts,tsx}"],
			rules: {
				"no-param-reassign": "off",
			},
		},
		{
			files: [
				"**/setupTests.ts",
				"**/reportWebVitals.ts",
			],
			rules: {
				"import/extensions": [
					"error",
					"ignorePackages",
					{
						ts: "never",
						tsx: "never",
					},
				],
				"import/no-extraneous-dependencies": [
					"error",
					{
						devDependencies: [
							"**/setupTests.ts",
							"**/reportWebVitals.ts",
						],
					},
				],
				"no-use-before-define": "error",
				"@typescript-eslint/no-use-before-define": "error",
				"react/jsx-filename-extension": [
					"warn",
					{ extensions: [".tsx"] },
				],
				"no-shadow": "off",
				"@typescript-eslint/no-shadow": ["error"],
			},
		},
	],
};
