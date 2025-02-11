import { dev } from '$app/environment';
import { redirect } from '@sveltejs/kit';

export const load = () => {
	if (!dev) {
		throw redirect(307, '/hub');
	}
};
