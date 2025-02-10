import { db } from '$lib/server/db'; // your Drizzle database instance
import { eq } from 'drizzle-orm';
import { user } from '$lib/server/db/schema'; // your users table
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	let currentUser = null;
	if (locals.session) {
		// Query your database for the user based on the session’s userId.
		currentUser = await db.query.user.findFirst({
			where: eq(user.id, locals.session.userId)
		});
	}
	return { user: currentUser };
};
