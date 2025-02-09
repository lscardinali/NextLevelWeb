import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params, locals }) => {
	const response = await fetch(
		`https://store.steampowered.com/api/appdetails?appids=${params.id}&cc=US`
	);
	const data = await response.json();

	if (locals.user) {
		const currentUser = await db.query.user.findFirst({
			where: eq(user.id, locals.user.id)
		});

		const owned = await fetch(
			`/api/steam/owned?id=${currentUser?.steamId}&includeInfo=0&appIdFilter=${params.id}`
		);
		const ownedData = await owned.json();

		return {
			gameInfo: data[params.id].data as SteamGame,
			owned: ownedData.response.games !== undefined
		};
	}

	return {
		gameInfo: data[params.id].data as SteamGame
	};
};
