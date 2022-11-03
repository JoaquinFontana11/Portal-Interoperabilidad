import mongoose, { type Model, type Document, type model } from 'mongoose';
import * as dotenv from 'dotenv';

import ServiceModel from './models/ServiceModel';
import ImageModel from './models/ImageModel';
import FileModel from './models/FileModel';
import NoveltyModel from './models/NoveltyModel';
import GraphModel from './models/GraphModel';

dotenv.config();

let urlDB: string;
if (process.env.DB) {
	urlDB = process.env.DB;

	mongoose.connect(urlDB).then(() => {
		console.log('La conexion con la base de datos fue exitosa');
	});
}

const getOneFilter = <Type>(Model: Model<Type>): Function => {
	return async (query: Object): Promise<Document | null> => {
		const doc = await Model.findOne(query);
		return doc;
	};
};

const getAll = <Type>(Model: Model<Type>): Function => {
	return async (): Promise<Document[] | null> => {
		const docs = await Model.find();
		return docs;
	};
};

const createOne = <Type>(Model: Model<Type>): Function => {
	return async (data: Object): Promise<Document | null> => {
		const doc = await Model.create(data);
		return doc;
	};
};

const updateOne = <Type>(Model: Model<Type>): Function => {
	return async (id: string, data: Object): Promise<Document | null> => {
		const doc = await Model.findByIdAndUpdate(id, data, {
			new: true,
			runValidators: true
		});
		return doc;
	};
};

const deleteOne = <Type>(Model: Model<Type>): Function => {
	return async (id: string): Promise<Document | null> => {
		const doc = await Model.findByIdAndDelete(id);
		return doc;
	};
};

// CRUDS basicos
export const getFile = getOneFilter(FileModel);
export const getAllFile = getAll(FileModel);
export const createFile = createOne(FileModel);
export const deleteFile = deleteOne(FileModel);
export const updateFile = updateOne(FileModel);

export const getGraph = getOneFilter(GraphModel);
export const getAllGraph = getAll(GraphModel);
export const createGraph = createOne(GraphModel);
export const deleteGraph = deleteOne(GraphModel);
export const updateGraph = updateOne(GraphModel);

export const getNovelty = getOneFilter(NoveltyModel);
export const getAllNovelty = getAll(NoveltyModel);
export const createNovelty = createOne(NoveltyModel);
export const deleteNovelty = deleteOne(NoveltyModel);
export const updateNovelty = updateOne(NoveltyModel);

export const getService = getOneFilter(ServiceModel);
export const getAllService = getAll(ServiceModel);
export const createService = createOne(ServiceModel);
export const deleteService = deleteOne(ServiceModel);
export const updateService = updateOne(ServiceModel);

export const getImage = getOneFilter(ImageModel);
export const getAllImage = getAll(ImageModel);
export const createImage = createOne(ImageModel);
export const deleteImage = deleteOne(ImageModel);
export const updateImage = updateOne(ImageModel);
