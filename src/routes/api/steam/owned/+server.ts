import { STEAM_API_KEY } from '$env/static/private';
import type { GameSimple } from '$lib/models/game';
import { json, type RequestEvent } from '@sveltejs/kit';

export async function GET(event: RequestEvent) {
	const steamId = event.url.searchParams.get('id');

	const includeInfo = event.url.searchParams.get('includeInfo') ?? '0';

	const appIdFilter = event.url.searchParams.get('appIdFilter');

	if (!steamId) {
		return json({ error: 'No steam id provided' }, { status: 400 });
	}

	let steamApiUrl = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_API_KEY}&steamid=${steamId}&include_appinfo=${includeInfo}&format=json`;
	if (appIdFilter) {
		steamApiUrl += `&appids_filter[0]=${appIdFilter}`;
	}

	console.log(steamApiUrl);

	const response = await fetch(steamApiUrl);
	const data = await response.json();
	let games = data.response.games.map((game: { appid: number; name: string }) => {
		return {
			id: game.appid,
			name: game.name,
			image: `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${game.appid}/library_600x900.jpg`
		};
	}) as GameSimple[];

	games = games.sort((a, b) => a.name.localeCompare(b.name));

	console.log(games);

	return json(games, {
		headers: { 'Cache-Control': 'public, max-age=3600, stale-while-revalidate=30' }
	});
}
