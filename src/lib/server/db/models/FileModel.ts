import { Schema, model } from 'mongoose';

interface IFile {
	name: string;
	type: string;
	url: string;
	order: number;
	date: Date;
}

const fileSchema = new Schema<IFile>({
	name: {
		type: String,
		required: [true, 'Un archivo tiene que tener un titulo']
	},
	type: {
		type: String,
		default: 'files',
		enum: ['files', 'videos']
	},
	url: {
		type: String,
		required: [true, 'Un archivo tiene que tener una url']
	},
	order: { type: Number, default: 99 },
	date: {
		type: Date,
		default: Date.now()
	}
});

const FileModel = model<IFile>('files', fileSchema);

export default FileModel;
