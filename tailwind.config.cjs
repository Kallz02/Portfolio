/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/html/utils/withMT');
// const defaultTheme = require('tailwindcss/defaultTheme')
export default withMT({
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				custom: {
					background: 'var(--background)',
					foreground: 'var(--foreground)'
				},
				muted: 'var(--muted)',

				foreground: 'var(--foreground)'
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				}
			},
			screens: {
				'3xl': '1600px',
				'2.5xl': '1350px'
			},
			fontFamily: {
				sans: ['MabryPro', 'sans-serif']
			}
		}
	},
	plugins: [require('flowbite/plugin')]
});
