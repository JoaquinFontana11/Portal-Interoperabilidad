import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { createService } from '$lib/server/db/db';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();

	const newService = await createService(data);
	return json({
		status: '201',
		newService
	});
};
