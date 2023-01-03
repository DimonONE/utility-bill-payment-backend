import mongoose from 'mongoose';

const Schema = mongoose.Schema;
//@ts-ignore
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  userId: ObjectId,
  name: String,
  email: String,
  password: String,
  date: Date,
  status: String,
});

export const UsersPost = mongoose.model('Users', UserSchema);
