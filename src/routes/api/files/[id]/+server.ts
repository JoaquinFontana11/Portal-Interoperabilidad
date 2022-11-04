import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { deleteFile, getFile } from '$lib/server/db/db';
import { unlinkSync } from 'fs';

export const DELETE: RequestHandler = async ({ params }) => {
	const file = await getFile({ _id: params.id });
	unlinkSync(`static/${file.url}`);
	const oldFile = await deleteFile(params.id);
	return json({
		status: '201',
		oldFile
	});
};
