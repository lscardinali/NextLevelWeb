// See https://svelte.dev/docs/kit/types#app.d.ts

import type { User } from '$lib/server/db/schema';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			user?: User;
		}
		interface PageState {
			showProfile?: boolean;
			showScreenshot?: boolean;
		}
		// interface Platform {}
		interface Locals {
			user: import('$lib/server/auth').SessionValidationResult['user'];
			session: import('$lib/server/auth').SessionValidationResult['session'];
		}
	}
}

export {};
