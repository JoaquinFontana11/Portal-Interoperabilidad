import type { Actions, Action } from './$types';
import { invalid, redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

const login: Action = async ({ cookies, request }) => {
	const data = await request.formData();

	console.log(data.get('username'), data.get('password'));
	console.log(process.env.USER_APP, process.env.PASSWORD);

	if (!data.get('username') || !data.get('password')) return invalid(400, { missing: true });

	if (data.get('username') != process.env.USER_APP || data.get('password') != process.env.PASSWORD)
		return invalid(400, { credentials: true });

	const privateKey = process.env.JWT_PRIVATE_KEY as string;
	const token = jwt.sign({ user: process.env.USER_APP }, privateKey, {
		expiresIn: '1h'
	});

	cookies.set('jwt', token, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 30
	});

	throw redirect(302, '/admin');
};

export const actions: Actions = {
	login
};
