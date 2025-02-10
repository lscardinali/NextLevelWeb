import { getAllGamePassGameIDs, type Game } from '$lib/services/xboxService';
import { getGamePassGamesInfo } from '$lib/services/xboxService';

import type { PageLoad } from './$types';
export const load: PageLoad = async ({ params, fetch }) => {
	return {
		allGames: fetch('/api/xbox/gamepass')
	};
};
