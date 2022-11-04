import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { createGraph } from '$lib/server/db/db';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();

	const newGraph = await createGraph(data);
	return json({
		status: '201',
		newGraph
	});
};
