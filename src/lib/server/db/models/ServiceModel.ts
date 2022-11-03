import { Schema, model } from 'mongoose';

interface IService {
	module: string;
	function: string;
	organism: string;
}

const serviceSchema = new Schema<IService>({
	module: {
		type: String,
		required: [true, 'Un servicio tiene que pertenecer a un modulo']
	},
	function: {
		type: String,
		required: [true, 'Un servicio tiene que tener una funcionalidad']
	},
	organism: {
		type: String,
		required: [true, 'Un servicio tiene que pertenecer a un organismo']
	}
});

const ServiceModel = model<IService>('services', serviceSchema);

export default ServiceModel;
