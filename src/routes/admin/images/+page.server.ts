import type { PageLoad } from './$types';
import { getAllImage } from '$lib/server/db/db';

export const load: PageLoad = async () => {
	const images = await getAllImage();
	return { images: JSON.stringify(images) };
};
