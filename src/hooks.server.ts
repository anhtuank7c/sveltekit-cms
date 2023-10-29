import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	return resolve(event);
}) satisfies Handle;
