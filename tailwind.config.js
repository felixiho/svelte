import { addDynamicIconSelectors } from '@iconify/tailwind';
// const { addIconSelectors } = require('@iconify/tailwind');


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			body: ['Lato', 'sans-serif'],
			display: ['Lato', 'sans-serif']
		}
	},
	plugins: [
		// addIconSelectors(['mdi', 'mdi-light']),
		addDynamicIconSelectors()
	]
};
