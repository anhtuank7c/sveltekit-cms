import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) {
		throw redirect(301, '/login');
	}
	return {};
}) satisfies LayoutServerLoad;
