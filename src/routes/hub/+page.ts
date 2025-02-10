import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch }) => {
	const humbleBundle = fetch('/api/humblebundle').then((res) => res.json());

	return {
		humbleBundle: humbleBundle
	};
};
