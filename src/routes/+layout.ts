import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
	return {
		admin: url.pathname.startsWith('/admin') || url.pathname.startsWith('/login')
	};
};
