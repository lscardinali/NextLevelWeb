import type { PageServerLoad } from './$types';
import { getHumbleBundle } from '$lib/services/humbleBundleService';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const bundles = await getHumbleBundle();
	return {
		bundles: bundles
	};
};
