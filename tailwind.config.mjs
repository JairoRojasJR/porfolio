/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				turquoise: '#7fffd4',
				dark: '#17171e',
				violet: 'rgb(138, 66, 255)',
				superdark: '#1b1b3b'
			},
			boxShadow: {
				violet: '0 0 0.5rem rgb(138, 66, 255)',
				turquoise: '0 0 0.5rem turquoise'
			},
			dropShadow: {
				violet: '0 0 0.5rem rgb(138, 66, 255)'
			}
		},
	},
	plugins: [],
}
