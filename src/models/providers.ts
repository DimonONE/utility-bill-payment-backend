import mongoose from 'mongoose';

const Schema = mongoose.Schema;
//@ts-ignore
const ObjectId = Schema.ObjectId;

const ProvidersSchema = new Schema({
  id: ObjectId,
  name: String,
});

export const Providers = mongoose.model('providers', ProvidersSchema);
