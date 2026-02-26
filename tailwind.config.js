/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./layout/*.liquid',
		'./sections/**/*.liquid',
		'./snippets/**/*.liquid',
		'./templates/**/*.liquid',
		'./config/*.json',
	],
	theme: {
		extend: {
			colors: {
				primary: '#3B443C',
				secondary: '#B2AC88',
				custombg: '#F9F9F9',
				line: '#e5e7eb',
				white: '#FFFFFF',
				black: '#000000',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				josefin: ['Josefin Sans', 'sans-serif'],
			},
			container: {
				center: true,
				padding: '1rem',
				screens: {
					sm: '100%',
					md: '100%',
					lg: '1280px',
				},
			},
		},
	},
	plugins: [],
};
