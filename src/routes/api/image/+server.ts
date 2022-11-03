import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import sizeOf from 'image-size';
import { writeFileSync } from 'fs';
import { createImage } from '$lib/server/db/db';
import * as dotenv from 'dotenv';

dotenv.config();

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const file = data.image;
	const path = `/img/${new Date().getTime()}.png`;
	// const realPath = process.env.NODE_ENV == 'production' ? 'client' + path : 'static' + path;

	writeFileSync(`static${path}`, file, 'base64');
	const { width, height } = sizeOf(`static${path}`);

	try {
		const newImage = await createImage({ url: path, alt: data.alt, width, height });
		return json({
			status: '201',
			newImage
		});
	} catch (err) {
		throw err;
	}
};
