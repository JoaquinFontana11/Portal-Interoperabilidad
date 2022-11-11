import type { PageServerLoad } from './$types';
import { getNovelty } from '$lib/server/db/db';

export const load: PageServerLoad = async ({ params }) => {
	const novelty = await getNovelty({ slug: params.slug });
	return { novelty: JSON.stringify(novelty) };
};
