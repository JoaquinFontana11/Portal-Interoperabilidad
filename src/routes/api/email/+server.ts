import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { sendMail } from '$lib/server/email';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	await sendMail(data.body, data.from);
	return json({
		status: '200'
	});
};
