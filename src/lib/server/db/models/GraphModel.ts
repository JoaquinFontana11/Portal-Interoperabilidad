import { Schema, model } from 'mongoose';

export interface IGraph {
	type: string;
	data: [
		{
			name: string;
			value: number;
		}
	];
}

const graphSchema = new Schema<IGraph>({
	type: {
		type: String,
		default: 'chart',
		enum: ['chart']
	},
	data: [
		{
			name: String,
			value: Number
		}
	]
});

const GraphModel = model<IGraph>('graphs', graphSchema);

export default GraphModel;
