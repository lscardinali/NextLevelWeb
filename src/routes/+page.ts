import { redirect } from '@sveltejs/kit';

export function load() {
	// ...
	redirect(302, '/hub'); // needs `throw` in v1
}
