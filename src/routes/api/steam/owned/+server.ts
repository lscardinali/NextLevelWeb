import { STEAM_API_KEY } from '$env/static/private';
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

	return json(await response.json());
}
