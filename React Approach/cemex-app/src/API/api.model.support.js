import mongoose from "mongoose";

const supportMessage = mongoose.Schema(
	{
		message: {type: String}
	}	
);

export default mongoose.model("Message", supportMessage);