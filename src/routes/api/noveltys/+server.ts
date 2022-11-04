import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { createNovelty } from '$lib/server/db/db';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();

	const newNovelty = await createNovelty(data);
	return json({
		status: '201',
		newNovelty
	});
};
