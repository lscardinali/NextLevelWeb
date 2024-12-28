import typography from '@tailwindcss/typography';
import safeArea from 'tailwindcss-safe-area';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, safeArea]
} satisfies Config;
