module.exports = {
	mode: 'jit',
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				rubik: ['Rubik', 'sans-serif']
			}
		}
	},
	variants: {
		extend: {
			fontWeight: ['hover'],
			transform: ['hover', 'focus']
		}
	},
	plugins: []
}
