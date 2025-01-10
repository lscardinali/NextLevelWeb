import { getAllGamePassGameIDs } from '$lib/services/xboxService';
import { getGamePassGamesInfo } from '$lib/services/xboxService';
import { json } from '@sveltejs/kit';

export async function GET() {
	const gamesIds = await getAllGamePassGameIDs();
	let allGames = await getGamePassGamesInfo(gamesIds, 0);
	return json(allGames);
}
