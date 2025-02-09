import { getHumbleBundle } from '$lib/services/humbleBundleService';
import { getAllGamePassGameIDs } from '$lib/services/xboxService';
import { getGamePassGamesInfo } from '$lib/services/xboxService';
import { json } from '@sveltejs/kit';

export async function GET() {
	const bundles = await getHumbleBundle();
	return json(bundles);
}
