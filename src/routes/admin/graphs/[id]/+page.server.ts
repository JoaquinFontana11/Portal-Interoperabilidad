import type { PageServerLoad } from './$types';
import { getGraph } from '$lib/server/db/db';

export const load: PageServerLoad = async ({ params }) => {
	const graph = await getGraph({ _id: params.id });
	return { graph: JSON.stringify(graph) };
};
