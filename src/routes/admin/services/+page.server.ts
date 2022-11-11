import type { PageServerLoad } from './$types';
import { getAllService } from '$lib/server/db/db';

export const load: PageServerLoad = async () => {
	const services = await getAllService();
	return { services: JSON.stringify(services) };
};
