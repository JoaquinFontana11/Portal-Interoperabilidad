import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import jwt from 'jsonwebtoken';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const token = cookies.get('jwt');
	const privateKey = process.env.JWT_PRIVATE_KEY as string;
	try {
		const decoded = jwt.verify(token, privateKey);
	} catch (err) {
		throw redirect(302, '/login');
	}
};
