/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
		'./stories/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#65A2C2',
				black: '#313131',
				grey: '#CCCCCC',
				darkGrey: '#787878',
				red: '#FF5151',
			},
		},
	},
	plugins: [],
};
