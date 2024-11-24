import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				parkinsans: ['Parkinsans', 'sans-serif'],
				open_sans: ['Open\\ Sans', 'sans-serif']
			},
			colors: {
				beige: '#EBEBD3',
				gunmetal: '#1F363D',
				bittersweet: '#E87461'
			}
		}
	},

	plugins: [typography]
} satisfies Config;
