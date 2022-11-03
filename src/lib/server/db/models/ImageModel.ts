import { Schema, model } from 'mongoose';

interface IImage {
	url: string;
	alt: string;
}

const imageSchema = new Schema<IImage>({
	url: {
		type: String,
		required: [true, 'Una imagen tiene que tener una url'],
		unique: true
	},
	alt: {
		type: String,
		required: [true, 'Una imagen tiene que tener un texto alternativo']
	}
});

const ImageModel = model<IImage>('images', imageSchema);

export default ImageModel;
