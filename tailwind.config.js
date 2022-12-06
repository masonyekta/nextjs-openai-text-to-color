const { colors } = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
	theme: {
		letterSpacing: {
			tighter: '-.055em',
		},
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '1440px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans],
			},

			colors: {
				...colors,
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
