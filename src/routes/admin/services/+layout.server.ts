import type { LayoutServerLoad } from './$types';
import { getAllImage, getAllFile } from '$lib/server/db/db';

export const load: LayoutServerLoad = async () => {
	const images = await getAllImage();
	const files = await getAllFile();
	return { images: JSON.stringify(images), files: JSON.stringify(files) };
};
