import { Schema, model } from 'mongoose';

export interface INovelty {
	title: string;
	body?: string;
	slug: string;
	summary: string;
	image?: string;
	date: Date;
}

const noveltySchema = new Schema<INovelty>({
	title: {
		type: String,
		required: [true, 'Una novedad tiene que tener un titulo']
	},
	body: String,
	summary: {
		type: String,
		required: [true, 'Una novedad tiene que tener un resumen'],
		unique: true
	},
	slug: {
		type: String,
		required: [true, 'Una novedad tiene que tener una slug'],
		unique: true
	},
	image: String,
	date: {
		type: Date,
		default: Date.now()
	}
});

const NoveltyModel = model<INovelty>('noveltys', noveltySchema);

export default NoveltyModel;
