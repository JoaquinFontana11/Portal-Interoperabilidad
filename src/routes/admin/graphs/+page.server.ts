import type { PageServerLoad } from './$types';
import { getAllGraph } from '$lib/server/db/db';

export const load: PageServerLoad = async () => {
	const graphs = await getAllGraph();
	return { graphs: JSON.stringify(graphs) };
};
