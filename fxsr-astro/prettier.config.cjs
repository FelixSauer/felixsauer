/** @type {import("prettier").Config} */
const config = {
	astroAllowShorthand: false,
	useTabs: true,
	singleQuote: true,
	singleAttributePerLine: false,
	trailingComma: 'none',
	printWidth: 120,
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss',
		'prettier-plugin-jsdoc',
		'prettier-plugin-organize-imports',
		'prettier-plugin-organize-attributes'
	],
	pluginSearchDirs: true
};

module.exports = config;
