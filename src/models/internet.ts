import mongoose from 'mongoose';

const Schema = mongoose.Schema;
//@ts-ignore
const ObjectId = Schema.ObjectId;

const InternetSchema = new Schema({
  id: ObjectId,
  userId: String,
  userName: String,
  price: Number,
  provider: String,
  date: Date,
});

export const InternetPost = mongoose.model('Internet', InternetSchema);
