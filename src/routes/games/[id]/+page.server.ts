import { db } from '$lib/server/db';
import { favoriteGames, user } from '$lib/server/db/schema';
import { and, eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const response = await event.fetch(
		`https://store.steampowered.com/api/appdetails?appids=${event.params.id}&cc=US`
	);
	const data = await response.json();

	console.log('Fetcing load again');

	if (event.locals.user) {
		const currentUser = await db.query.user.findFirst({
			where: eq(user.id, event.locals.user.id)
		});

		const owned = event
			.fetch(
				`/api/steam/owned?id=${currentUser?.steamId}&includeInfo=0&appIdFilter=${event.params.id}`
			)
			.then((res) => res.json())
			.then((data) => data.response.games !== undefined);

		const favorite = db.query.favoriteGames
			.findFirst({
				where: and(
					eq(favoriteGames.userId, event.locals.user.id),
					eq(favoriteGames.gameId, event.params.id)
				)
			})
			.then((res) => res !== undefined);

		return {
			gameInfo: data[event.params.id].data as SteamGame,
			owned: owned,
			favorite: favorite
		};
	}

	return {
		gameInfo: data[event.params.id].data as SteamGame
	};
};

import type { Actions } from './$types';

export const actions = {
	favorite: async (event) => {
		if (event.locals.user) {
			const favorite = await db.query.favoriteGames.findFirst({
				where: and(
					eq(favoriteGames.userId, event.locals.user.id),
					eq(favoriteGames.gameId, event.params.id)
				)
			});

			if (favorite) {
				console.log('Deleting favorite');
				await db.delete(favoriteGames).where(eq(favoriteGames.id, favorite.id));
			} else {
				console.log('Adding favorite');
				await db.insert(favoriteGames).values({
					userId: event.locals.user.id,
					gameId: event.params.id,
					platform: 'steam'
				});
			}
		}
	}
} satisfies Actions;
