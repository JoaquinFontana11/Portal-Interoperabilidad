import type { PageLoad } from './$types';
import { getAllService } from '$lib/server/db/db';

export const load: PageLoad = async () => {
	const services = await getAllService();
	return { services: JSON.stringify(services) };
};
