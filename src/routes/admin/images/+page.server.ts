import type { PageServerLoad } from './$types';
import { getAllImage } from '$lib/server/db/db';

export const load: PageServerLoad = async () => {
	const images = await getAllImage();
	return { images: JSON.stringify(images) };
};
