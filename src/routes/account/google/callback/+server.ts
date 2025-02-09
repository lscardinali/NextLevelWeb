import { generateSessionToken, createSession, setSessionTokenCookie } from '$lib/server/auth';
import { google } from '$lib/server/auth/google';
import { decodeIdToken } from 'arctic';

import type { RequestEvent } from '@sveltejs/kit';
import type { OAuth2Tokens } from 'arctic';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import { user } from '$lib/server/db/schema';

export async function GET(event: RequestEvent): Promise<Response> {
	const code = event.url.searchParams.get('code');
	const state = event.url.searchParams.get('state');
	const storedState = event.cookies.get('google_oauth_state') ?? null;
	const codeVerifier = event.cookies.get('google_code_verifier') ?? null;
	if (code === null || state === null || storedState === null || codeVerifier === null) {
		return new Response(null, {
			status: 400
		});
	}
	if (state !== storedState) {
		return new Response(null, {
			status: 400
		});
	}

	let tokens: OAuth2Tokens;
	try {
		tokens = await google.validateAuthorizationCode(code, codeVerifier);
	} catch (e) {
		console.error(e);
		// Invalid code or client credentials
		return new Response(null, {
			status: 400
		});
	}
	const claims = decodeIdToken(tokens.idToken()) as {
		sub: string;
		name: string;
	};
	const googleUserId = claims.sub;
	const username = claims.name;

	// TODO: Replace this with your own DB query.
	const existingUser = await db.query.user.findFirst({
		where: eq(user.googleId, googleUserId)
	});

	if (existingUser !== null && existingUser !== undefined) {
		const sessionToken = generateSessionToken();
		const session = await createSession(sessionToken, existingUser.id);
		setSessionTokenCookie(event, sessionToken, session.expiresAt);
		return new Response(null, {
			status: 302,
			headers: {
				Location: '/account'
			}
		});
	}

	// TODO: Replace this with your own DB query.
	const newUser = await db
		.insert(user)
		.values({
			id: crypto.randomUUID(),
			googleId: googleUserId,
			username: username
		})
		.returning()
		.then((rows) => rows[0]);

	const sessionToken = generateSessionToken();
	const session = await createSession(sessionToken, newUser.id);
	setSessionTokenCookie(event, sessionToken, session.expiresAt);
	return new Response(null, {
		status: 302,
		headers: {
			Location: '/account'
		}
	});
}
