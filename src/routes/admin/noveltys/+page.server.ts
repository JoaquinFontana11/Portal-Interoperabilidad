import type { PageServerLoad } from './$types';
import { getAllNovelty } from '$lib/server/db/db';

export const load: PageServerLoad = async () => {
	const noveltys = await getAllNovelty();
	return { noveltys: JSON.stringify(noveltys) };
};
