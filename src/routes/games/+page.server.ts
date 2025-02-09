import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	if (locals.user) {
		const currentUser = await db.query.user.findFirst({
			where: eq(user.id, locals.user.id)
		});

		const owned = await fetch(`/api/steam/owned?id=${currentUser?.steamId}&includeInfo=1`);

		const ownedData = await owned.json();
		if (ownedData.response.games !== undefined) {
			const games = ownedData.response.games.map((game: { appid: number; name: string }) => {
				return {
					id: game.appid,
					name: game.name
				};
			});
			return {
				games: games
			};
		}
	}
	return {
		games: null
	};
};
