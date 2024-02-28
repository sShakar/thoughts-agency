import mongoose from 'mongoose';

export async function connectToDatabase() {
	if (mongoose.connection.readyState === 1) return;
	try {
		await mongoose.connect(String(process.env.MONGO_DB));
	} catch (error) {
		console.log(error);
	}
}
