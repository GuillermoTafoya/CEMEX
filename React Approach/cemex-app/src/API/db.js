import mongoose from "mongoose";

const URI = "mongodb+srv://a01284213:cyberpunksAdmin@cluster0.mc4qniu.mongodb.net/?retryWrites=true&w=majority";

export async function connectToDb(){
	try {
		await mongoose.connect(URI);
		console.log("Connected!");
	} catch(error) {
		console.error(error);
	}
}