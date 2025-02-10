import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import type { GameSimple } from '$lib/models/game';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	if (locals.user) {
		const currentUser = await db.query.user.findFirst({
			where: eq(user.id, locals.user.id)
		});

		const games = fetch(`/api/steam/owned?id=${currentUser?.steamId}&includeInfo=1`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.response.games !== undefined) {
					return data.response.games.map((game: { appid: number; name: string }) => {
						return {
							id: game.appid,
							name: game.name
						};
					});
				}
			})
			.then((games) => {
				return games.sort((a: GameSimple, b: GameSimple) => a.name.localeCompare(b.name));
			});

		return {
			games: games
		};
	}
};
