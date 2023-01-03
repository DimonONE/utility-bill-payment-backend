import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const {URI} = process.env;

export const connectBd = async () => {
  return await mongoose.connect(URI).then(() => console.log('Connected BD!'));
};
