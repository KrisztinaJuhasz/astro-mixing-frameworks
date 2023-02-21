const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'primary-react': colors.blue[500],
			'secondary-react': colors.blue[200],
			'primary-vue': colors.green[500],
			'secondary-vue': colors.green[200],
			'primary-svelte': colors.orange[500],
			'secondary-svelte': colors.orange[200],
			'primary-solid': colors.purple[500],
			'secondary-solid': colors.purple[200],
			neutral: colors.slate
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
