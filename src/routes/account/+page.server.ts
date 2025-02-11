import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import * as auth from '$lib/server/auth';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, '/account/signin');
	}

	return {
		user: locals.user
	};
};

export const actions: Actions = {
	sendtestemail: async () => {
		const resend = new Resend(RESEND_API_KEY);

		resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'lucascardinali92@gmail.com',
			subject: 'Welcome!',
			html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
		});

		console.log('Email sent');
		return { success: true };
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
	},
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(302, '/account');
	}
};
