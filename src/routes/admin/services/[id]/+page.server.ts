import type { PageServerLoad } from './$types';
import { getService } from '$lib/server/db/db';

export const load: PageServerLoad = async ({ params }) => {
	const service = await getService({ _id: params.id });
	return { service: JSON.stringify(service) };
};
