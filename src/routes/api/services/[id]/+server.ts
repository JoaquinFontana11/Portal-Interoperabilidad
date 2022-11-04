import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { updateService, deleteService } from '$lib/server/db/db';

export const DELETE: RequestHandler = async ({ params }) => {
	const oldService = await deleteService(params.id);
	return json({
		status: '201',
		oldService
	});
};

export const PATCH: RequestHandler = async ({ params, request }) => {
	const data = await request.json();
	const newService = await updateService(params.id, data);
	return json({
		status: '201',
		newService
	});
};
