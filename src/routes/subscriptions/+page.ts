import type { PageLoad } from '../../subscriptions/$types';
export const load: PageLoad = async ({ params, fetch }) => {
	return {
		allGames: fetch('/api/xbox/gamepass')
	};
};
