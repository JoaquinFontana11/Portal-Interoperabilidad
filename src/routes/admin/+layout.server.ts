import { redirect } from '@sveltejs/kit';

// /** @type {import('./$types').LayoutServerLoad} */
// export async function load({ request }) {
// if (!request.user || !(JSON.parse(request.user).rol == 'admin')) {
// 	throw redirect(301, '/login');
// }
// 	return {};
// }

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	return {};
}
