import type { PageServerLoad } from './$types';
import { getNovelty } from '$lib/server/db/db';

export const load: PageServerLoad = async ({ params }) => {
	const novelty = await getNovelty({ _id: params.id });
	return { novelty: JSON.stringify(novelty) };
};
