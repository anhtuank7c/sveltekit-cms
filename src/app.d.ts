// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia').AuthRequest;
			// user: User | undefined;
			// sessionId: string | undefined;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

/// <reference types="lucia" />
declare global {
	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type DatabaseUserAttributes = {
			email: string;
			firstName: string;
			lastName: string;
		};
		type DatabaseSessionAttributes = {
			platform: string;
			ip_address: string;
		};
	}
}
export {};
