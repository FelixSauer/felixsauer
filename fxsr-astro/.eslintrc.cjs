module.exports = {
	// ...
	extends: [
		// ...
		'plugin:astro/recommended',
	],
	// ...
	overrides: [
		{
			// Define the configuration for `.astro` file.
			files: ['*.astro'],
			// Allows Astro components to be parsed.
			parser: 'astro-eslint-parser',
			// Parse the script in `.astro` as TypeScript by adding the following configuration.
			// It's the setting you need when using TypeScript.
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			rules: {
				astroAllowShorthand: false,
				arrowParens: 'always',
				bracketSameLine: true,
				bracketSpacing: true,
				trailingComma: 'all',
				singleAttributePerLine: true,
				proseWrap: 'preserve',
				insertPragma: false,
				printWidth: 120,
				requirePragma: false,
				embeddedLanguageFormatting: 'auto',
			},
		},
	],
};
