import mongoose from "mongoose";

const URL = process.env.MONGO_URI
export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(URL);
		console.log("MongoDB connected");
	} catch (error) {
		console.error("Error connecting to MONGODB");
		process.exit(1); // 1 means there was an error, 0 means success
	}
};
