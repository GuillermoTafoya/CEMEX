import mongoose from "mongoose";

const URI = "mongodb+srv://A01284213:cyberpunksAdmin@web-be-cluster.ti48frj.mongodb.net/?retryWrites=true&w=majority";

export async function connectToDb(){
	try {
		await mongoose.connect(URI);
		console.log("Connected!");
	} catch(error) {
		console.error(error);
	}
}