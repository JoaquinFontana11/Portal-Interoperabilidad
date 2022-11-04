import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { updateGraph, deleteGraph } from '$lib/server/db/db';

export const DELETE: RequestHandler = async ({ params }) => {
	const oldGraph = await deleteGraph(params.id);
	return json({
		status: '201',
		oldGraph
	});
};

export const PATCH: RequestHandler = async ({ params, request }) => {
	const data = await request.json();
	const newGraph = await updateGraph(params.id, data);
	return json({
		status: '201',
		newGraph
	});
};
