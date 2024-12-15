import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				"choppi_violet" : "#e4c1f9",
				"choppi_blue" : "#a9def9",
				"choppi_green" : "#d0f4de",
				"choppi_yellow" : "#fcf6bd",
				"choppi_orange" : "#ffd6a5",
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			}
		},
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
