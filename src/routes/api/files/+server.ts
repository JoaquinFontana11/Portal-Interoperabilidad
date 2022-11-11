import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { writeFileSync, statSync } from 'fs';
import { createFile } from '$lib/server/db/db';
import * as dotenv from 'dotenv';

dotenv.config();

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const file = data.file;
	const type = data.type;
	const extension = data.name.split('.').at(-1);
	const path = `/${type}/${new Date().getTime()}.${extension}`;

	writeFileSync(`static${path}`, file, 'base64');

	const stats = statSync(`static${path}`);

	try {
		const newFile = await createFile({ name: data.name, type, url: path, size: stats.size });
		return json({
			status: '201',
			newFile
		});
	} catch (err) {
		throw err;
	}
};
