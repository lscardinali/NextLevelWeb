import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	if (locals.user) {
		const currentUser = await db.query.user.findFirst({
			where: eq(user.id, locals.user.id)
		});

		const games = fetch(`/api/steam/owned?id=${currentUser?.steamId}&includeInfo=1`).then((res) =>
			res.json()
		);

		return {
			games: games
		};
	}
};
