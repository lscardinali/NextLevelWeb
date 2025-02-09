import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import * as auth from '$lib/server/auth';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) {
		const userInfo = await db.query.user.findFirst({
			where: eq(user.id, event.locals.user.id)
		});
		return { user: event.locals.user, userInfo: userInfo };
	}

	return { user: event.locals.user };
};

export const actions: Actions = {
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(302, '/account');
	},
	linksteam: async (event) => {
		const formData = await event.request.formData();
		const steamid = formData.get('steamid') as string;

		if (!steamid) {
			return fail(400, { error: 'Invalid Steam ID format' });
		}

		const response = await event.fetch(`/api/steam/owned?id=${steamid}&includeInfo=0`);
		const content = await response.json();

		if (!response.ok && !content.response.game_count) {
			return fail(400, { steamid, error: 'Invalid Steam ID' });
		} else if (!event.locals.user) {
			return fail(401, { steamid, error: 'Not logged in' });
		}

		await db.update(user).set({ steamId: steamid }).where(eq(user.id, event.locals.user.id));

		return { success: true };
	}
};
