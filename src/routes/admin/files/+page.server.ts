import type { PageLoad } from './$types';
import { getAllFile } from '$lib/server/db/db';

export const load: PageLoad = async () => {
	const files = await getAllFile();
	return { files: JSON.stringify(files) };
};
