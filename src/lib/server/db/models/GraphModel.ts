import { Schema, model } from 'mongoose';

export interface IGraph {
	title: string;
	type: string;
	data: [
		{
			name: string;
			value: number;
		}
	];
}

const graphSchema = new Schema<IGraph>({
	title: {
		type: String,
		required: [true, 'Un grafico debe tener un titulo']
	},
	type: {
		type: String,
		default: 'pie',
		enum: ['pie', 'bar']
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
