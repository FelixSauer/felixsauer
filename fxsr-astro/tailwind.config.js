const { addDynamicIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		spacing: {
			1: '3px',
			2: '5px',
			3: '8px',
			4: '13px',
			5: '21px',
			6: '34px',
			7: '55px',
			8: '89px'
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		}
	},
	plugins: [
		// Iconify plugin
		addDynamicIconSelectors()
	]
}

module.exports = config
