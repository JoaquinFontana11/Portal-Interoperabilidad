import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { deleteImage, getImage } from '$lib/server/db/db';
import { unlinkSync } from 'fs';

export const DELETE: RequestHandler = async ({ params }) => {
	const image = await getImage({ _id: params.id });
	unlinkSync(`static/${image.url}`);
	const oldImage = await deleteImage(params.id);
	return json({
		status: '201',
		oldImage
	});
};
