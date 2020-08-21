import mongoose from 'mongoose';
import User from './user';

const env = process.env;

const URI = `mongodb://${env.DB_USER}:${env.DB_PASS}@${env.DB_SERVER}:${env.DB_PORT}/${env.DB_NAME}`;


const dbConnect = () => {
	return mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

const models = { User };
export { dbConnect };
export default models;

