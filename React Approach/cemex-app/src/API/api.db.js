import mongoose from "mongoose";

const URI = "ATLASMONGODB";

export async function connectToDb(){
	try {
		await mongoose.connect(URI);
		console.log("Connected!");
	} catch(error) {
		console.error(error);
	}
}

//
