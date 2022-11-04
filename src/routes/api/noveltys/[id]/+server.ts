import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { updateNovelty, deleteNovelty } from '$lib/server/db/db';

export const DELETE: RequestHandler = async ({ params }) => {
	const oldNovelty = await deleteNovelty(params.id);
	return json({
		status: '201',
		oldNovelty
	});
};

export const PATCH: RequestHandler = async ({ params, request }) => {
	const data = await request.json();
	const newNovelty = await updateNovelty(params.id, data);
	return json({
		status: '201',
		newNovelty
	});
};
