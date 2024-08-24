/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 1.5s ease-out infinite',
			}
		},
		fontFamily: {
			'helvetica-rounded': ['"Helvetica Rounded LT Std"', 'sans-serif'],
			'nokio': ['Nokio', 'sans-serif'],
		}
	},
	darkMode: 'selector',
	plugins: [],
}
