import type { PageServerLoad } from './$types';
import { getAllGraph, getAllNovelty } from '$lib/server/db/db';

export const load: PageServerLoad = async () => {
	const graphs = await getAllGraph();
	const noveltys = await getAllNovelty();
	return { graphs: JSON.stringify(graphs), noveltys: JSON.stringify(noveltys) };
};
